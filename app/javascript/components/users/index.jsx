$(document).on('turbolinks:load', function(){
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
})
