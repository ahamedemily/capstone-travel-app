const baseURL =  `http://localhost:4444/api`

const txt1 = document.getElementById('iteneraryInput');
const btn1 = document.getElementById('btn1');
const out1 = document.getElementById('output1');

function fun1() {
    out1.innerHTML = txt1.value
}

btn1.addEventListener('click',fun1);