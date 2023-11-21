import './style.css';
import $ from 'jquery';
import domManager from './domManager';

// remove on release
console.clear()

$('.add').on('click', function() {
  $(this).before(domManager.createCont().clone());
});


// Event delegation for existing and dynamically added '.cont' elements
$(document).on('mouseenter', '.del-sect', domManager.showEdit)
  .on('mouseleave', '.del-sect', domManager.hideEdit)
  .on('click', '.add-ele', domManager.addTodoEle)
  .on('click', '.todo-ele > .state > .x-btn', domManager.removeParentParentElement)
  .on('change', '.checkbox', domManager.checkboxChange)
  .on('input', '.todo-ele > textarea', domManager.extandableTextArea)
  .on('click', '.cont > .del-sect > .x-btn', domManager.deleteCont)
  .on('click', '.edit', domManager.changeName)
  .on('input', '.new-name-inp', domManager.dynamicNewNameChange)


// TODO: make save and load
