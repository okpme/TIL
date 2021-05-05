'use strict';
const plusBtn = document.querySelector('#plus_button'),
    items = document.querySelector('ul.items'),
    item_row = document.querySelector('.item_row'),
    itemName = document.querySelector('.item_name'),
    input = document.querySelector('#footer_input');

function printItemName(){
    const text = input.value;
    if(text === ''){
        input.focus();
        return;
    }
    const item = createElem(text);
    items.appendChild(item);

    item.scrollIntoView({
        behavior: "smooth", 
        block: "end",
    });

    input.value = '';
    input.focus();
}

let id = 0;
function createElem(text) {
    const item_row = document.createElement('li');
    item_row.setAttribute('class','item_row');
    item_row.setAttribute('data-id',id);
    item_row.innerHTML = `
    <li class="item_row">
        <div class="item">
            <span class="item_name">${text}</span>
            <button class="item_delete">
                <img src="images/ic_trash_24.png" alt="" data-trash = ${id}>
            </button>
        </div>
        <div class="item_divider"></div>
    </li>`;
    id++;
    return item_row;
}

plusBtn.addEventListener('click',() => {
    printItemName();
});

input.addEventListener('keypress', event => {
    if(event.key === 'Enter'){
        printItemName();
    }
}); 

items.addEventListener('click', event => {
    const test = event.target.dataset.trash;
    if(test){
    let toBeDeleted = document.querySelector(`.item_row[data-id="${test}"]`);
    toBeDeleted.remove();
    }
})
