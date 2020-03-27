class Polygon{

  constructor(points){
    this.points = points;
    console.log(this.points)

  }

  draw(context){

    for(let i = 0; i < this.points.length; i++ ){
      this.points[i].draw(context)
      
    }



  }
}
