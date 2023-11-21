import './style.css';
import $ from 'jquery';
import domManager from './domManager';
import { functions } from 'lodash';


// default value because otherwise it's empty
localStorage.setItem('container', '<div class="add section no-select"><span>Add new </span><svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg></div>');


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
  .on('click', '.load', domManager.load)
  .on('click', 'add', function() {
    $(this).before(domManager.createCont().clone());
  });
