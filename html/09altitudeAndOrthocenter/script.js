const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A,B,C;
let ab,bc,ca; 
let mAB,mBC,mCA,mPoint; 
let lAB,lBC,lCA;
let circumCenter; 
let distance; 

A = new Point(0.10*width,0.10*height,20,"red",true);
B = new Point(0.90*width,0.20*height,20,"green",true);
C = new Point(0.50*width,0.90*height,20,"blue",true);

ab = new LinearFunction(1,1);
bc = new LinearFunction(1,1);
ca = new LinearFunction(1,1);

mAB = new Point(0.10*width,0.10*height,20,"black",false);
mBC = new Point(0.10*width,0.10*height,20,"black",false);
mCA = new Point(0.10*width,0.10*height,20,"black",false);

lAB = new LinearFunction(1,1);
lBC = new LinearFunction(1,1);
lCA = new LinearFunction(1,1);

circumCenter = new Point(0.10*width,0.10*height,20,"black",false); 




function animate() {
  context.clearRect(0,0,width,height); 

  context.fillStyle = "rgba(255,255,0,0.4)";

  //triangle template: 
  context.beginPath();
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke(); 
  context.fill();

  //circle template: 
  context.beginPath();
  context.arc(circumCenter.x,circumCenter.y,distance,0,2*Math.PI);
  context.stroke();

  circumCenter.draw(context); 
  circumCenter.x = lAB.intersection(lBC).x; 
  circumCenter.y = lAB.intersection(lBC).y; 

 

  A.draw(context);
  B.draw(context);
  C.draw(context); 

  mAB.draw(context);
  mAB.x = (A.x + B.x)/2; 
  mAB.y = (A.y + B.y)/2; 

  mBC.draw(context);
  mBC.x = (B.x + C.x)/2; 
  mBC.y = (B.y + C.y)/2;

  mCA.draw(context);
  mCA.x = (C.x + A.x)/2; 
  mCA.y = (C.y + A.y)/2;

  lAB.draw(context);
  lAB.slope = -1/ab.slope;
  lAB.intercept = mAB.y - mAB.x*lAB.slope;

  lBC.draw(context);
  lBC.slope = -1/bc.slope;
  lBC.intercept = mBC.y - mBC.x*lBC.slope;

  lCA.draw(context);
  lCA.slope = -1/ca.slope;
  lCA.intercept = mCA.y - mCA.x*lCA.slope;

  ab.draw(context);
  ab.slope = (B.y - A.y) / (B.x - A.x);
  ab.intercept = (B.y - B.x*ab.slope);

  bc.draw(context);
  bc.slope = (B.y - C.y) / (B.x - C.x);
  bc.intercept = (B.y - B.x*bc.slope);

  ca.draw(context);
  ca.slope = (C.y - A.y) / (C.x - A.x);
  ca.intercept = (C.y - C.x*ca.slope);
}

setInterval(animate,10); 