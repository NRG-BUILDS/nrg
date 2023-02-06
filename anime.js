window.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();
//to play slide up and side animations on scroll
function reveal() {
  let reveals = document.querySelectorAll(".reveal");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
 }

 setInterval(function() { 
   let tag = document.querySelector('.dynamic_title');
   if(tag.innerHTML == 'React Developer') { 
     tag.innerHTML = 'NRG';
     tag.style.animation = 'slideRight .6s ease-out';
   } else { 
       tag.innerHTML = 'React Developer';
       tag.style.animation = 'slideLeft .6s ease-out'
   }
 }, 3000)
