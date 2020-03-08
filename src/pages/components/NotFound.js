import React from 'react'
import './generic-page.css'


const NotFound = (props) => {
    const handleRandomClick = () => {
        const random = Math.round(Math.random() * (10 - 1) + 1)
        props.history.push(`/videos?id=${random}`);
    }
    const handleBackClick = () => {
        props.history.go(-1);
    }
    const handleForwardClick = () => {
        props.history.goForward();
    }
    return (
        <div className="Page NotFound">
            <h1>404</h1>
            <h3 className="SadFace">:(</h3>
            <h2>No hemos ecnontrado la pagina que buscabas</h2>
            <button
                className='Button'
                onClick={handleForwardClick}
            >
                Ir a la siguiente pagina
            </button>
            <button
                className='Button'
                onClick={handleBackClick}
            >
                Ir a la ruta anterior
            </button>
            <button
                className='Button'
                onClick={handleRandomClick}
            >
                Video Random
            </button>
        </div>
    )
}

export default NotFound
