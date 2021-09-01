export class Address {
    street: string;
    number: number;
    complement: string;
    city: string;
    uf: string;
    zipCode: string;
    district: string;


    loadFromServer(r: any) {
        this.street = r.street;
        this.number = r.number;
        this.complement = r.complement;
        this.city = r.city;
        this.uf = r.uf;
        this.zipCode = r.zipCode;
        this.district = r.district;
        
    }
}