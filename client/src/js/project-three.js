import PortThree from '../images/gifs/port-three.gif';

import Linkedin from '../images/Icons/linkedin-logo.png';
import Github from '../images/Icons/Github-Logos/GitHub-Mark-Light-120px-plus.png';


document.getElementById("linkedin").src = Linkedin;
document.getElementById("github").src = Github;


// reveal animation from bottom up


if (window.location.pathname === '/project-three') {
  document.getElementById("portThree").src = PortThree;
}

function reveal() {
  if (window.location.pathname === '/project-three') {
  var reveals = document.querySelectorAll(".reveal");
  
  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;
  
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
  }
  }
  
  window.addEventListener("scroll", reveal);
  
  // reveal animation from left tp right
  
  $(document).ready(function() {
  if (window.location.pathname === '/project-three') {
  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);
  

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);
  
    //iterate through elements to see if its in view
    $.each(animation_elements, function() {
  
      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);
  
      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });
  
  }
  
  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');
  }
  });

  function revealSequence() {
    var revealMe = document.getElementById("fadeIn");
  
    revealMe.style.opacity = "1";
    revealMe.style.transition = "1.3s";
  
  }
  
  setTimeout(revealSequence, 1000);