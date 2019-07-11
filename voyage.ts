class Sejour {
    constructor(private _nom:string,private _prix:number){

    }

    get nom(): string {
        return this._nom;
    }

    get prix(): number {
        return this._prix;
    }

}

class SejourService {
    private _sejours:Sejour[];
    constructor(){
        this._sejours = [];
        this._sejours.push(new Sejour('Paris',200));
        this._sejours.push(new Sejour('Montreal',600));
        this._sejours.push(new Sejour('Nantes',80));
    }

    findSejourByName(nom:string):Sejour|void{

        let unSejour = this._sejours.filter(sejour =>{
            return sejour.nom === nom;
        });
        if(unSejour.length === 1)return unSejour[0];
    }
}

const sejourService:SejourService = new SejourService();

let unSejour = sejourService.findSejourByName('Paris');
if (unSejour instanceof Sejour) {
    console.log(unSejour);
}