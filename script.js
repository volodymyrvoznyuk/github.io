
/*function scrollChange(id) {
  console.log('scroll w.height:['+ window.innerHeight +'] scroll:['+ window.scrollY +']');
  // start with the biggest value first
  if (window.scrollY > (window.innerHeight / 2)) {                                                                   
      document.getElementById(id).innerHTML = 'vaardigheden';                                                       

  } else if (window.scrollY > (window.innerHeight / 3)) {                                                            
      document.getElementById(id).innerHTML = 'werk';                                                    

  } else {
      document.getElementById(id).innerHTML = 'profielschets';                                                     
  }
}
window.addEventListener('scroll',function(){
      scrollChange('sticky');                                                                                        
  });
  */

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
  }, false);