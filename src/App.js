import logo from './logo.svg';
import './App.css';
import './index.css';
import React, {useState, useEffect} from 'react'
import {Header} from './Header.js'
import {Main} from './Main.js'
import {Footer} from './Footer.js'

function App() {

  const title = "todo"
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);
  const [todo, setTodo] = useState([]);

  useEffect(() => {

      fetch('https://jsonplaceholder.typicode.com/todos')
      .then(respose => respose.json())
      .then(setTodo)
      .catch(err => {

        console.log(err);
      })

      //Without fetch
      // const newTodo = [
      //   {title: "learn react", completed : false},
      //   {title: "learn javaScript", completed : true},
      //   {title: "learn HTML", completed : true},
      //   {title: "learn Java", completed : false}];
      // setTodo(newTodo);
  }, [])

  useEffect(() => {

    let uncompleted = todo.filter( task => !task.completed );
    setNoneCompletedItemsCount(uncompleted.length);
  }, [todo])

  const clearAllCompletedItems = () => {

    const newTodo = todo.filter(currentTodo => !currentTodo.completed);
    setTodo(newTodo);
  }

  const Addtodo = (event) => {
        
    if (event.key == "Enter") {

        const newTodo = todo.concat([{title: event.target.value, completed : false}])
        setTodo(newTodo);
        event.target.value = '';
    }
}

const removeTodo = (todoRemove) => {

  const newTodo = todo.filter((currentTodo => currentTodo.title != todoRemove.target.value))
  setTodo(newTodo);
}

const markAsCompleted = (markedTodo) => {
  
  todo.forEach((currentTodo) => {

    if (currentTodo.title == markedTodo.target.value) {
        currentTodo.completed = !currentTodo.completed;
        changeCount(currentTodo.completed);
        return;
    }
  })
}

function checkIfAllTasksAreDone(){

  for (let i = 0; i < todo.length; i++) {

    if (!todo[i].completed){

      return true
    }
  }
  return false;
}

const togAll = () => {

  const checkMyTask = checkIfAllTasksAreDone();
  const newTodo = todo.map( task => ({ ...task, completed: checkMyTask}));
  setTodo(newTodo);
}

function changeCount(markedAsDone) {

  let newCount = noneCompletedItemsCount;

  if (markedAsDone) {

    newCount--;
  }

  else {

    newCount++;
  }
  
  setNoneCompletedItemsCount(newCount);
}

function AddNewtodo(press){

  if (press.key == 'Enter') {

    todo[press.target.id].title = press.target.value;
    press.target.value = '';
    const newTodo = todo.slice();
    setTodo(newTodo);
  }
}

function markANewTask(element){

  todo[element.target.id].title = <input type="text" className="new-todo" onKeyUp={AddNewtodo} autoFocus id = {element.target.id}/>;
  const newTodo = todo.slice();
  setTodo(newTodo)
}

  return (

  <section className="todoapp">

    <Header OnEnterAddTodo = {Addtodo} title = {title}/>
    <Main todo = {todo} togAllTodo = {togAll} removeTheTodoLine = {removeTodo} markTodoLineAsCompleted = {markAsCompleted} changeTask = {markANewTask}/>
    <Footer onClearComplete = {clearAllCompletedItems} setItemLeftCount = {noneCompletedItemsCount}/>

  </section>
  );
}

export default App;
