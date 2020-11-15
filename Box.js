class Box {
  constructor(x, y){
    
    var options = {

      isStatic:false

    }

    this.body = Bodies.rectangle(x , y , 20 , 20 , options);

    World.add(world , this.body);

    this.width=20;
    this.height=20;

  }

  display(){

    var pos=this.body.position;

    rectMode(CENTER);
    rect(pos.x , pos.y , this.width , this.height);

  }

};
