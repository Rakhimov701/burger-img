const colorsItems = document.querySelectorAll('.colors_item'),
          itemBox = document.querySelector('.item');
          
          
let  fixedImg   = '';

colorsItems.forEach(item => {
   
    item.addEventListener('mouseover', () => {
        const img = item.querySelector('img').src;
        itemBox.style.backgroundImage = `url(${img})`; 
        itemBox.style.backgroundPosition = 'center';
        itemBox.style.backgroundRepeat = 'no-repeat';
        
    });

    item.addEventListener('mouseleave', () => {
        if(fixedImg) {
            itemBox.style.backgroundImage = `url(${fixedImg})`;
        }else {
            itemBox.style.backgroundImage = '';
        }
    })

    item.addEventListener('click', () => {
        const img = item.querySelector('img').src;
        fixedImg = img;
        itemBox.style.backgroundImage = `url(${img})`; 
        itemBox.style.backgroundPosition = 'center'; 
        itemBox.style.backgroundRepeat = 'no-repeat'; 
});
});