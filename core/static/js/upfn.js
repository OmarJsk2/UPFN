// toggle menu
const links = document.querySelector(".links");
const linksContainer = document.querySelector(".links-container");
const navToggle = document.querySelector(".nav-toggle");


navToggle.addEventListener("click", function(){

  // linksContainer.classList.toggle("show-links")    
  const containerHeight = linksContainer.getBoundingClientRect().height
  // console.log(containerHeight)
  const linksHeight = links.getBoundingClientRect().height
  console.log(linksHeight)

      if(containerHeight === 0){
          linksContainer.style.height = `${linksHeight}px`;
      }
      else{
          linksContainer.style.height = 0;  
      }
});


// // tabs 


// const btns = document.querySelectorAll(".tab-btn");
// const about  = document.querySelector(".about");
// const articles = document.querySelectorAll(".content");

// console.log(about)
// about.addEventListener("click", function(e){
//    const id = e.target.dataset.id 
//    console.log(id)
//    if(id){
//     btns.forEach(function(btn){
//         btn.classList.remove("active")
//     });
//     e.target.classList.add("active")
//     // hide other articles 
//     articles.forEach(function(article){
//         article.classList.remove("active")
//     }); 
//     const element = document.getElementById(id)
//     element.classList.add("active")
//    }
// })
// // end of tabs 





// ********** set date ************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();




// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function() {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;

  if (scrollHeight > navHeight) {
    navBar.classList.add("fixed-nav");
  } else {
    navBar.classList.remove("fixed-nav");
  }

  if (scrollHeight > 200) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// Begining of slider 

// select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');
const goals = document.getElementById("goals")


// slider buttons 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// set starting item
let currentItem = 0;
let membersData;

// show person based on item
function showPerson(person) {
  const item = membersData[person];
  img.src = item.image;
  author.textContent = item.name;
  job.textContent = item.age;
  info.textContent = item.description;
  goals.textContent = item.Goals;
}

// show data 
function getMembersData() {
  fetch('/api/members/')
    .then(response => response.json())
    .then(data => {
      membersData = data;
      displayMembersData(data);
    })
    .catch(error => {
      console.error(error);
    });
}
getMembersData();

function displayMembersData(data) {
  // Access and use the received data
  for (let i = 0; i < data.length; i++) {
    const member = data[i];
    // Perform operations with each member's data
    img.src = member.image;
    author.textContent = member.name;
    job.textContent = member.age;
    info.textContent = member.description;
    goals.textContent = member.Goals;
    // ...more code to display or manipulate the data
  }
}

// show next person
nextBtn.addEventListener('click', function () {
  currentItem++;
  if (currentItem > membersData.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = membersData.length - 1;
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener('click', function () {
  currentItem = Math.floor(Math.random() * membersData.length);
  showPerson(currentItem);
});

// end of slider








// if (window.location.href.includes('http://127.0.0.1:8000/about/')) {
//   // Run specific functions for this URL
//   function1();
//   function2();
// } else {
//   // Run default functions for other URLs
//   function3();
//   function4();
// }