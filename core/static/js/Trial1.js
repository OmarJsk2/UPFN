
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

// end of toggle menu


  // ********** set date ************
  const date = document.getElementById("date");
  date.innerHTML = new Date().getFullYear()

 



// about`
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

  about.addEventListener("click", function (e) {

  console.log(e)
  const id = e.target.dataset.id;
  console.log(e.target.dataset.id)
 
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
    console.log(element)
    element.classList.add("active");
  }
});

// // end about



  

// function run(){





  
// }

  

// run()






  

  
