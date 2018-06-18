
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

let aTags = document.querySelectorAll('.navBar > ul > li > a');
for(let i = 0; i < aTags.length; i++){
  aTags[i].onclick = function(e){
    e.preventDefault();
    let a = e.currentTarget;
    let href = a.getAttribute('href');
    let element = document.querySelector(href);
    let top = element.offsetTop;
    window.scrollTo(0, top - 80);
  }
}








