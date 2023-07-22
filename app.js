const btnhamburger=document.querySelector('#btnhamburger');

btnhamburger.addEventListener('click',function(){
    
    if (btnhamburger.classList.contains('open')){
        console.log('Band ho ja sim sim!')
        btnhamburger.classList.remove('open');
    }
    else{
        console.log('Khul ja sim sim!')
        btnhamburger.classList.add('open');
    }
}); 
