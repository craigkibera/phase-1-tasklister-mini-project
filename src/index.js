// document.addEventListener("DOMContentLoaded", () => {
//  let form = document.querySelector('form')
//  form.addEventListener('submit',(e) =>{
//     e.preventDefault()
//    document.getElementById("new-task-description")
//     buildTask(document.getElementById("new-task-description").value)
//     form.reset()

// const { list } = require("mocha/lib/reporters");

    
//  })

// })

// function buildTask(task){
//   let p = document.createElement('p')
//   let btn = document.createElement('button')
//   btn.addEventListener('click',handleDelete)
//   btn.textContent = 'x'
//   p.textContent = `${task}`
//   p.appendChild(btn)
//   console.log(p)
// document.getElementById('tasks').appendChild(p)
// return document.getElementById('tasks').appendChild(p)
// }
// function handleDelete(e){
//   e.target.parentNode.remove()
// }

document.addEventListener("DOMContentLoaded", (event) => {
  event.preventDefault();
  const form = document.getElementById("create-task-form");
  const list =document.getElementById("tasks");
  form.onsubmit = (e) =>{
    e.preventDefault();
    task = document.getElementById("new-task-description").value;
    color = document.getElementById("select_colors").value
    list.appendChild(addTodoList(task,color))
    form.reset()
  }
  function addTodoList(todo,colors){
    let lists = document.createElement("li")
    lists.textContent = todo;
    lists.style.color = colors;
    // add delete button
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "x";
    lists.appendChild(deleteButton);
    deleteButton.onclick = () =>{
      lists.remove()
    }
    return lists;
    
 }
})








