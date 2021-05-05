const   container = document.querySelector('#img_wrap'),
    controller = document.querySelector('#controller'),
    timeBtn = document.querySelector('#time');

 // 타이머
let sec = 5;
function setTime(){
    let timer = setInterval(() => {
        timeBtn.textContent = sec;
        sec--;
    
        (sec === 0) && (timeBtn.textContent = `시간 초과`);
        (sec === 0) && clearInterval(timer);
    }, 1000);
}


// carrot, bug 생성기함수
let id = 0;
let idd = 0;

    function createCarrot(){
        const carrot = document.createElement('button');
        carrot.setAttribute('class','carrot');
        carrot.innerHTML = `<img src="images/carrot.png" alt="" data-id= ${id}>`;
        container.appendChild(carrot);
            
        carrot.style.left =  `${getRandomX()}%`;
        carrot.style.top =  `${getRandomY()}%`;
    
        id++
        return carrot;
    }

    function createBug(){
        const bug = document.createElement('button');
        bug.setAttribute('class','bug');
        bug.innerHTML = `<img src="images/bug.png" alt="" data-bug= ${idd} >`;
        container.appendChild(bug);
            
        bug.style.left =  `${getRandomX()}%`;
        bug.style.top =  `${getRandomY()}%`;
        
        idd++
        return bug;
    }

    //carrot과 bug 랜덤으로 배치함수
    function getRandomX() {
        let num = Math.floor(Math.random()*100);
        if(num <= 100){
            return num
        } else{
            return getRandomX();
        }
    }

    function getRandomY() {
        let num = Math.floor(Math.random()*100);
        if(num >= 60){
            return num
        } else{
            return getRandomY();
        }
    }

document.addEventListener('click',event =>{
    const setStartBtn = event.target.dataset.ctrl;
    if(setStartBtn){
        createCarrot();
        createCarrot();
        createCarrot();
        
        createBug();
        createBug();
        createBug();
    }
});


// carrot 클릭시 carrot 제거, alert bug실패
document.addEventListener('click', event =>{
    event.target === controller && setTime();

    const test = event.target.dataset.id;
    const test1 = event.target.dataset.bug;

    if(test){
        let toBeDeleted = document.querySelector(`.carrot > img[data-id="${test}"]`);
        toBeDeleted.parentNode.remove();
        toBeDeleted.remove();
        if(document.querySelectorAll('.carrot').length === 0){
            alert('축하해요 완료');
            container.remove();
        }
    }

    if(test1){
        container.remove();
        alert('다시해요');
    }

});
