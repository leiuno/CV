
window.onscroll = function(){
  
  if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
}

let liTags = document.querySelectorAll('nav.menu > ul > li');
for(let i = 0; i < liTags.length; i++){
  liTags[i].onmouseenter = function(e){
    e.currentTarget.classList.add('active');
  };
  liTags[i].onmouseleave = function(e){
    e.currentTarget.classList.remove('active');
  };
}








