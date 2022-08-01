function Todo(props) {
    const handleDelete = function(){
        console.log(props.title)
        console.log("Working button")
    }

    return(
        <div className="card">
            <h1>{props.title}</h1>
            <div className="actions">
                <button className="btn" onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Todo