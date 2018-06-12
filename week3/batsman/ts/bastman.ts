export class batsman extends player{
    constructor(name :string, private numofrunsscored:number,private numofballsfaced:number)
    {
        super(name);
    }
    getnumberofruns(){
        return this.numofrunsscored;
    }
    getnumberofballsbatted(){
        return this.numofballsfaced;
    }
    addruns(run:number)
    {
        this.numofrunsscored+=run;
    }
}