let seeMoreBtn = document.querySelector('.see-more');
let seeLess = document.querySelector('.see-less');
let featuresDropdown = document.querySelector('.features-dropdown');
let seeMoreBtn2 = document.querySelector('.see-more2');
let seeLess2 = document.querySelector('.see-less2');
let featuresDropdown2 = document.querySelector('.features-dropdown2');

seeMoreBtn.onclick = function() {
  featuresDropdown.classList.toggle('show');
  seeMoreBtn.style.display='none';  
};
seeLess.onclick = function() {  
  featuresDropdown.classList.toggle('show');
  seeMoreBtn.style.display='block';
};

seeMoreBtn2.onclick = function() {
  featuresDropdown2.classList.toggle('show2');
  seeMoreBtn2.style.display='none';  
};
seeLess2.onclick = function() {  
  featuresDropdown2.classList.toggle('show2');
  seeMoreBtn2.style.display='block';
};