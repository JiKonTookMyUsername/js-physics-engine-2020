const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


let A,B,C;
let D,E,F;
let d,e,f;
let trans;

A = new Point(100,100,20,"green",true);
B = new Point(500,200,20,"green",true);
C = new Point(300,300,20,"green",true);

D = new Point(0,0,10,"red",false);
E = new Point(0,0,10,"red",false);
F = new Point(0,0,10,"red",false);

d = new Vector2d();
e = new Vector2d();
f = new Vector2d();

trans = new Vector2d(200,100);


function animate(){
  context.clearRect(0,0,width,height);

  context.beginPath();
  context.moveTo(A.vPos.dx,A.vPos.dy);
  context.lineTo(B.vPos.dx,B.vPos.dy);
  context.lineTo(C.vPos.dx,C.vPos.dy);
  context.closePath();
  context.stroke();


  A.draw(context);
  B.draw(context);
  C.draw(context);

  D.draw(context);
  E.draw(context);
  F.draw(context);

  d.vectorSum(A.vPos,trans);
  e.vectorSum(B.vPos,trans);
  f.vectorSum(C.vPos,trans);

  D.vPos = d;
  E.vPos = e;
  F.vPos = f;

  context.moveTo(D.vPos.dx,D.vPos.dy);
  context.lineTo(E.vPos.dx,E.vPos.dy);
  context.lineTo(F.vPos.dx,F.vPos.dy);
  context.closePath();
  context.stroke();

}

setInterval(animate,10);