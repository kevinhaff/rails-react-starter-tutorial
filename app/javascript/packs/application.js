import React from 'react';
import { render } from 'react-dom';
import Toolbar from 'components/toolbar';

// for displaying tooltips
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
});

// to hide a submit button next to a checkbox
jQuery.fn.submitOnCheck = function() {
	this.find('input[type=submit]').remove();
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

// for input boxes with placeholders
$('.field__input').on('input', function() {
  var $field = $(this).closest('.field');
  if (this.value) {
    $field.addClass('field--not-empty');
  } else {
    $field.removeClass('field--not-empty');
  }
});
