export class Vacancy {
    cars: number;
    motorcycles: number;

    loadFromServer(r: any) {
        this.cars = r.cars;
        this.motorcycles = r.motorcycles;
    }
}