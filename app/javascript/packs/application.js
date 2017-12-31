import React from 'react';
import { render } from 'react-dom';
import Toolbar from 'components/toolbar';
// import Users from 'components/users';
// import Tasks from 'components/tasks';

// iterating over multiple HTML elements
// By adding a parameter to the function it iterates over all instances
// index will keep the list and value will give the entire element selected

// Example:
// $('.className').each(function(index, value){
//     $(this).checkFunction();
// }

// jQuery.fn.checkFunction = function() {};

// for all elements which occur right as the page loads
$(document).on('turbolinks:load', function(){
  $('[data-toggle="tooltip"]').tooltip();
  $('input.submitButton[type=submit]').remove();

  //users page reload
  var superAdmin = $('input.cb-value.superAdmintrue').parent('.toggle-btn');
  var Admin = $('input.cb-value.Admintrue').parent('.toggle-btn');

  if ($(superAdmin)) {
    $(superAdmin).addClass('active');
  }
  else{
    $(superAdmin).removeClass('active');
  }

  if ($(Admin)) {
    $(Admin).addClass('active');
  }
  else{
    $(Admin).removeClass('active');
  }

  //task page reload
  var taskComplete = $('input.taskCompletetrue').parent('.toggle-btn');

  if ($(taskComplete)) {
    $(taskComplete).addClass('active');
  }
  else{
    $(taskComplete).removeClass('active');
  }

  // for input boxes with information pre determined
  $(".field__input").each(function(index, value) {
    if ( $(this).val() != "") {
      $(this).closest('.field').addClass('field--not-empty')
    }
  })

});

// to hide a submit button next to a checkbox and change the value of the checkbox
jQuery.fn.submitOnCheck = function() {
	this.find('input[type=submit][task=submititem]').remove();
	this.find('input[type=checkbox]').click(function() {
		$(this).closest('form').submit();
	});
	return this;
};

$('.cb-value').click(function() {
  var mainParent = $(this).parent('.toggle-btn');
  if($(mainParent).find('input.cb-value').is(':checked')) {
    $(mainParent).addClass('active');
  } else {
    $(mainParent).removeClass('active');
  }
})


// when input boxes have information entered with placeholders
$('.field__input').on('input', function() {
  var $field = $(this).closest('.field');
  if (this.value) {
    $field.addClass('field--not-empty');
  } else {
    $field.removeClass('field--not-empty');
  }
});
