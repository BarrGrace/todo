
export function Header({OnEnterAddTodo, title}) {
  
    return (<header className='header'>
        <h1>{title}</h1>
        <input type="text" className="new-todo" placeholder="What needs to be done?" onKeyUp={OnEnterAddTodo} autoFocus/>
        </header>)
}
  
  
  