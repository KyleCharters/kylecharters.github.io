/*jslint browser: true*/
/*global $*/

// Initialize
$(document).ready(function(){
  $('.materialboxed').materialbox();
});

//Initialize Tabs
$('ul.tabs').tabs();

// Initialize Collapse Button
$('.button-collapse').sideNav({activationWidth: 50});


function changeTitle(a){
  document.getElementById("title").src = a;
}
