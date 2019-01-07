document.addEventListener('DOMContentLoaded' , function(event) {
    document.querySelector('button').addEventListener('click', function(event){
        console.log(document.getElementById('item').value);
    });

});