
function Todo({ title, description, isDone }) {

  return (
    <>
        <div className={`todo ${isDone ? 'done' : ''}`}>
            <button className="erase">x erase</button>
            <h3>
                {title}
            </h3>
            <p>
                {description}
            </p>
            <div className="task-check">
                <input type="checkbox" checked={isDone} />
                <label>
                    {!isDone ? 'To-Do' : 'Done'}
                </label>
            </div>
        </div>

    </>
  )
}

export default Todo