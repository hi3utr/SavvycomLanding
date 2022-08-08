// Dropdown button
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  myDropdown.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var dropbtn = document.getElementById("dropbtn")
      var vidropdown = document.getElementById("viDropdown");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          // dropbtn.classList.replace('dropdown-content');
          dropbtn.src = "https://careers.savvycom.vn/images/vi.png"
          vidropdown.src ="./img/GB.svg"
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
  active = content.getElementsByClassName('tab-context');

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

//Job tab
function openTab(evt, tabName) {
  var i, block, tablinks;
  block = document.getElementsByClassName("block");
  console.log(block)
  for (i = 0; i < block.length; i++) {
    block[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-item");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(tabName).style.display = "grid";
  document.getElementById(tabName).style.gap = "20px";
  evt.currentTarget.className += " active";
}