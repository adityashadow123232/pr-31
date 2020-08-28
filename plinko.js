class ound {
    constructor(x,y,radius) {
      var options = {
          isStatic: true
      }
      
      this.body = Bodies.circle(x, y, radius,options);
      this.radius = radius ;
      this.radiusY=height;
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
      ellipseMode(RADIUS)
      fill("green");
      ellipse(pos.x,pos.y , this.radius);
    }
  };