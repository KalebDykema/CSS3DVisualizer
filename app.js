const cube = document.querySelector('.cube');
const radioGroup = document.querySelector('.radio-group');
let currentClass = '';

function changeSide() {
    let checkedRadio = radioGroup.querySelector(':checked');
    let showClass = 'show-' + checkedRadio.value;
    if(currentClass) cube.classList.remove(currentClass);
    cube.classList.add(showClass);
    currentClass = showClass;
}

// Set initial side
changeSide()

radioGroup.addEventListener('change', changeSide);