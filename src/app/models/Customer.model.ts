import { Vehicle } from "./Vehicle.model";
export class Customer{
    _id: string;
    name: string;
    cpf: number;
    phone: string;
    vehicles: Vehicle = new Vehicle();
    
    
    loadFromServer(r: any) {
        this._id = r._id;
        this.name = r.name;

        if (r.phone){
            this.phone = r.phone;
        }

        if(r.vehicles){
            this.vehicles = r.vehicles;
        }
        
    }
}