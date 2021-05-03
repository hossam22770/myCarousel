var clickItem = document.querySelectorAll(".item");
var imgs =  Array.from(document.querySelectorAll(".item img"));
var layer =document.querySelector(".layer");
var show =document.querySelector(".show");
var clos =document.getElementById("close");
var prev =document.getElementById("prev");
var next =document.getElementById("next");
var x=0;
for(var i=0 ;i<clickItem.length ;i++)
{
    imgs[i].addEventListener('click', function(e)
    {
        layer.style.display="flex";
        show.style.backgroundImage=`url(${e.target.src})`
        x=imgs.indexOf(e.target);
    })
}

    clos.addEventListener( "click",closee)


function closee ()
{
    layer.style.display="none";

}

    prev.addEventListener( "click", pre)
    function pre()
    {
        x--;
        if(x<0)
        {
            x=imgs.length-1;
        }
       
        var imgsrc =imgs[x].getAttribute("src")
        show.style.backgroundImage=`url(${imgsrc})`;


    }
    next.addEventListener( "click", nexto)
    function nexto()
    {
        x++;
        if(x==imgs.length)
        {
            x=0;
        }
       
       
        var imgsrc =imgs[x].getAttribute("src")
        show.style.backgroundImage=`url(${imgsrc})`;
       


    }


document.addEventListener("click" ,function(e){
if(e.target.id=="lay" )
  {
    layer.style.display="none";


  }
  else if(e.target.id=="show")
  {
      return;
  }

})
document.addEventListener("keydown",function(e)
{
    if(e.code== "ArrowRight")
    {
        nexto();
    }
    else if(e.code== "ArrowLeft")
    {
        pre();
    }
    else if(e.code== "Escape")
    {
        closee ();
    }
    console.log(e);
})
