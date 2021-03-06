class rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options={
            'bodyA':body1,
            'bodyB':body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        strokeWeight(3);
        fill("black");
        var ax=pointA.x
        var ay=pointA.y
        
        var bx=pointB.x+this.offsetX
        var by=pointB.y+this.offsetY

        line(ax,ay,bx,by);
    }
}