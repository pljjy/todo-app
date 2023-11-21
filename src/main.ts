import './style.css';
import $ from 'jquery';
import domManager from './domManager';


// add button
$('.add').on('click', function() {
  $(this).before(domManager.createCont().clone());
});


// all the eventlisteners
// they are made in this way because it also affects dynamically added elements
$(document).on('mouseenter', '.del-sect', domManager.showEdit)
  .on('mouseleave', '.del-sect', domManager.hideEdit)
  .on('click', '.add-ele', domManager.addTodoEle)
  .on('click', '.todo-ele > .state > .x-btn', domManager.removeParentParentElement)
  .on('change', '.checkbox', domManager.checkboxChangeBorder)
  .on('input', '.todo-ele > textarea', domManager.extandableTextArea)
  .on('click', '.cont > .del-sect > .x-btn', domManager.deleteCont)
  .on('click', '.edit', domManager.changeName)
  .on('input', '.new-name-inp', domManager.dynamicNewNameChange)
  .on('click', '.save', domManager.save)
  .on('click', '.load', domManager.load);
