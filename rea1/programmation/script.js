let  slide = new Array("../images/imgCarusel01.jpg", "../images/imgYvon.jpg","../images/vuDensemble.jpg" )
let numero = 0;

function ChangeSlide(sens)
{
       numero = numero + sens;
    
    if (numero < 0) // si l index de la  variable est plus petit  que le nombre d  images alors  on revient a la derniére image .
    {
        numero = slide.length - 1; 
    }
    if (numero > slide.length - 1) // si l index de la  variable est plus grand  que le nombre d  images alors  on revient a la prmeiere image .
    {
        numero = 0;
    }
    if(numero == 1)
    {
        document.getElementById("slide").style.objectPosition = "32% 32%";
    }
    else
    {
        document.getElementById("slide").style.objectPosition = "50% 50%";
    }
    document.getElementById("slide").src = slide[numero];   
}
setInterval("ChangeSlide(1)", 3000); /* appui toutes les trois secondes pour changer d'images*/




//***************************************************menu burger */


const navBar = document.querySelector('#navBar');
const burger = document.querySelector('.burger');

function toogleMenu()
{
    burger.addEventListener('click', ()=>
    {
        navBar.classList.toggle('openNavBar');
    })
}

toogleMenu();
