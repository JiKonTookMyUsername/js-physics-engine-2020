const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;

// begin hier met jouw code voor deze opdracht

// create namespace
let A,B,C;
let lAB,lBC,lCA;
let MAB,MBC,MCA;
let lAMBC;

A = new Point(100,100,20,"red",true,"A");
B = new Point(600,150,20,"green",true,"B");
C = new Point(300,300,20,"blue",true,"C");

MAB = new Point(50,50,10,"black",false,"MMAB");
MBC = new Point(50,50,10,"black",false,"MMBC");
MCA = new Point(50,50,10,"black",false,"MMCA");

lAB = new LinearFunction(0.5,1);
lBC = new LinearFunction(0.5,1);
lCA = new LinearFunction(0.5,1);

lAMBC = new LinearFunction(2,100);

function animate(){
  context.clearRect(0,0,width,height)

  //path for triangle 
  context.fillStyle = "rgba(255,255,0,0.4)";
  context.moveTo(A.x,A.y);
  context.lineTo(B.x,B.y);
  context.lineTo(C.x,C.y);
  context.closePath();
  context.stroke();
  context.fill(); 

  A.draw(context);
  B.draw(context);
  C.draw(context);

  MAB.x = (A.x + B.x)/2;
  MAB.y = (A.y + B.y)/2;
  MAB.draw(context)

  MBC.x = (B.x + C.x)/2;
  MBC.y = (B.y + C.y)/2;
  MBC.draw(context)

  MCA.x = (C.x + A.x)/2;
  MCA.y = (C.y + A.y)/2;
  MCA.draw(context)


  lAB.slope = (A.y - B.y)/(A.x - B.x);
  lAB.intercept = B.y - B.x * lAB.slope;

  lBC.slope = (C.y - B.y)/(C.x - B.x);
  lBC.intercept = C.y - C.x * lBC.slope;

  lCA.slope = (C.y - A.y)/(C.x - A.x);
  lCA.intercept = A.y - A.x * lCA.slope;

  lAMBC.slope = (B.y - MAB.y)/(B.x - MAB.x);
  lAMBC.intercept = B.y - B.x * lAMBC.slope;

  lAMBC.slope = (A.y - MBC.y)/(A.x - MBC.x);
  lAMBC.intercept = A.y - A.x * lAMBC.slope;


  lAB.draw(context,"green");
  lBC.draw(context,"green");
  lCA.draw(context,"green");

  lAMBC.draw(context,"red")

 
}

setInterval(animate,10)
