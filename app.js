const nav = document.querySelector('.side_nav');
const navContent = document.querySelector('.nav_content')
const projectListDisplay = document.querySelector('.project_list');
const projectListMobile = document.querySelector('.project_display_mobile');
const projectPreviewDisplay = document.querySelector('.project_preview');
const projectPicDisplay = document.getElementById('project_pic');
const projectInfo = document.getElementById('project_info')
const projectArray =[];

function Projects(Name, Pic, Lang, Link, GitLink) { 
    this.name = Name;
    this.pic = `./image/${Pic}`;
    this.lang = Lang
    this.link = Link;
    this.gitLink = GitLink;
    
    projectArray.push(this);
}
const project1 = new Projects(
    "Dammy's Cakes World",
    "cakes.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/dammycakes/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/dammycakes");
const project2 = new Projects(
    "Mobile Furniture App",
    "furniture.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/furniture/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/furniture");
const project3 = new Projects(
    "Mobile Bookstore App",
    "bookstore.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/bookstore/bookstore.html",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/bookstore/bookstore.html");
const project4 = new Projects(
    "Hotel Landing Page",
    "hotel.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/hotel/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/hotel");
const project5 = new Projects(
    "A Bunch Of JavaScript Calculators",
    "calculator.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/calculator/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/calculator");    
const project6 = new Projects( 
    "Online Music Streaming App",
    "music.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/music-player/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/music-player");    
const project7 = new Projects( 
    "Fashion Store",
    "shizzabelle.jpg",
    ['html', 'css', 'js'],
    "https://nrg-portfolio.netlify.app/shizzabelle/",
    "https://github.com/NRG-BUILDS/portfolio/tree/main/shizzabelle");
const project8 = new Projects(
    "Weather App",
    "weather.jpg",
    ['html', 'css', 'js', 'api'],
    "https://nrg-builds.github.io/NRG-weather/",
    "https://github.com/NRG-BUILDS/NRG-weather");
const project9 = new Projects(
        "Movie Information App",
        "movieroom.jpg",
        ['html', 'css', 'js', 'api'],
        "https://nrg-builds.github.io/movie-app",
        "https://github.com/NRG-BUILDS/movie-app");
const project10 = new Projects(
    "Movie Information App",
    "movieroomReact.png",
    ['react', 'css', 'js', 'api'],
    "https://nrg-movierooom.netlify.app",
    "https://github.com/NRG-BUILDS/movieroom");
const project11 = new Projects(
    "Space Agency App",
    "space.webp",
    ['react', 'tailwind', 'api'],
    "https://nrg-space.netlify.app",
    "https://github.com/NRG-BUILDS/Space");
const project12 = new Projects(
    "Responsive News Page",
    "news.jpg",
    ['tailwind', 'js'],
    "https://nrg-builds.github.io/news-page",
    "https://github.com/NRG-BUILDS/news-page");
const project13 = new Projects(
    "Connect 4 game",
    "connectgame.jpg",
    ['react', 'tailwind', 'js'],
    "https://nrg-connect4game.netlify.app",
    "https://github.com/NRG-BUILDS/connect4game");
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

function getLang(i) {
    let tools = ``
    if (projectArray[i].lang.includes('html')) {
        tools += `<img src='./assets/html.svg' alt='html'>`
    }
    if (projectArray[i].lang.includes('css')) {
        tools += `<img src='./assets/css.jpg'>`
    }
    if (projectArray[i].lang.includes('js')) {
        tools += `<img src='./assets/js-icon.png'>`
    }
    if (projectArray[i].lang.includes('react')) {
        tools += `<img src='./assets/react.png'>`
    }
    if (projectArray[i].lang.includes('tailwind')) {
        tools += `<img src='./assets/tailwindcss.svg'>`
    }
    console.log(tools)
    return tools
}

function previewProject(i) { 
    projectPicDisplay.style.animation = 'slideLeft 1s';
    projectPicDisplay.src = projectArray[i].pic;
    projectInfo.innerHTML = `
            <div>
                <p>${projectArray[i].name}</p>
                <a href='${projectArray[i].link}'><i class="bi bi-globe"></i></a>
                <a href='${projectArray[i].gitLink}'><i class="bi bi-github"></i></a>
            </div>
            <div class='project_tools_img'>
                ${getLang(i)}
            </div>
            `
}

function loadProjectListMobile() { 
    let text = '';
    for (i = projectArray.length - 1; i > -1; i--) { 
        text += `<div class='project_preview reveal'>
            <img src ="${projectArray[i].pic}">
            <div id='project_info'>
                <div>
                    <p>${projectArray[i].name}</p>
                    <div class='link_pad'>
                        <a href='${projectArray[i].link}'><i class="bi bi-globe"></i></a>
                        <a href='${projectArray[i].gitLink}'><i class="bi bi-github"></i></a>
                    </div>
                    
                </div>
                <div class='project_tools_img'>
                    ${getLang(i)}
                </div> 
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
document.getElementById('emailForm').addEventListener('submit', function(e) {validateForm(e)})
const sendBtn = document.getElementById('mail_button'); //email send button

function sendMail(event) {
    document.getElementById('emailForm')
        .addEventListener('submit', function(event) {
            event.preventDefault();
            sendBtn.value = 'Sending...';
            const serviceID = 'default_service';
            const templateID = 'template_ocze4iv';
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    sendBtn.innerHTML = 'Send Email';
                    alert('Sent!');
                    }, (err) => {
                    sendBtn.value = 'Send Email';
                    alert(JSON.stringify(err));
                });
            });
};
//validate form code
function validateForm(event) { 
    event.preventDefault();
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
