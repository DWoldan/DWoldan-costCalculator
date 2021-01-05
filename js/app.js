const width = document.getElementById('width');
const height = document.getElementById('height');
const synthetic = document.querySelector('.synthetic');
const wool = document.querySelector('.wool');
const oriental = document.querySelector('.oriental');
const ds = document.querySelector('.double-sided');
const btn = document.querySelectorAll('.btn');
const uF = document.getElementById('urine');
let result = document.querySelector('.result');
let doplata;

const includeUrine = (e) => {
    if (uF.checked) {
        charge = 5;
    } else {
        charge = 0;
    }
}

const syntheticFunction = (e) => {
    includeUrine();
    calculate = (width.value * height.value * (15 + charge)) / 10000;
    result.textContent = calculate + "zł";
}
const woolFunction = (e) => {
    includeUrine();
    calculate = (width.value * height.value * (18.5 + charge)) / 10000;
    result.textContent = calculate + "zł";
}
const orientalFunction = (e) => {
    includeUrine();
    calculate = (width.value * height.value * (25 + charge)) / 10000;
    result.textContent = calculate + "zł";
}
const dsFunction = (e) => {
    includeUrine();
    calculate = (width.value * height.value * (22.5 + charge)) / 10000;
    result.textContent = calculate + "zł";
}

synthetic.addEventListener('click', syntheticFunction);
wool.addEventListener('click', woolFunction);
oriental.addEventListener('click', orientalFunction);
ds.addEventListener('click', dsFunction);