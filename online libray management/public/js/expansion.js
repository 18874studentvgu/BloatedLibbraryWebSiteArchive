function _f(id) {
    return document.getElementById(id);
}

let div = _f('Text');
let btn = _f('Btn');

Btn.onclick = function(){
    console.log('success')
    if (div.style.height == '357px' ){
        div.style.height = 'auto';
    } else {
        div.style.height = '357px';
    }
}