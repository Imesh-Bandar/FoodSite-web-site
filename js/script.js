 
//  Get navbar query selector in to varible 
 navbar=document.querySelector('.header .flex .navbar');

// when i click the menu btn change the css class 'active'
 document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
 }