import React, { useState } from 'react';
import '../Stylesheets/styles.css';


const PlannerApp = () => {
  const [tasks, setTasks] = useState([
   
  ]);
  const [inputValue, setInputValue] = useState('');
  const [doneTasks, setDoneTasks] = useState([]);
  const [done2Tasks, setDone2Tasks] = useState([]);


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: prevTasks.length + 1, text: inputValue },
      ]);
      setInputValue('');
    }
  };

  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('text/plain', id.toString());
    e.currentTarget.style.opacity = '0.5';
  };

  const handleDragEnd = (e) => {
    e.currentTarget.style.opacity = '1';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.currentTarget.style.border = '2px dashed #999';
  };

  const handleDragLeave = (e) => {
    e.currentTarget.style.border = '1px solid #ccc';
  };

  const handleDrop = (e, targetColumn) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('text/plain');
   
    
      const task = tasks.find((task) => task.id === parseInt(taskId, 10));
      const donetask = doneTasks.find((task) => task.id === parseInt(taskId, 10));
      const donetask2 = done2Tasks.find((task) => task.id === parseInt(taskId, 10));
      
      
    if (task) {
      setTasks((prevTasks) => prevTasks.filter((t) => t.id !== task.id));
      switch (targetColumn) {
        case 'done-column':
          setDoneTasks((prevTasks) => [...prevTasks, task]);
          break;
        case 'done-2-column':
          setDone2Tasks((prevTasks) => [...prevTasks, task]);
          break;
        
        default:
          break;
      }
        
      e.currentTarget.style.border = '1px solid #ccc';
    }
    else if (donetask2) {
        setDone2Tasks((prevTasks) => prevTasks.filter((t) => t.id !== donetask2.id));
        switch (targetColumn) {
            case 'done-column':
              setDoneTasks((prevTasks) => [...prevTasks, donetask2]);
              break;
            case 'done-2-column':
              setDone2Tasks((prevTasks) => [...prevTasks, donetask2]);
              break;
            
            default:
              break;
          }
            
          e.currentTarget.style.border = '1px solid #ccc';
    }
   
    else if (donetask) {
        setDoneTasks((prevTasks) => prevTasks.filter((t) => t.id !== donetask.id));
        switch (targetColumn) {
            case 'done-column':
              setDoneTasks((prevTasks) => [...prevTasks, donetask]);
              break;
            case 'done-2-column':
              setDone2Tasks((prevTasks) => [...prevTasks, donetask]);
              break;
            
            default:
              break;
          }
            
          e.currentTarget.style.border = '1px solid #ccc';
    }
    
      
  };

  return (
    <div>
      <div className="column-1" id="todo-column">
        <h2>What would you think and feel if u were in Ethan's situation?</h2>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="fname">Enter what you think and feel. After done click ENTER and drag ur text to either of the boxes</label>
          <br />
          <input
            type="text"
            id="fname"
            placeholder="Enter a thing"
            value={inputValue}
            onChange={handleInputChange}
          />
          <br />
          <br />
        </form>
        <div id="task_list">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="task"
              draggable="true"
              onDragStart={(e) => handleDragStart(e, task.id)}
              onDragEnd={handleDragEnd}
            >
              {task.text}
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div
          className="column"
          id="done-2-column"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'done-2-column')}
        >
          <h2>FEELS</h2>
          {done2Tasks.map((task) => (
            <div
            key={task.id}
            className="task"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, task.id)}
            onDragEnd={handleDragEnd}
          >
            {task.text}
          </div>
          ))}
        </div>
        <div
          className="column"
          id="done-column"
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, 'done-column')}
        >
          <h2>THINKS</h2>
          {doneTasks.map((task) => (
            <div
            key={task.id}
            className="task"
            draggable="true"
            onDragStart={(e) => handleDragStart(e, task.id)}
            onDragEnd={handleDragEnd}
          >
            {task.text}
          </div>
          ))}
      
        </div>
      </div>
    
    </div>
  );
};

export default PlannerApp;
