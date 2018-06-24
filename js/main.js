
window.onscroll = function(){
  
  if(window.scrollY > 0){
    topNavBar.classList.add('sticky')
  }else{
    topNavBar.classList.remove('sticky')
  }
  let specialTags = document.querySelectorAll('[data-x]');
  let minIndex = 0;
  for(let i = 0; i < specialTags.length; i++){
    if(Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
      minIndex = i
    }
  }
  let id = specialTags[minIndex].id;
  let a = document.querySelector('a[href="#'+id+'"]');
  let li = a.parentNode;
  let brothersAndMe = li.parentNode.children;
  for(let i = 0; i < brothersAndMe.length; i++){
    brothersAndMe[i].classList.remove('highlight');
  }
  li.classList.add('highlight');
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

    let n = 25;
    let duration = 500/n;
    let currentTop = window.scrollY;
    let targetTop = top - 80;
    let distance = (targetTop - currentTop)/n;
    let i = 0;
    let id = setInterval(function(){
      if(i === n){
        window.clearInterval(id);
        return;
      }
      i = i + 1;
      window.scrollTo(0, currentTop +  distance * i);
    },duration);
    
  }
}








