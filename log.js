class Log extends BaseClass {
    constructor(x, y,height, angle) {
      super(x,y,100,height,angle);
      Matter.Body.setAngle(this.body, angle);
     
    }
    
    
  };
  