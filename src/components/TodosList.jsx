import Todo from './Todo.jsx';

function TodosList() {

  return (
    <>
        <div className="todos">

            <Todo
              title="Do Groceries"
              description="Buy apples, rice, juice and toilet paper."
              isDone={true}
            />

            <Todo
              title="Study React"
              description="Understand context, reducers and state management with Redux."  
              isDone={false}
            />

        </div>
    </>
  )
}

export default TodosList