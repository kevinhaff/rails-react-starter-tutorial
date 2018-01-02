import React from 'react';
import { render } from 'react-dom';
import Toolbar from 'components/toolbar';
import Users from 'components/users';
import Tasks from 'components/tasks';

// for all elements which occur right as the page loads
$(document).on('turbolinks:load', function(){
  $('[data-toggle="tooltip"]').tooltip();
  $('input.submitButton[type=submit]').remove();

  //index and value allow function to realize HTML is an array not a single element
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
