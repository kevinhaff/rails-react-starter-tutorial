//This is for importing all the required pages
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//task page reload
$(document).on('turbolinks:load', function(){
  $('.edit_task').submitOnCheck();

  var taskComplete = $('input.taskCompletetrue').parent('.toggle-btn');

  if ($(taskComplete)) {
    $(taskComplete).addClass('active');
  }
  else{
    $(taskComplete).removeClass('active');
  }
});

function Tasks(taskComplete) {
  return (
<form class="edit_task" id="edit_task_{taskComplete}">
  <div class="toggle-btn">
    <input class="cb-value taskComplete{taskComplete}" type="checkbox" value="1" name="task[complete]" id="task_complete">
    <span class="round-btn"></span>
    <input type="submit" name="commit" value="Update" class="submitButton" data-disable-with="Update">
  </div>
</form>
  )
}

ReactDOM.render(
    <Tasks/>, document.getElementById('root')
);
