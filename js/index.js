function samadengan() {
    if (document.kalk.txt.value=="") {
        swal.fire('Salah', 'Masukan Angka Dengan Benar', 'error');
    } else {
        document.kalk.txt.value=eval(kalk.txt.value);
    }
}

let body = document.querySelector('body');
let btn = document.querySelector('.btn');
    btn.onclick = function() {
        body.classList.toggle('light')
    }