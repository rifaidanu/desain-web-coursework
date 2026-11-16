var nomorPertama = document.querySelector('.nomor_pertama');
var nomorKedua = document.querySelector('.nomor_kedua');
var operator = document.querySelector('.operator');
let enter = document.querySelector('button');
var hasil = document.querySelector('.hasil');

enter.addEventListener('click', function() {
    var angka1 = Number(nomorPertama.value);
    var angka2 = Number(nomorKedua.value);
    var op = operator.value;

    var total;

    if (op === '+') {
        total = angka1 + angka2;
    } else if (op === '-') {
        total = angka1 - angka2;
    } else if (op === '*') {
        total = angka1 * angka2;
    } else if (op === '/') {
        total = angka1 / angka2;
    } else {
        total = "Operator"
    }

    hasil.textContent = total; 
})