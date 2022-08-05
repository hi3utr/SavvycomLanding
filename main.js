// Dropdown button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
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
// End dropdown

// Search function
function searchFunction() {
  // Declare variables
  var input, filter, content, active, p, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  content = document.querySelector(".tab-content");
  active = content.getElementsByClassName('tab-context active');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < active.length; i++) {
    p = active[i].getElementsByTagName("p")[0];
    txtValue = p.textContent || p.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      active[i].style.display = "";
    } else {
      active[i].style.display = "none";
    }
  }
}
// End search function

// Scroller
var myIndex = 0;
scroller();

function scroller() {
  var i;
  var x = document.getElementsByClassName("dscrpt");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(scroller, 3000); // Change image every 3 seconds
}