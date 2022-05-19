var myForm = document.getElementById('my-form');
var addBtn = document.getElementById('add_btn');
var count =0;

// Function executed when the add button is clicked
addBtn.onclick = (e)=> {
    e.preventDefault();
    let nameDiv = document.createElement('div');
    nameDiv.classList.add('mb-3', 'col-md-4', 'd_' + count);
    let newField = document.createElement('input');
    newField.setAttribute('type','text');
    newField.setAttribute('name','name[]');
    newField.classList.add('form-control');
    newField.setAttribute('placeholder','Name');
    nameDiv.appendChild(newField);
    myForm.appendChild(nameDiv);

    let divSurname = document.createElement('div');
    divSurname.classList.add('mb-3', 'col-md-4', 'd_' + count);
    let newFieldSurnmae = document.createElement('input');
    newFieldSurnmae.setAttribute('type','text');
    newFieldSurnmae.setAttribute('name','surname[]');
    newFieldSurnmae.classList.add('form-control');
    newFieldSurnmae.setAttribute('placeholder','Surname');
    divSurname.appendChild(newFieldSurnmae);
    myForm.appendChild(divSurname);

    let divBtn = document.createElement('div');
    divBtn.classList.add('mb-3', 'col-md-4', 'd_' + count);
    let deleteBtn = document.createElement('button');
    deleteBtn.classList.add('btn', 'btn-danger', 'delete');
    deleteBtn.setAttribute('type', 'button');
    deleteBtn.setAttribute('data-id', count++);
    deleteBtn.setAttribute('onclick', 'deleteButtons(this)')
    deleteBtn.innerText = 'Delete';
    divBtn.appendChild(deleteBtn);
    myForm.appendChild(divBtn);
}

// Function executed when the delete button is clicked
function deleteButtons(e) {
    const idToRemove = e.getAttribute("data-id");
    const elements = document.getElementsByClassName('d_'+idToRemove);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}