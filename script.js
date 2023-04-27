// START Form validation JS

function clearErrors(){
  errors = document.getElementsByClassName("formerror");
  for(let item of errors)
  {
      item.innerHTML = "";
  }
}
function seterror(id, error) {
  element = document.getElementById(id);
  element.getElementsByClassName("formerror")[0].innerHTML = error;
}

function validateForm(){
  var returnval = true;
  clearErrors();

  // Name validation

  var name = document.forms['myform']['name'].value;
  if (name.length == 0){
    seterror("namei", "*Enter your Name!");
    returnval = false;
  }
  else if (name.length<3){
    seterror("namei", "*Your Name is too short!");
    returnval = false;
  }

  // Email validation

  var email = document.forms['myform']['email'].value;
  if (email.length == 0){
    seterror("emaili", "*Enter your Email!");
    returnval = false;
  }
  else if (email.length < 13){
    seterror("emaili", "*Your Email is too short!");
    returnval = false;
  }
  else if (email.length > 25){
    seterror("emaili", "*Your Email is too long!");
    returnval = false;
  }
  else if (email.indexOf('@') <= 2){
    seterror("emaili", "*Include '@' right position!");
    returnval = false;
  }
  else if ((email.charAt(email.length-4) != '.') && (email.charAt(email.length-3) != '.')) {
    seterror("emaili", "*Invalid '.' position!");
    returnval = false;
  }

  
  // Password validation

  // var password = document.forms['myForm']["fpass"].value;
  // if (password.length < 6){
  //     seterror("pass", "*Password should be atleast 6 characters long!");
  //     returnval = false;
  // }

  // var cpassword = document.forms['myForm']["fcpass"].value;
  // if (cpassword != password){
  //     seterror("cpass", "*Password and Confirm password should match!");
  //     returnval = false;
  // }


  // Phone validation

  var phone = document.forms['myform']['phone'].value;
  if (phone.length == 0){
    seterror("phonei", "*Enter your Phone number!");
    returnval = false;
  }
  else if (isNaN(phone)){
    seterror("phonei", "*Phone number must be digits!");
    returnval = false;
  }
  // else if (phone.length != 10){
  //   seterror("phonei", "*Enter your 10 digits Phone number!");
  //   returnval = false;
  // }
  // else if ((phone.indexOf('0') == 0) || (phone.indexOf('1') == 0)){
  //   seterror("phonei", "*Phone number can't start 0 & 1!");
  //   returnval = false;
  // }



  // else if ((phone.charAt(0) != 2) && (phone.charAt(0) != 3) && (phone.charAt(0) != 4) && (phone.charAt(0) != 5) && (phone.charAt(0) != 6) && (phone.charAt(0) != 7) && (phone.charAt(0) != 8) && (phone.charAt(0) != 9)){
  //   seterror("phonei", "*Phone number can't start 0 & 1!");
  //   returnval = false;
  // }


  // Message validation

  var message = document.forms['myform']['msg'].value;
  if (message.length == 0){
    seterror("msgi", "*Enter your Message here!");
    returnval = false;
  }
  else if (message.length<5){
    seterror("msgi", "*Your Message is too short!");
    returnval = false;
  }


  return returnval;
}

// END Form validation JS


// START SpyScroll JS

const sections = document.querySelectorAll("section");
const navLi = document.querySelectorAll("nav a");
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - (sectionHeight) / 3) {
      current = section.getAttribute("id");
    }
  });

  navLi.forEach((a) => {
    a.classList.remove("active");
    if (a.classList.contains(current)) {
      a.classList.add("active");
    }
  });
});

// END SpyScroll JS



// START owl-carousel JS

$('.owl-carousel1').owlCarousel({
  loop:true,
  margin:5,
  dots:false,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1,
          stagePadding:40

      },
      425:{
          items:1,
          stagePadding:80
      },
      480:{
          items:2,
          stagePadding:0
      },
      576:{
        items:2,
        stagePadding:60
      },
      768:{
        items:2,
        stagePadding:40
      },
      992:{
        items:3,
        stagePadding:0
      }
  }
})
$('.owl-carousel2').owlCarousel({
  loop:true,
  margin:15,
  nav:true,
  dots:true,
  autoplay:true,
  stagePadding:100,
  autoplayTimeout:8000,
  responsive:{
      0:{
        margin:5,
          items:1,
          stagePadding:30
      },
      576:{
        margin:10,
          items:1,

      },
      768:{
        margin:10,
          items:1,
      
      },
      980:{
        items:1,
        stagePadding:60
      
      },

      1125:{
          items:1,
          stagePadding:100
      }
  }
})

// END owl-carousel JS