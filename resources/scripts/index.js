
  
  console.log(crypto.randomUUID());


// // let myToDos = document.getElementById("toDos")
// // myToDos.innerHTML = '<p> Complete PA 1 </p>' 

// const todos = [
//     {
//         text: "Complete PA 1",
//         completed: false
//     },
//     {
//         text: "Do laundry",
//         completed: true
//     },
//     {
//         text: "Go to aims",
//         completed: false
//     },
//     {
//         text: "Conduct kickoff meeting",
//         completed: true
//     }
// ]

// const filters = {
//     searchText: '',
//     hideCompleted: false
// }
// const renderToDos = function(todos, filters){
//     const filteredToDos = todos.filter(function(todo){
//         console.log(todo)
//         console.log(filters)
//     const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
//     })
//     document.querySelector("#toDos").innerHTML ='' // allows to get ALL of the todos
//     const summary = document.createElement('h2')
//     summary.textContent = (`You have ${todos.length} to-dos left to complete`)
//     document.querySelector('#toDos').appendChild(summary)
    
//     // creates paragraph for todo
//     todos.forEach(function(todo){
//         const p = document.createElement('p')
//         p.textContent = `${todo.text}`
//         document.querySelector('#toDos').appendChild(p)

//     })
// }

// document.querySelector('#new-todos').addEventListener('submit', function(e){
//     e.preventDefault() //prevents page refresh
//     //console.log("im here")
//     todos.push({text: e.target.elements.text.value, completed: false})
//    // console.log(e.target.elements.text.value)
//     renderToDos(todos, filters)
// })

// document.querySelector('#searchText').addEventListener('input', function(e){
//     filters.searchText = e.target.value
//     renderToDos(todos, filters)
// })

// renderToDos(todos, filters)


