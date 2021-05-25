(() => {

    const actions = {
        birdFlies(boolen){
            if(boolen){
                document.querySelector(`[data-index="2"] .bird`).style.transform = `translateX(${window.innerWidth}px)`
            } else {
                document.querySelector(`[data-index="2"] .bird`).style.transform = `translateX(-100%)`
            }
        },
        birdFlies2(boolen){
            if(boolen){
                document.querySelector(`[data-index="5"] .bird`).style.transform = `translate(${window.innerWidth}px, ${ -window.innerHeight * 0.7}px)`
            } else {
                document.querySelector(`[data-index="5"] .bird`).style.transform = `translateX(-100%)`
            }
        },
    };

    const stepElems = document.querySelectorAll('.step');
    const graphicElems = document.querySelectorAll('.graphic-item');
    let currentItem = graphicElems[0];
    let ioIndex;

    const io = new IntersectionObserver(( entries , observer )=>{
        ioIndex = entries[0].target.dataset.index * 1; //인덱스에 entries
    });

    for(let i = 0; i < stepElems.length; i++){
        io.observe(stepElems[i]); //관찰 대상 등록
        stepElems[i].setAttribute('data-index',i);
        graphicElems[i].dataset.index = i;
    }

    function activate(action){
        currentItem.classList.add('visible');
        if(action){
            actions[action](true);
        }
    }

    function inactivate(action){
        currentItem.classList.remove('visible');
        if(action){
            actions[action](false);
        }
    }

    window.addEventListener('scroll',() =>{
        let step;
        let boundingRect;
        let temp = 0;


        for(let i = ioIndex - 1; i < ioIndex + 2; i++){
            step = stepElems[i];
            if(!step) continue;
            boundingRect = step.getBoundingClientRect().top;

            temp++;

            if ((boundingRect > window.innerHeight * 0.1) && (boundingRect < window.innerHeight * 0.8)){
                inactivate(currentItem.dataset.action);
                currentItem = graphicElems[step.dataset.index]
                activate(currentItem.dataset.action); 
            }
        }
        console.log(temp)

    });

    window.addEventListener('load',() => {
        setTimeout(() => scrollTo(0,0),100);
    })

    activate();
})();