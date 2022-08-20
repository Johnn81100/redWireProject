let  slide = new Array("../images/imgCarusel01.jpg", "../images/imgYvon.jpg")
let numero = 0;

function ChangeSlide(sens)
{
       numero = numero + sens;
    
    if (numero < 0)
    {
        numero = slide.length - 1; 
    }
    if (numero > slide.length - 1)
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
