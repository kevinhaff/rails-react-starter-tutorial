import React from 'react';
import { render } from 'react-dom';
import GoRails from 'gorails';

// for displaying tooltips
$(document).on('turbolinks:load', function(){
    $('[data-toggle="tooltip"]').tooltip();
});

// to hide a submit button next to a checkbox
jQuery.fn.submitOnCheck = function() {
	this.find('input[type=submit]').remove();
	this.find('input[type=checkbox]').click(function() {
		$(this).parent('form').submit();
	});
	return this;
};

$("span[id^= 'nav']").hover( function() {
  $("span[id^= 'nav']").removeClass("prehide").addClass("animated flipInZ");
})

$("span[id^= 'nav']").focusout( function() {
  $("span[id^= 'nav']").addClass("prehide").removeClass("animated flipInZ");
})
