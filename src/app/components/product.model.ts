export class Product{
    public pId :number;
    public pName : string;
    public pImage : string;
    public pDescription : string;
    public pPrize : number;
    public quantityPrize : number;
    public isCart : boolean;
    public type : number;

    constructor(pId :number, pName : string, pImage : string, pDescription : string, pPrize : number,
        quantityPrize : number, isCart : boolean, type : number){
        this.pId = pId;
        this.pName = pName;
        this.pImage = pImage;
        this.pDescription = pDescription;
        this.pPrize = pPrize;
        this.quantityPrize = quantityPrize;
        this.isCart = isCart;
        this.type = type;
    }
}