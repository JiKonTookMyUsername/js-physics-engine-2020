/*
	23-2-2020
	klasse om punten op de 2d context van een canvas te tekenen

	eigenschappen
	* pos (positie van het middelpunt m.b.v. een Vector2d)
	* radius (grootte van de cirkel in pixels)
	* color (kleur van het punt, als String)
*/




class Point {

  constructor(x,y,radius,color,draggable) {

      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.draggable = false || draggable
      if(this.draggable) this.drag();
  }

  drag(){

    addEventListener('mousedown',(evt) => {
      console.log('mousedown')
    });


    addEventListener('mousemove',(evt) => {
      console.log('mousemove')
    });


    addEventListener('mouseup',() => {
      console.log('mouseup')
    });

  }


  drag(){
    let mouseCoord ={}
    let distance;
    let dragging = false;

    addEventListener('mousedown',(evt) => {
      mouseCoord.x = evt.clientX;
      mouseCoord.y = evt.clientY;

      let dx = mouseCoord.x - this.x;
      let dy = mouseCoord.y - this.y;

      distance = Math.sqrt(dx*dx + dy*dy);
      if(distance < this.radius){
        dragging = true
      } else {
        dragging = false
      }

      console.log("mouseCoord.x:" + mouseCoord.x + " , " + "mouseCoord.y:" + mouseCoord.y)
      console.log("this.x:" + this.x + " , " + "this.y:" + this.y)
      console.log("dx:" + dx + " , " + "dy:" + dy)
      console.log("distance:" + distance)
    });
  }







  draw(context) {
        //hier komt de code om een cirkel te tekenen
      context.beginPath();
      context.fillStyle = this.color;
      context.arc(this.x, this.y, this.radius, 0, Math.PI*2);
      context.stroke();
      context.fill();
  }
}
