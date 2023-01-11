let stars=document.getElementById('star');
let moon=document.getElementById('moon');
let mount3=document.getElementById('mount3');
let mount4=document.getElementById('mount4');
let boat=document.getElementById('boat');
let river=document.getElementById('river');
let nouvil=document.querySelector('.nouvil');
window.onscroll = function()
{
    let value=scrollY;
   stars.style.left=value + 'px';
   moon.style.top= value*2.5 +'px';
   mount3.style.top=value*1.2+'px';
   mount4.style.top=value+'px';
   river.style.top=value + 'px';
   boat.style.top=value + 'px';
   boat.style.left=value*2 + 'px';
   if(scrollY=>67)
   {
    nouvil.style.fontSize=67+'px';
    nouvil.style.position='fixed';
    if(scrollY>=458)
        nouvil.style.display='none';
    else
    nouvil.style.display='block';
    if(scrollY>=224)
    document.querySelector('.main').style.background = 'linear-gradient(rgb(41 64 105),rgb(19, 6, 55))';
    else
    document.querySelector('.main').style.background = 'linear-gradient(rgb(70, 3, 70),rgb(19, 6, 55))';
    if(scrollY<67)
     nouvil.style.fontSize=value+'px';
   }
}