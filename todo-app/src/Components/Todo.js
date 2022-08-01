import {useState} from 'react'
import Backdrop from './Backdrop'
import Modal from './Modal'
function Todo(props) {

    const [modelIsOpen, setModelIsOpen] = useState(false)

    const handleDelete = function(){
        setModelIsOpen(true)
    }

    const closeHandleBackdrop = function(){
        setModelIsOpen(false)
    }

    return(
        <>
            <div className="card">
                <h1>{props.title}</h1>
                <div className="actions">
                    <button className="btn" onClick={handleDelete}>Delete</button>
                </div>
            </div>
            {modelIsOpen && <Modal onCancel={closeHandleBackdrop} onConfirm={closeHandleBackdrop}/>}
            {modelIsOpen && <Backdrop onCancel={closeHandleBackdrop}/>}
        </>
    )
}

export default Todo