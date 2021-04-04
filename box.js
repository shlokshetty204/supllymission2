class box extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.image = loadImage("sprites/package.png");
      Matter.Body.setAngle(this.body, angle);
    }
  
  };