const btnhamburger=document.querySelector('#btnhamburger');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay')

btnhamburger.addEventListener('click',function(){
    
    //closes hamburger menu
    if (header.classList.contains('open')){
        console.log('Band ho ja sim sim!')
        header.classList.remove('open');
        //overlay-animation when removed
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    }
    //opens hamburger menu
    else{                               
        console.log('Khul ja sim sim!')
        header.classList.add('open');
        //overlay-animation when added
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }
}); 
