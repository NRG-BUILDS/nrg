const nav = document.querySelector('.side_nav');
const navContent = document.querySelector('.nav_content')
const projectListDisplay = document.querySelector('.project_list');
const projectListMobile = document.querySelector('.project_display_mobile');
const projectPreviewDisplay = document.querySelector('.project_preview');
const projectPicDisplay = document.getElementById('project_pic');
const projectInfo = document.getElementById('project_info')
const projectArray =[];

function Projects(Name, Pic, Link, GitLink) { 
    this.name = Name;
    this.pic = Pic;
    this.link = Link;
    this.gitLink = GitLink;
    
    projectArray.push(this);
}
const project1 = new Projects(
    "Dammy's Cakes World",
    "cakes.jpg",
    "https://nrg-portfolio.netlify.app/dammycakes/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/dammycakes");
const project2 = new Projects(
    "Furniture Site (Mobile view)",
    "furniture.jpg",
    "https://nrg-portfolio.netlify.app/furniture/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/furniture");
const project3 = new Projects(
    "Bookstore App (Mobile Only)",
    "bookstore.jpg",
    "https://nrg-portfolio.netlify.app/bookstore/bookstore.html",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/bookstore/bookstore.html");
const project4 = new Projects(
    "Hotel Landing Page (Mobile and PC)",
    "hotel.jpg",
    "https://nrg-portfolio.netlify.app/hotel/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/hotel");
const project5 = new Projects(
    "A Bunch Of JavaScript Calculators",
    "calculator.jpg",
    "https://nrg-portfolio.netlify.app/calculator/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/calculator");    
const project6 = new Projects( 
    "Online Music Streaming App",
    "music.jpg",
    "https://nrg-portfolio.netlify.app/music-player/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/music-player");    
const project7 = new Projects( 
    "Fashion Store",
    "shizzabelle.jpg",
    "https://nrg-portfolio.netlify.app/shizzabelle/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/shizzabelle");
const project8 = new Projects(
    "Weather App",
    "weather.jpg",
    "https://nrg-builds.github.io/NRG-weather/",
    "https://github.com/NRG-BUILDS/NRG-weather");    
function loadProjectListPc() { 
    let text = ""
    for (i = projectArray.length - 1; i > -1; i--) { 
        text += `<a href='${projectArray[i].link}' 
        onmouseover="previewProject(${i})">
                  <div>
                     <p>${projectArray[i].name}</p>
                  </div>
                </a>`
    }
    projectListDisplay.innerHTML = text;
}    
loadProjectListPc();

function previewProject(i) { 
    projectPicDisplay.style.animation = 'slideLeft 1s';
    projectPicDisplay.src = projectArray[i].pic;
    projectInfo.innerHTML = `<p>${projectArray[i].name}</p>
                <a href='${projectArray[i].link}'><i class="bi bi-globe"></i></a>
                <a href='${projectArray[i].gitLink}'><i class="bi bi-github"></i></a>`
}

function loadProjectListMobile() { 
    let text = '';
    for (i = projectArray.length - 1; i > -1; i--) { 
        text += `<div class='project_preview reveal'>
            <img src ="${projectArray[i].pic}">
            <div id='project_info'>
                <p>${projectArray[i].name}</p>
                <a href='${projectArray[i].link}'><i class="bi bi-globe"></i></a>
                <a href='${projectArray[i].gitLink}'><i class="bi bi-github"></i></a>
            </div>    
            
        </div>`
    }
    projectListMobile.innerHTML = text;
}
loadProjectListMobile();
//nav menu code
function showNav() { 
    if(nav.style.width == "0%" || nav.style.width == "") { 
        nav.style.width = "100%";
        navContent.style.animation = "slideLeft 1.3s ease-out";
    } else { 
        nav.style.width = "0%";
        navContent.style.animation = "";
    }
}
//email code
const sendBtn = document.getElementById('button'); //email send button

function sendMail(event) {
   event.preventDefault();
   sendBtn.innerHTML = 'Sending...'
document.getElementById('emailForm')
 .addEventListener('submit', function(event) {
   event.preventDefault();
   sendBtn.innerHTML = 'Sending...';
   const serviceID = 'default_service';
   const templateID = 'template_ocze4iv';
   emailjs.sendForm(serviceID, templateID, document.getElementById('emailForm'))
    .then(() => {
      sendBtn.innerHTML = 'Send Email';
      alert('Sent!');
    }, (err) => {
      sendBtn.innerHTML = 'Send Email';
      alert(JSON.stringify(err));
    });
});
   const serviceID = 'default_service';
   const templateID = 'template_ocze4iv';
   emailjs.sendForm(serviceID, templateID, document.getElementById('emailForm'))
    .then(() => {
      sendBtn.innerHTML = 'Send Email';
      alert('Sent!');
    }, (err) => {
      sendBtn.innerHTML = 'Send Email';
      alert(JSON.stringify(err));
    });
};
//validate form code
function validateForm() { 
    let name = document.getElementById('from_name');
    let message = document.getElementById('message');
    let email = document.getElementById('reply_to');
    
    document.getElementById("err-message").innerHTML = ""
    if (name.value == "") { 
             showError("Name Is Empty");
    } else if (name.value.length < 3) { 
        showError("Name too short");
    } else if (message.value == "" || message.value == " " ){ 
        showError("Please enter a message in the text area");
            
    } else if (email.checkValidity() == false || email.value == "") { showError("Enter a valid email address");
    } else { 
        sendMail(event)
    }     
}
function showError(err) { 
        document.getElementById('err-message').innerHTML = err
    }
