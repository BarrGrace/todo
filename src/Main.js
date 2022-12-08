export function Main({todo, togAllTodo, removeTheTodoLine, markTodoLineAsCompleted, changeTask}) {


    return (
      
      <section className="main">
          <input className="toggle-all" type="checkbox" onClick={togAllTodo}/>
          <ul className="todo-list">
              {todo.map((element, unique_id) =>(

                <li key={unique_id} className={element.completed ? 'completed' : ''}>
                  <div className="view">
                      <input className="toggle" type='checkbox' value={element.title} checked={element.completed} onChange={markTodoLineAsCompleted}/>
                      <label onDoubleClick={changeTask} id = {unique_id}>
                        {(element.title)}
                      </label>
                      <button className="destroy" onClick={removeTheTodoLine} value={element.title}/>
                  </div>
                  <input className="edit" />
              </li>
              ))}
          </ul>
      </section>
    )
  }