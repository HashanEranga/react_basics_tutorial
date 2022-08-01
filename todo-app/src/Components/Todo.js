function Todo(props) {
    return(
        <div className="card">
            <h1>{props.title}</h1>
            <div className="actions">
                <button className="btn">Delete</button>
            </div>
        </div>
    )
}

export default Todo