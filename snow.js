class Snow {
    constructor(x,y){
var options ={
    density:0.5
}
this.body=Bodies.circle(x,y,10,options)
this.r=10
this.image=loadImage("snow5.webp");
World.add(world,this.body)

    }
    display(){
        var pos=this.body.position 
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
      //  ellipseMode(CENTER)
    //    ellipse(0,0,15,15);
    imageMode(CENTER);
        image(this.image,pos.x,pos.y,20,20);

        pop();
       
    }
}