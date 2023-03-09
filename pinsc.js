function bodyload()
{
    var wl=document.getElementById("wl");
    
    wl.innerHTML="Enter pin number"+"<br>"+"<font color='cadetblue' font size='2px'>(if you want to check correct output, enter pin number <font color='maroon'> 5544 </font> )</font>";  
    
}
var chances=1; 
function click1()
 {
    var pinnum=document.getElementById("pin1").value;
    var p1=document.getElementById("content");
     
     var butn=document.getElementById("bt1");
    
     {   
           if(pinnum=="5544")
                { chances=1;
                  p1.innerHTML="<font color='green'>login success!</font>".toUpperCase();
                  
                  return; 
                }
           else
               {       
                       if(chances<3)
                           {
                               p1.innerHTML="<font color='maroon'>incorrect pin.. you have"+ (3-chances )+ " chances left</font>"; chances++;   
                            }
                          else
                             {
                              p1.innerHTML="<font color='maroon'>incorrect pin.. your card blocked</font>";
                              butn.disabled=true;
                              }
            
                }   
                     
      } 
      document.getElementById("pin1").value="";
 }
      
 
