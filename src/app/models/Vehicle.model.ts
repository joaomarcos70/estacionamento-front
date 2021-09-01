export class Vehicle {
    _id: string;
    model: string;
    color: string;
    plate: string;
    type: boolean;
    
    loadFromServer(r: any) {
        this._id = r._id;
        this.model = r.model;
        this.color = r.color;
        this.plate = r.plate;
        
    }
}