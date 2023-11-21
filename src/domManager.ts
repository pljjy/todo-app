import $ from 'jquery';


// all the elements used in .cont including .cont iteself
// t in the start stands for template 
const tSvgEdit = $('<svg class="edit hide" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
const tSvgDel = $('<svg class="x-btn" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
const tAddEle = $('<div class="add-ele"><span>Add a list element</span><svg class="plus-svg" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg></div>');
const tTaskText = $('<textarea class="task-text" rows="1" style="height:22px;overflow-y:scroll;"></textarea>');
const tSectName = $('<span class="sect-name">name</span>');
const tTodoEle = $('<div class="todo-ele"></div>');
const tState = $('<span class="state"></span>');
const tCheckbox = $('<input class="checkbox" type="checkbox" name="checkbox">');
const tContSection = $('<div class="cont section"></div>');
const tDelSect = $('<div class="del-sect"></div>');



const domManager = function() {
  // creates cont, all the listeners are added in main.ts
  function createCont() {
    const contSect = tContSection.clone()
      // .del-sect
      .append(tDelSect.clone()
        .append(tSvgDel.clone())
        .append(tSectName.clone())
        .append(tSvgEdit.clone())
      )

      // .add-ele
      .append(tAddEle.clone())

    return contSect;
  }


  // changes name of .cont
  function changeName() {
    const nameElement = $(this).siblings('.sect-name');
    const oldName = nameElement.text();
    $('body').addClass('blur-background');
    $('.new-name-inp').val(oldName);
    $('.change-name').removeClass('hide');
    $('.container').addClass('blur');
    $('.old-name').text(oldName);
    $('.new-name').text($('.new-name-inp').val() as string)

    $('button[type="submit"]').on('click', function() {
      $('.change-name').addClass('hide');
      $('.container').removeClass('blur');
      $('body').removeClass('blur-background');
      $('.old-name').text('Old Name'); // fallback to let user undestand what it is
      $('.new-name').text('New Name') // same as above

      nameElement.text($('.new-name-inp').val() as string);
      $('.new-name-inp').val('');
      $(this).off();
    });

  }

  function deleteCont() {
    const parentCopy = $(this).parent().clone();
    parentCopy.find('.x-btn').on('click', deleteCont);
    parentCopy.css('bottom', '0px');
    const parent = $(this).parent();
    $(this).parent().empty();

    const confirmDeletion = $('<div class="no-select">Remove this section? <span class="conf-del">✔️&nbsp;</span><span class="conf-keep">✖️</span></div>');
    confirmDeletion.find('.conf-del').on('click', function() {
      $(this).parent().parent().parent().remove();
    });

    confirmDeletion.find('.conf-keep').on('click', function() {
      $(this).parent().replaceWith(parentCopy);
    });

    parent.append(confirmDeletion);
  }

  // thsee 2 are to show .edit on hover
  function showEdit() {
    $(this).find('.edit').removeClass('hide');
  }
  function hideEdit() {
    $(this).find('.edit').addClass('hide');
  }

  // adds .todo-ele to a .cont
  function addTodoEle() {
    $(this).parent().children().last().prev().after(tTodoEle.clone()
      .append(tTaskText.clone())
      .append(tState.clone()
        .append(tCheckbox.clone())
        .append(tSvgDel.clone())));
  }

  function removeParentParentElement() {
    $(this).parent().parent().remove();
  }

  function checkboxChangeBorder() {
    if (this.checked) {
      $(this).parent().parent().addClass('green-border');
    } else {
      $(this).parent().parent().removeClass('green-border');
    }
  }

  // enter makes textarea bigger in height
  // there is a limit of height, but overflow-y is set to scroll
  function extandableTextArea() {
    this.style.height = '0';
    this.style.height = this.scrollHeight + 'px';
  }

  // changes new name in the change name form (Old name > Dynamic New name)
  function dynamicNewNameChange() {
    $('.new-name').text($('.new-name-inp').val() as string);
  }

  // saves .container
  function save() {
    $('textarea').each(function() {
      $(this).text($(this).val() as string);
    });

    localStorage.setItem('container', $('.container').html());

    // override .sync-status in case the user just loaded it
    if ($('.sync-status').length !== 0) {
      $('.sync-status').remove();
    }

    $('.sync').append('<span class="sync-status">saved</span>');
    $('.sync-status').fadeOut(3000, function() {
      $(this).remove();
    })
  }

  // loads .container
  function load() {
    const loadedContainer = localStorage.getItem('container');
    $('.container').empty();
    $(loadedContainer).appendTo('.container');
    
    // when loaded, checkboxes are not checked, so it checks them by finding which ones have a parent with green border
    $('.green-border').each(function() {
      $(this).find('.checkbox').prop('checked', true)
    });

    // override .sync-status in case the user just loaded it
    if ($('.sync-status').length !== 0) {
      $('.sync-status').remove();
    }

    $('.sync').append('<span class="sync-status">synced</span>');
    $('.sync-status').fadeOut(3000, function() {
      $(this).remove();
    })
  }

  return {
    createCont, changeName, deleteCont, hideEdit, showEdit, addTodoEle, removeParentParentElement,
    checkboxChangeBorder, extandableTextArea, dynamicNewNameChange, save, load
  };
}();

export default domManager;
