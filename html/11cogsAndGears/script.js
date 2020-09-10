const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let img1;

img1 = new Image();
img2 = new Image();
img3 = new Image();
img1.src = "images/cog.png";
img2.src = "images/cog2.png";
img3.src = "images/cog3.png";

angle1 = 1; 
angle2 = 1; 
angle3 = 1; 


img1.addEventListener('load',()=>{
  setInterval(animate,10)
})

function animate(){
  context.clearRect(0,0,width,height)

  //COG ONE
  context.save();
  context.translate(300,300);
  context.rotate(angle1);
  context.drawImage(img1,-150,-150,300,300);
  context.restore();
  angle1 += -0.02

  //COG TWO
  context.save();
  context.translate(580,300);
  context.rotate(angle2);
  context.drawImage(img2,-150,-150,300,300);
  context.restore();
  angle2 += 0.02

  //COG THREE 
  context.save();
  context.translate(860,300);
  context.rotate(angle3);
  context.drawImage(img3,-150,-150,300,300);
  context.restore();
  angle3 += -0.02
}
















