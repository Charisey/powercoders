// Java script code goes here
console.log('My code is running!')

function greet(name) {
  console.log('Hello, ' + name);  // le nom sera rajouté dans "console" sur le navigsrateur
}


function setClass(nomDeClasse) {
  let el = document.getElementById('mypara');
  el.className = nomDeClasse;
}

document.addEventListener('DOMContentLoaded', function(event) {
  let makeWarning = document.getElementById('make-warning');
  makeWarning.addEventListener('click', function(event) {
    setClass('warning');
 });

  let makeTip = document.getElementById('make-tip');
  makeTip.addEventListener('click', function(event) {
    setClass('tip');
  });

  let makeNormal  = document.getElementById('make-normal');
  makeNormal.addEventListener('click', function(event) {
    setClass('');
  });
});




// setclass c est le nom de la fonction qu'on choisit librement
// className c e  st une variable, le nom est choisi librement
