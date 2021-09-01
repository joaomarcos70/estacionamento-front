import { Vacancy } from './Vacancy.model';
import { Address } from './Address.model';
export class Establishment {
    _id: string;
    name: string;
    vacancy: Vacancy = new Vacancy();
    address: Address = new Address();


    loadFromServer(r: any) {
        this._id = r._id;
        this.name = r.name;
        this.vacancy = r.availability;
        this.address = r.address;
    }

}