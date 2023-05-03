function _f(id) {
    return document.getElementById(id);
}

let div = _f('Text');
let btn = _f('Btn');

btn.onclick = function(){
    if (div.style.height == '357px' ){
        div.style.height = 'auto';
        Btn.style.transform = 'rotate(180deg)';
    } else {
        div.style.height = '357px';
        Btn.style.transform = 'rotate(0deg)';
    }
}