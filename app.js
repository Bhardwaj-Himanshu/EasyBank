const btnhamburger=document.querySelector('#btnhamburger');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay')

btnhamburger.addEventListener('click',function(){
    
    if (header.classList.contains('open')){//closes hamburger menu
        console.log('Band ho ja sim sim!')
        header.classList.remove('open');
        overlay.classList.add('fade-out');
        overlay.classList.remove('fade-in');
    }
    else{                               //opens hamburger menu
        console.log('Khul ja sim sim!')
        header.classList.add('open');
        overlay.classList.add('fade-in');
        overlay.classList.remove('fade-out');
    }
}); 
