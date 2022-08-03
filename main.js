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

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

// const tabs = $$('.tab-item')
// const contexts = $$('.tab-context')


// const tabsActive = $('.tab-item.active')
// const lines = $('.tab.line')


// tabs.forEach((tab,index)=>{
//     const context = contexts[index];

//     tab.onclick = function(){
//         $('.tab-item.active').classList.remove('active')
//         $('.tab-context.active').classList.remove('active')
//         this.classList.add('active')
//         context.classList.add('active')
//     }
// }) 