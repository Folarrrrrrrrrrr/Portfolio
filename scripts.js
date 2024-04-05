// Accessors For Nav toggling 
const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');
const Cards = document.querySelector('.section')

// Accessors ends

// Toggle Bar Event listners

allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}
// Toggle Bar Event listners ends



// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}


// slide-in sections 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// slide-in sections ends


//  **************** Card SLider starts here ************  //
// const cardData = [{
//   title: "HMS",
//   Languages: "C# Javascript cshtml SqlServer",
//   Image: ,
//   description: "This is a c# and .NET project that manages room reservation, it implements validated forms, user and admin roles"
// },
// {
//   title: "Kapital Realty",
//   Languages: "Html, Css, Javascript",
//   Image: ,
//   description: "This is a front end real estate application that allows vendor to list properties for prospective customers."
// },
// {
//   title: "TodoApp",
//   Languages: "Reactjs(typescript) ",
//   Image: ,
//   description: "This application aids task mangement for its users"
// }]


//  Cards.innerHTML= cardData.map((data)=>{

// })


//  **************** Card SLider starts here ************  //



