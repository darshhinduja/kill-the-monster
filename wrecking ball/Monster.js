class Monster {
    constructor(x,y,width,height){
        var options = {
            density: 5, 
            frictionAir: 0.005
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/Monster-01.png")
        World.add(world, this.body); 
    }

    display(){
        push ()
        imageMode(CENTER)
     image (this.image,this.body.position.x,this.body.position.y,this.width,this.height)
     pop ()

    }
}