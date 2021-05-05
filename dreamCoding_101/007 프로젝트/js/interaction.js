'use strict';
const fooParams = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e : function(a){
        console.log(a);
        return(a);
    },
};

const {a,b,c,d,e} = fooParams;
console.log(a,b,c,d,e(100));

function add()

window.clientWidth();




// async function promise(){
//     const launchButton = new Promise((resolve,reject) => {
//         document.querySelector('#main_btn').addEventListener('click',() => {
//             resolve(5000);
//         });
//     });

//     try{
//         let result = await launchButton; //동기식 판정을 기다림
//         console.log(result);
//     } catch {
//         console.log('error');
//     }
// };

// promise();

