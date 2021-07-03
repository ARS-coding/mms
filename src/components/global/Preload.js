import React, { useState, useEffect } from 'react'
import puff from './../../assets/icons/puff.svg'

const Preload = () => {

    const [load, setLoad] = useState(false)
    useEffect(() => {
        window.addEventListener('load', () => {
            setTimeout(() => {
                setLoad(true);
            }, 1500);
        });
    }, [])

    return (
        <div className={`preloader-wrap ${load ? 'loaded' : ''}`}>
            <div className="flex align-center justify-center flex-col">
                <h1 className=" customs-logo-preloaded">MMS</h1>
                <img src={puff} alt="spinier" />
            </div>
        </div>
    )
}

export default Preload

