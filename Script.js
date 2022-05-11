

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');


if (bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}

function myfunction(){
    var x = document.getElementById("myInput");
    var y = document.getElementById("hide1");
    var z = document.getElementById("hide2");

     if(x.type === 'password'){
         x.type = "text";
         y.style.display = "block";
         z.style.display = "none";
     }
     else{
        x.type = "password";
        y.style.display = "none";
        z.style.display = "block";
     }
}
function search_bx(){
    var x = document.getElementById("search-box");
    var y = document.getElementById("opensrc");

    

}
