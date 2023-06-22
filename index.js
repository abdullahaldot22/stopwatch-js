let td = document.querySelector('#td');
let start = document.querySelector('#stbtn');
let pause = document.querySelector('#psbtn');
let reset = document.querySelector('#rsbtn');

let stime = 0;
let etime = 0;
let ctime = 0;
let ptime = true;
let ivid;
let hr = 0;
let min = 0;
let sec = 0;
let mil = 0;

start.addEventListener('click', () => {
    if (ptime) {
        ptime = false;
        stime = Date.now() - etime;
        ivid = setInterval(utime, 1);
    }
});
pause.addEventListener('click', () => {
    if(!ptime){
        ptime = true;
        etime = Date.now() - stime;
        clearInterval(ivid);
    }
});
reset.addEventListener('click', () => {
    ptime = true;
    clearInterval(ivid);
    stime = 0;
    etime = 0;
    ctime = 0;
    hr = 0;
    min = 0;
    sec = 0;
    mil = 0;
    td.textContent = '00 : 00 : 00 : 00';
});

function utime() {
    etime = Date.now() - stime;

    mil = Math.floor((etime % 100));
    sec = Math.floor((etime / 1000) % 60);
    min = Math.floor((etime / (1000 * 60)) % 60);
    hr = Math.floor((etime / (1000 * 60 * 60)) % 60);

    mil = pad(mil);
    sec = pad(sec);
    min = pad(min);
    hr = pad(hr);

    function pad(unit) {
        return (('0') + unit).length > 2 ? unit : '0' + unit;
    }

    td.textContent = `${hr} : ${min} : ${sec} : ${mil}`;
}