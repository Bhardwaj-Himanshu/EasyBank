const btnhamburger=document.querySelector('#btnhamburger');
const body=document.querySelector('body');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const fadeElems=document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click',function(){
    
    //closes hamburger menu
    if (header.classList.contains('open')){
        console.log('Band ho ja sim sim!')
        header.classList.remove('open');
        body.classList.remove('no-scroll');
        //overlay-animation when removed
        fadeElems.forEach(function(element){
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        });
        
    }
    //opens hamburger menu
    else{                               
        console.log('Khul ja sim sim!')
        header.classList.add('open');
        body.classList.add('no-scroll');
        //overlay-animation when added
        
        //last newly added function,saves copying multiple seprate lines!
        fadeElems.forEach(function(element){
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        });
        
    }
}); 
