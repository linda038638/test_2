//based on an Example by @curran
window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.getElementById("space");
var c = canvas.getContext("2d");

var numStars = 500;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;
var radius=6;
var stars = [], star;
var i;
var j=0,j1=20;

var animate = true;

initializeStars();
if(j<j1){
  console.log("111")
  executeFrame();
  }
document.getElementById('warp').addEventListener("click",function(e){
      window.warp = window.warp==1 ? 0 : 1;
      j++;  
     
     // window.c.clearRect(0, 0, window.canvas.width, window.canvas.height);
      executeFrame2();
 
 
    });

 

 

function executeFrame(){
if(j<j1){  
  if(animate)
    requestAnimFrame(executeFrame);
    
    moveStars();
    drawStarsLine();
    drawStars();
    drawEarth(j,j1);
  }  

 
  
}
function executeFrame2(){
  if(j1>=0){
      console.log("j="+j+" j1="+j1)
      if(j<j1){
        if(animate)
        requestAnimFrame(executeFrame2);
        moveStars();
        drawStars();
        c.shadowBlur=20
        c.shadowColor="white"
      }else if (j==j1){
        var timeoutID = setTimeout( function(){
        c.fillStyle = "rgba(0,10,20,0.5)";
        c.fillRect(0,0, canvas.width, canvas.height);
        c.fillStyle = "rgba(209, 255, 255,0.3)";
        c.fillRect(0,0, canvas.width, canvas.height);  
              var timeoutID = setTimeout( function(){
                c.fillStyle = "rgba(0,10,20,0.4)";
                c.fillRect(0,0, canvas.width, canvas.height);
                c.fillStyle = "rgba(209, 255, 255,0.7)";
                c.fillRect(0,0, canvas.width, canvas.height);  
                  var timeoutID = setTimeout( function(){
                    c.fillStyle = "rgba(0,10,20,0.3)";
                    c.fillRect(0,0, canvas.width, canvas.height);
                    c.fillStyle = "rgba(209, 255, 255,0.8)";
                    c.fillRect(0,0, canvas.width, canvas.height);  
                      var timeoutID = setTimeout( function(){
                        c.fillStyle = "rgba(0,10,20,0.2)";
                        c.fillRect(0,0, canvas.width, canvas.height);
                        c.fillStyle = "rgba(209, 255, 255,0.9)";
                        c.fillRect(0,0, canvas.width, canvas.height);  
                        var timeoutID = setTimeout( function(){
                          canvas.style.display="none";
                          document.getElementById('warp').style.display="none";
                            var timeoutID = setTimeout( function(){
                              document.getElementById('diobtn1').style.display="block";
                              document.getElementById('diobtn2').style.display="block";
                              document.getElementById("dio").style.display="block";
                              j1=-1;
                            }, 1000);
                        }, 500);
                      }, 50);
                  }, 100);
              }, 100);
      }, 2000);
        j1=0;
      }
      else{

        moveStars();
        drawStars();
        c.shadowBlur=0
        c.shadowColor="white"   

        if(animate)
        requestAnimFrame(executeFrame2);
      }

    }
}

function initializeStars(){
  centerX = canvas.width / 2;
  centerY = canvas.height / 2;
  
  stars = [];
  for(i = 0; i < numStars; i++){
    star = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      z: Math.random() * canvas.width,
      o: '0.'+Math.floor(Math.random() * 99) + 1
    };
    stars.push(star);
  }
}

function moveStars(){
  for(i = 0; i < numStars; i++){
    star = stars[i];
    star.z--;
    
    if(star.z <= 0){
      star.z = canvas.width;
    }
  }
}

function drawStars(){
  var pixelX, pixelY, pixelRadius;
  
  // Resize to the screen
  if(canvas.width != window.innerWidth || canvas.width != window.innerWidth){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initializeStars();
  }




  c.fillStyle = "rgba(209, 255, 255, "+radius+")";

  for(i = 0; i < numStars; i++){
    star = stars[i];
    
    pixelX = (star.x - centerX) * (focalLength / star.z);
    pixelX += centerX;
    pixelY = (star.y - centerY) * (focalLength / star.z);
    pixelY += centerY;
    pixelRadius = 1 * (focalLength / star.z);
    
    c.fillRect(pixelX, pixelY, pixelRadius, pixelRadius);
    c.fillStyle = "rgba(209, 255, 255, "+star.o+")";
    //c.fill();
  }
  c.shadowBlur=40
  c.shadowColor="white"
}

function drawStarsLine(){

  if(warp==0||1) //只要這行成立，就不會變成一條線
  {
    c.fillStyle = "rgba(0,10,20,1)";
    c.fillRect(0,0, canvas.width, canvas.height);
  }

}

function drawEarth(num,num1){

//c.fillRect(canvas.width / 2,canvas.height / 2,25,25);

var earthSize =2+80*(num/num1);

var img = document.getElementById("earth");
  c.drawImage(img,canvas.width/2-earthSize/2,canvas.height/2-earthSize/2,earthSize,earthSize);


}