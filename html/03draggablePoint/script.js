const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

const width = window.innerWidth;
const height = window.innerHeight;

canvas.width = width;
canvas.height = height;


// mousemove geeft hij de coördinaten aan van de muis (de X en Y in dit geval)
// mousedown geeft hij de coördinaten aan van het punt waar geklikt is met de linker muisknop (de X en Y in dit geval)
// => noemen we een arrow-function

// addEventListener('mousemove',(evt) => {
//   console.log('de x is ' + evt.clientX);
//   console.log('de y is ' + evt.clientY);
// });

let myPoint = new Point(200,300,30,"black",true);

function animate(){
  context.clearRect(0,0,width,height)
  myPoint.draw(context)
}

setInterval(animate,10);
