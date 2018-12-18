function hide(event) {
    setClass('hide-list', 'hidden');
    setClass('ingredient-list', 'hidden');
    setClass('show-list', '');
}

function show(event) {
    setClass('hide-list', '');
    setClass('ingredient-list', '');
    setClass('show-list', 'hidden');
}

function setClass(id, className) {
    let el = document.getElementById(id);
    el.className = className;
}