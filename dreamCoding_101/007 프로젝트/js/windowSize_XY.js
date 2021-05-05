const btn = document.querySelector('.this_btn');
const goTop = document.getElementById('gotop');
const goGreen = document.getElementById('gogreen');
const go100 = document.getElementById('go100');
//
console.log(btn);

goTop.addEventListener('click',function(){
    window.scrollTo(0,0);
});

go100.addEventListener('click',function(){
    window.scrollBy({
        top: 500,
        left: 0,
        behavior: 'smooth'
    });
});

goGreen.addEventListener('click',function(){
    btn.scrollIntoView();
});


