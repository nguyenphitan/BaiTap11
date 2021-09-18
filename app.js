const input = document.querySelector('.input');
const add = document.querySelector('.add');
const ul = document.querySelector('.list');

function styleLi() {
    const li = document.querySelectorAll('li');
    for(let i=0 ; i<li.length ; i++) {
        if(i % 2 == 0) {
            li[i].style.backgroundColor = 'rgb(231, 228, 228)';
        }
        else li[i].style.backgroundColor = 'white';
    }
}
styleLi();

function addContent() {
    const inputValue = input.value;
    if(inputValue == '') {
        alert('Bạn chưa nhập gì.');
        return;
    }
    const newLi = `<li> <div> <i class="fas fa-check"></i> ${inputValue} </div> <i class="far fa-times"></i> </li>`;
    ul.innerHTML += newLi;
    input.value = '';
    styleLi();
}


// Thêm
// Khi click button
add.onclick = () => {
    addContent();
}

// Khi input nhận sự kiện nhấn phím enter
input.addEventListener('keydown', (event) => {
    if(event.keyCode == 13) {
        addContent();
    }
});

// --------------------
// Xoá & gạch tên
ul.onclick = (event) => {
    if(event.target.classList.contains('fa-times')) {
        event.target.parentElement.remove();
        styleLi();
    }
    else if(event.target.classList.contains('fa-check')) {
        event.target.parentElement.style.textDecorationLine = 'line-through';
    }
}

