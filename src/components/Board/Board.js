import React, { useState, useEffect } from 'react';
// import { Button } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import './../../assets/css/board.css'
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import db from './../../firebaseConfig'
import ControlNav from './ControlNav';
import AddMealForm from './../Forms/AddMealForm'
import VerticallyCenteredModal from './../global/VerticallyCenteredModal'


const Board = (props) => {
    const [meals, setMeals] = useState([])
    const [modalShow, setModalShow] = useState(false);
    const [item, setItem] = useState({});

    const docId = props.match.params.id
    useEffect(() => {
        fetchItems()
        /* eslint-disable-next-line */
    }, [])

    const fetchItems = async () => {
        db.collection("branches").doc(docId).collection('meals')
            .onSnapshot((snapshot) => {
                const mealsArray = snapshot.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setMeals(mealsArray)
            })
    }
    const columnsFromBackend = {
        'to-cook': {
            name: "To Coock",
            items: meals.filter(meal => meal.status === 'to-cook')
        },
        'cooking': {
            name: "Cooking",
            items: meals.filter(meal => meal.status === 'cooking')
        },
        'cooked': {
            name: "Served",
            items: meals.filter(meal => meal.status === 'cooked')
        }
    };
    const [columns, setColumns] = useState(columnsFromBackend);

    useEffect(() => {
        setColumns(columnsFromBackend);
        /* eslint-disable-next-line */
    }, [meals])
    // branches(collection).branch(document).meals(collection)


    const onDragEnd = async (result, columns, setColumns) => {

        if (!result.destination) return;
        const { source, destination } = result;

        if (source.droppableId !== destination.droppableId) { // change the server data
            const sourceColumn = columns[source.droppableId];
            const destColumn = columns[destination.droppableId];
            const sourceItems = [...sourceColumn.items];
            const destItems = [...destColumn.items];
            const [removed] = sourceItems.splice(source.index, 1);
            destItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...sourceColumn,
                    items: sourceItems
                },
                [destination.droppableId]: {
                    ...destColumn,
                    items: destItems
                }
            });
            const newObj = {
                ...removed,
                status: destination.droppableId
            }
            console.log('newObj :', newObj);
            await db.collection('branches').doc(docId).collection('meals').doc(removed.id).set(newObj)


        } else { // change the server data
            const column = columns[source.droppableId];
            const copiedItems = [...column.items];
            const [removed] = copiedItems.splice(source.index, 1);
            copiedItems.splice(destination.index, 0, removed);
            setColumns({
                ...columns,
                [source.droppableId]: {
                    ...column,
                    items: copiedItems
                }
            });
        }
    };


    const editItem = async (id) => {
        const res = await db.collection('branches').doc(docId).collection('meals').doc(id).get()
        setItem(res.data())
        setModalShow(true)
    }

    return (
        <main className="board">
            <Container className="mt-100px min-h-100">
                <ControlNav boardId={docId} />
                <Row>
                    <div style={{ display: "flex", justifyContent: "center", height: "100%" }}>
                        <DragDropContext
                            onDragEnd={result => onDragEnd(result, columns, setColumns)}
                        >
                            {Object.entries(columns).map(([columnId, column], index) => {
                                return (
                                    <Col lg={4} md={12} className="to-do "
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                        }}
                                        key={columnId}
                                    >
                                        <h2 className="column-title">{column.name}</h2>
                                        <div style={{ margin: 8, height: '100%' }}>
                                            <Droppable className="parent" droppableId={columnId} key={columnId}>
                                                {(provided, snapshot) => {
                                                    return (
                                                        <div
                                                            {...provided.droppableProps}
                                                            ref={provided.innerRef}
                                                            style={{
                                                                background: snapshot.isDraggingOver
                                                                    ? "rgb(232, 244, 255)"
                                                                    : "#f3f3f3",
                                                                padding: 6,
                                                                minWidth: 330,
                                                                height: "100%"
                                                            }}
                                                            className="field-column field-body "
                                                        >
                                                            {column.items.map((item, index) => {
                                                                return (
                                                                    <Draggable
                                                                        key={item.id}
                                                                        draggableId={item.id}
                                                                        index={index}
                                                                    >
                                                                        {(provided, snapshot) => {
                                                                            return (
                                                                                <div
                                                                                    ref={provided.innerRef}
                                                                                    {...provided.draggableProps}
                                                                                    {...provided.dragHandleProps}
                                                                                    style={{
                                                                                        userSelect: "none",
                                                                                        // padding: 16,

                                                                                        borderRadius: '5px',
                                                                                        border: ' 1px solid rgba(0, 63, 146, 0.514)',
                                                                                        margin: "0 0 8px 0",
                                                                                        minHeight: "50px",
                                                                                        backgroundColor: snapshot.isDragging
                                                                                            ? "#f3f3f3af"
                                                                                            : "white",
                                                                                        color: "gray",
                                                                                        ...provided.draggableProps.style
                                                                                    }}
                                                                                >

                                                                                    <div className='flex flex-col'>
                                                                                        <div className="item-image">
                                                                                            <img src={item.mealUrl} alt={item.title} />
                                                                                        </div>
                                                                                        <div className='item-body'>
                                                                                            <h2 onClick={e => editItem(item.id)} className="item-title">
                                                                                                {item.title}
                                                                                            </h2>
                                                                                        </div>
                                                                                        <div className="divider"></div>
                                                                                        <div className='flex align-center justify-between item-footer'>
                                                                                            <small className="chef-name">
                                                                                                {item.chef}
                                                                                            </small>
                                                                                            <small className={`item-priority ${item.priority === 'High' ? 'high-pri' : item.priority === 'Medium' ? 'md-pri' : 'low-pri'} `}>
                                                                                                {item.priority}
                                                                                            </small>
                                                                                            {/* <small className={`item-priority md-pri`}>
                                                                                                {item.priority}
                                                                                            </small>
                                                                                            <small className={`item-priority low-pri`}>
                                                                                                {item.priority}
                                                                                            </small> */}
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            );
                                                                        }}
                                                                    </Draggable>
                                                                );
                                                            })}
                                                            {provided.placeholder}
                                                        </div>
                                                    );
                                                }}
                                            </Droppable>
                                        </div>
                                    </Col>
                                );
                            })}
                        </DragDropContext>
                    </div>
                </Row>

                {/* <Row className="fields">
                    <Col lg={4} md={12} className="to-do">
                        <div className="col-body-field field-body">
                            1
                        </div>
                    </Col>
                    <Col lg={4} md={12} className="doing">
                        <div className="col-body-field field-body">
                            2
                        </div>
                    </Col>
                    <Col lg={4} md={12} className="did">
                        <div className="col-body-field field-body">
                            3
                        </div>
                    </Col>
                </Row> */}


            </Container>
            <VerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                title="Add a new Branch"
            >

                <AddMealForm initialValuesOnEdit={item} />
            </VerticallyCenteredModal>
        </main >
    )
}

export default Board


