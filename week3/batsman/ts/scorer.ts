import {batsman} from './bastman';
export class scorer{
    playeronstrike: batsman |null;
    totalscore:number;
    listofbatsman:Array<batsman>;
    constructor(){
        this.totalscore=0;
        this.playeronstrike=null;
        this.listofbatsman=[];
    }
    addbatsman(Batsman:batsman)
    {
        this.listofbatsman.push(Batsman);
    }
    changestrike()
    {
            if(this.playeronstrike===this.listofbatsman[0])
            {
                this.playeronstrike=this.listofbatsman[1];
            }
            else
            {
                this.playeronstrike=this.listofbatsman[0];
            }
    }
    calculatescore(score:number[])
    {
        // let i=0;
        // let sum:number;
        // sum=0;
        // for(i=0;i<score.length;i++)
        // {
        //     sum=sum+score[i];
        // }
        this.playeronstrike=this.listofbatsman[0];
        

    }


}