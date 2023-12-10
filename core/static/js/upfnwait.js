  // ********** set date ************
  const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear()


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

// ********** fixed navbar ************
const navBar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

console.log()

// console.log(topLink)

window.addEventListener("scroll", function(){

  const scrollHeight = window.pageYOffset;
//   console.log(scrollHeight)
  const navHeight = navBar.getBoundingClientRect().height;

  if(scrollHeight > navHeight){
      navBar.classList.add("fixed-nav");
  }else{
      navBar.classList.remove("fixed-nav");
  }


  if (scrollHeight > 200){
      topLink.classList.add("show-link")
  }else{
      topLink.classList.remove("show-link")
  }
})


window.addEventListener("scroll", function(){
  const scrollHeight = this.window.pageYOffset;
  // console.log(scrollHeight)
})

// end of toggle bar


  // fetch data
  // show data 
  function getMembersData() {
    fetch('/api/members/')
      .then(response => response.json())
      .then(data => {
  
        membersData = data;
        // Process the data
        displayMembersData(data);
      })
      .catch(error => {
        // console.error(error);
      });
  }
  getMembersData();
  
  
// select items
const img 
= document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// slider buttons 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');
console.log(nextBtn)

// console.log(prevBtn)
// set starting item
let currentItem = 0;
let membersData;

// load initial item
// window.addEventListener('DOMContentLoaded', function () {
//   const item = reviews[currentItem];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// });



// show person based on item
function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }

// // show data 
// function getMembersData() {
//     fetch('/api/members/')
//       .then(response => response.json())
//       .then(data => {
  
//         membersData = data;
//         // Process the data
//         displayMembersData(data);
//       })
//       .catch(error => {
//         // console.error(error);
//       });
//   }
//   getMembersData();
  
  function displayMembersData(data) {
    // Access and use the received data
    // for (let i = 0; i < data.length; i++) {
      const member = membersData[currentItem];
      // Perform operations with each member's data


    img.src = member.image;
    author.textContent = member.name;
    job.textContent = member.age;
    info.textContent = member.description;
        
      // ...more code to display or manipulate the data
    // }
  }




 
if (window.location.href.includes('http://127.0.0.1:9000/')) {


// Begining of slider 

  
  // Call the function to retrieve the members data
  
// show next person
console.log(nextBtn)
nextBtn.addEventListener('click', function () {

  currentItem++;
  if (currentItem > membersData.length - 1) {
    currentItem = 0;
  }
  displayMembersData();
});
// show prev person
prevBtn.addEventListener('click', function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = data.length - 1;
  }
  displayMembersData();
});
// show random person
randomBtn.addEventListener('click', function () {
  console.log('hello');

  currentItem = Math.floor(Math.random() * membersData.length);
  displayMembersData();
});

// end of slider


  // Run specific functions for this URL
  // function1();
  // function2();
} else if (window.location.href.includes('http://127.0.0.1:9000/about/')){
 



// // tabs 


const about  = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");


about.addEventListener("click", function(e){
  console.log(e)
   const id = e.target.dataset.id 
   console.log(id)
   if(id){
    btns.forEach(function(btn){
        btn.classList.remove("active")
    });
    e.target.classList.add("active")
    // hide other articles 
    articles.forEach(function(article){
        article.classList.remove("active")
    }); 
    const element = document.getElementById(id)
    element.classList.add("active")
   }
})
// // end of tabs 

  

}