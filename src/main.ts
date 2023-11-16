import $ from 'jquery';
import './style.css';

console.clear()

$("textarea").each(function() {
  this.setAttribute("style", `height:${this.scrollHeight}px;overflow-y:hidden;`);
}).on("input", function() {
  this.style.height = "0";
  this.style.height = (this.scrollHeight) + "px";
});

$('.del-sect').on('mouseenter', function() {
  $('.edit').removeClass('hide');
}).on('mouseleave', function() {
  $('.edit').addClass('hide');
});
