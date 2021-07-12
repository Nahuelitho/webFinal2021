const todos = JSON.parse(localStorage.getItem('todos')) || [];
const render = () =>{
    const todoList = document.getElementById('todo-list');
    const todosTemplate =todos.map(t=> '<li>'+t+'</li>');//lo que ponga aqui va a ser lo que llena el arreglo - el map tiiene que tener un retorno siempre
    todoList.innerHTML = todosTemplate.join('');
    const elementos = document.querySelectorAll('#todo-list li');//se seleccionan todos los elementos con esa condicion//capturo en un elemento mas grande a uno mas pequeño
    elementos.forEach((elemento,i)=>{
        elemento.addEventListener('click',()=>{
            elemento.parentNode.removeChild(elemento);//los indices no sincronizan 
            todos.splice(i, 1); //con este indice entonces volvemos a llamar la funcion para renderisar
            actualizaTodos(todos);
            render()
            
        })
    })
}
const actualizaTodos= (todos)=>{
    const todosStrings = JSON.stringify(todos);
    localStorage.setItem('todos',todosStrings);
}
window.onload= () => {//carga primero toda la pagina
    render()
const form = document.getElementById('todo-form');
form.onsubmit = (e) =>{
    e.preventDefault();
    const todo = document.getElementById('todo');
    const todoText = todo.value;
    todo.value='';
    todos.push(todoText);
    actualizaTodos(todos)
   render()
}
}
