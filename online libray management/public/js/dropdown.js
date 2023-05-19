
/* LOGIN */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
document.getElementById("myDropdown_1").classList.toggle("show");
document.getElementById("myDropdown_2").classList.toggle("show");
console.log("sucess")
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
if (!event.target.matches('.home-navlink5')) {
 var dropdowns = document.getElementsByClassName("dropdown-content");
 var i;
 for (i = 0; i < dropdowns.length; i++) {
   var openDropdown = dropdowns[i];
   if (openDropdown.classList.contains('show')) {
     openDropdown.classList.remove('show');
   }
 }
}
}

/* PAY OVERDUE */
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function paymentFunction() {
  document.getElementById("paymentChoice").classList.toggle("show");
  console.log("sucess")
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
  if (!event.target.matches('.bookcart-view-all-button')) {
   var dropdowns = document.getElementsByClassName("dropdown-content-1");
   var i;
   for (i = 0; i < dropdowns.length; i++) {
     var openDropdown = dropdowns[i];
     if (openDropdown.classList.contains('show')) {
       openDropdown.classList.remove('show');
     }
   }
  }
  }
