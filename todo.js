const newTodoInput = document.getElementById('newTodo'); //label
const addBtn = document.getElementById('addBtn'); //button
const todoList =document.getElementById('todoList')//ul
function addTodo(){
    const newTodoText = newTodoInput.value;
    newTodoInput.value="";

    const listItem=document.createElement('li');//creating li
    const completeCheckBox=document.createElement('input');//creating a input for checkbox
    const todoText=document.createElement('span');//empty list
    const  deleteBtn=document.createElement('button');//creating delete button
    completeCheckBox.type='checkbox';

    //appending ie putting all in one li includes checkbox,span(p),delete button
    listItem.appendChild(completeCheckBox);
    listItem.appendChild(todoText);
    listItem.appendChild(deleteBtn);


    todoText.textContent=newTodoText;
    deleteBtn.textContent='Delete';
    todoList.append(listItem);

    deleteBtn.addEventListener('click',function(){
        todoList.removeChild(listItem)
    })//to delete the list item ie to activate the delete button


}
addBtn.addEventListener('click',addTodo)