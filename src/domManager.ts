import $ from 'jquery';

/*
<div class="cont section">
  <div class="del-sect">
    <svg class="x-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>
    <span class="sect-name">name</span>
    <svg class="edit hide" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>
  </div>

  <div class="todo-ele">
    <textarea class="task-text" rows="1" style="height:22px;overflow-y:hidden;"></textarea>
    <span class="state">
      <input class="checkbox" type="checkbox" name="checkbox">
      <svg class="more-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>
    </span>
  </div>

  <div class="add-ele"><span>Add a list element</span><svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg></div>
</div>
*/

const _checkbox = $('<input class="checkbox" type="checkbox" name="checkbox">');
const _svgMore = $(' <svg class="more-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"></path></svg>');
const _svgEdit = $('<svg class="edit hide" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
const _svgDel = $('<svg class="x-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
const _addEle = $('<div class="add-ele"><span>Add a list element</span><svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg></div>');
const _taskTextarea = $('<textarea class="task-text"></textarea>');
const _sectName = $('<span class="sect-name">name</span>');
const _todoEle = $('<div class="todo-ele"></div>');
const _liEleTextarea = $('<textarea class="task-text" rows="1" style="height:22px;overflow-y:hidden;"></textarea>');
const _state = $('<span class="state"></span>');
const _stateCheckbox = $('<input class="checkbox" type="checkbox" name="checkbox"/>');
const _contSection = $('<div class="cont section"></div>');
const _delSect = $('<div class="del-sect"></div>');


const domManager = function() {
  function createCont() {
    const delSect = structuredClone(_delSect)
      .append(structuredClone(_svgDel).on('click', function() {
        deleteElement($(this).parent());
      }))
      .append(structuredClone(_sectName))
      .append(structuredClone(_svgEdit).on('click', function() {
        changeName($(this).parent());
      }))
      .on('mouseenter', function() {
        $(this).find('.edit').removeClass('hide');
      }).on('mouseleave', function() {
        $(this).find('.edit').addClass('hide');
      });
    // TODO: stopped here
    
  }

  // gets .cont
  function changeName(ele: JQuery<HTMLElement>) {

  }

  // gets .cont
  function deleteElement(ele: JQuery<HTMLElement>) {

  }

}();

export default domManager;
