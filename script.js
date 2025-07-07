const menuIcon = document.getElementById('menuIcon');
const sideMenu = document.getElementById('sideMenu');
const closeBtn = document.getElementById('closeBtn');

menuIcon.addEventListener('click',() =>{
  sideMenu.style.right='0';
});
closeBtn.addEventListener('click',() =>{
   sideMenu.style.right='-250px';
});

function changeImage(src){
  document.getElementById('displayImage').src = src;
}




const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

























