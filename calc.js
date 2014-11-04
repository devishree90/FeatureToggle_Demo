function check(){
var url = new RegExp('[\\?&]' + 'ft' + '=([^&#]*)').exec(window.location.href);
if(via.js){
var flag;
var flagToggles=['subtract','multiply','divide'];
 
flag=prompt("Enter flag name");
  if(flag && flagToggles.indexOf(flag)!=-1){
  if (flag=='subtract'){
   document.getElementById('subop').style.display = 'inline';
  }
  if (flag=='multiply'){
    document.getElementById('mulop').style.display = 'inline';
  }
  if (flag=='divide'){
   document.getElementById('divop').style.display = 'inline';
  }
}
}
if(via.url){
 if(url[1].split(',').length!=0){
 var ft;
 for(ft in url[1].split(',')){ 
   document.getElementById(url[1].split(',')[ft]+'op').style.display = 'inline';
  } 
 }
}
if(via.config){
   if (toggle.subtract){
    document.getElementById('subop').style.display = 'inline';
   }
   if (toggle.multiply){
     document.getElementById('mulop').style.display = 'inline';
   }
   if (toggle.divide){
     document.getElementById('divop').style.display = 'inline';;
   }
 }
}
function c(val)
{
    document.getElementById("d").value=val;
}
function v(val)
{
    document.getElementById("d").value+=val;
}
function e()
{
    try
    {
        c(eval(document.getElementById("d").value))
    }
    catch(e)
    {
        c('Invalid operation')
    }
}
window.onload = check;
