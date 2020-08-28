class Box {
    constructor(x, y, radius) {
      var options = {
          'restitution':0.2,
          'friction':1.0,
          'density':1.0,
          isStatic: true
      }
      this.body = Bodies.circle(x, y, radius);
      this.radius = radius ;
      this.radiusY=height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS);
      strokeWeight(4);
      stroke("blue");
      fill(0,0,247);
      ellipse(0, 0, this.radius, );
      pop();
    }
  };