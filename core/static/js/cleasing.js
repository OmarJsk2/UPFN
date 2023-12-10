

  // ********** set date ************
  const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear()

  if (window.location.href.includes('http://127.0.0.1:8000/about/')) {
  // about`
  const about = document.querySelector(".about");
  const btns = document.querySelectorAll(".tab-btn");
  const articles = document.querySelectorAll(".content");
  
    about.addEventListener("click", function (e) {

      console.log(e)
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  console.log(about)
  // end about
}
 else {

}


  

  


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



// Begining of slider 

// select items
const img 
= document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

console.log(author)

// slider buttons 
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

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
  
  // Call the function to retrieve the members data
  





  


  // new trial 
