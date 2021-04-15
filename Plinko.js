class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.r = 7.5
      this.body = Bodies.circle(x, y, this.r, options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill(255);
      ellipse(pos.x, pos.y, this.r, this.r);
    }
  };
