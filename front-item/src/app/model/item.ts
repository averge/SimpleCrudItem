export class Item {
	id:number;
	descripcion: string
	numero:String
	name: String;
	creationDate:String
	constructor(name: String){
		this.name = name;
        this.creationDate=new Date().toISOString()
	}
}
