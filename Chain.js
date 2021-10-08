class Chain{

    constructor(bodyA,bodyB){

        var options={
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.07,
            length : 10,
        }

    this.chain = Constraint.create(options);
    World.add(world,this.chain);
    
    }

display(){
    var pontoA = this.chain.bodyA.position;
    var pontoB = this.chain.bodyB.position;
    strokeWeight(3);
    line(pontoA.x,pontoA.y,pontoB.x,pontoB.y);

    
}



}