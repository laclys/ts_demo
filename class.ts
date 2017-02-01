class boy{
    constructor(public name:string){
        console.log('嘿嘿');
    }
//    public name;
   public eat(){
        console.log('eating!!!');
    }
}
var p1=new boy('zetman');
// p1.name='zetmen';
p1.eat();

var p2=new boy('superman');
// p2.name='superman';
p2.eat();

class smallBoy extends boy{
    code:string;
    play(){

    }
}
var children:Array<boy>=[];
children[0]=new boy('jojo');
