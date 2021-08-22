//based on an Example by @curran
window.requestAnimFrame = (function(){   return  window.requestAnimationFrame})();
var canvas = document.getElementById("blood");
var c = canvas.getContext("2d");

var numStars = 500;
var radius = '0.'+Math.floor(Math.random() * 9) + 1  ;
var focalLength = canvas.width *2;
var warp = 0;
var centerX, centerY;

var stars = [], star;
var i;
var j=0,j1=20;

var animate = true;
//初始化
initializeStars();


//事件接收後執行
document.getElementById('warp').addEventListener("click",function(e){  executeFrame(); });
    
   
//反覆執行畫圖
function executeFrame(){
    requestAnimFrame(executeFrame);
    drawStars();
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