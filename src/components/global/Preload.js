import React, { useState, useEffect } from 'react'
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
            <h1 className=" customs-logo-preloaded">MMS</h1>
        </div>
    )
}

export default Preload
