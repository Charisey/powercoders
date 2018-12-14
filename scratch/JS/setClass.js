// Java script code goes here
console.log('My code is running!')

function greet(name) {
  console.log('Hello, ' + name);  // le nom sera rajouté dans "console" sur le navigsrateur
}

function setClassTip(event) {
  let el = document.getElementById('mypara');
  el.className = 'tip';
}

function setClassWarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function clearClass(event) {
  let el = document.getElementById('mypara');
  el.className = ''; // Quand rien n arrive ne rien mettre dans les guillemets
}
