export function Footer({onClearComplete, setItemLeftCount}) {

    return (
  
      <footer className="footer">
          <span className="todo-count"><strong>{setItemLeftCount}</strong> items left</span>
          <button className="clear-completed" onClick={onClearComplete}>Clear completed
          </button>
      </footer>
    )
  }