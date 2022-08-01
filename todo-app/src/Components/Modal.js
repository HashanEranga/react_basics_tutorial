function Modal(props){

    function handleCancel(){
        props.onCancel()
    }
    function handleConfirm(){
        props.onConfirm()
    }

    return (
        <div className="modal">
            <p>Are you sure to Delete</p>
            <div className="actions">
                <button className="btn" onClick={handleCancel}>Delete</button>
                <button className="btn btn--alt" onClick={handleConfirm}>Confirm</button>
            </div>
        </div>
    )
}

export default Modal