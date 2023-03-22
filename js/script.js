const inputList = document.getElementById('input');
const addButton = document.getElementById('button');
const itemList = document.getElementById('items');
const feedback = document.getElementById('feedback');

function listItem(){
   const itemsList = document.createElement('li');
    if (inputList.value.trim() !== ''){
       itemsList.textContent = inputList.value;
       itemList.appendChild(itemsList);
       feedback.textContent = '';
       inputList.value = '';
       inputList.focus();
    }

    else{
       feedback.textContent = 'Nothing entered!';
    }
}
addButton.addEventListener('click', listItem);
