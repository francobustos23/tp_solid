import { IVehicleRepository } from "../interfaces/vehicle.repository.interface";
import { Ivehicle } from "../models/vehicle.model";


export class VehiclePostgresRepository implements IVehicleRepository {

    private vehicles: Ivehicle[] = [];

    async create(vehicle: Ivehicle): Promise<void> {
        this.vehicles.push(vehicle);
        console.log('Vehicle created in Postgres: ', vehicle);
    }

    async findById(id: string): Promise<Ivehicle | null> {
        const vehicle = this.vehicles.find(search_vehicle => search_vehicle.id === id);
        console.log('Vehicle found in Postgres: ', vehicle);

        return vehicle || null
    }

    async update(id: string, vehicle: Ivehicle): Promise<void> {
        const index = this.vehicles.findIndex(search_vehicle => search_vehicle.id === id)
        if(index !== -1) {
            this.vehicles[index] = vehicle;
            console.log('Vehicle update in Postgres', vehicle)
        }
        console.log('vehicle not found in Postgres')
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        console.log('Vehicle deleted in Postgres', id) 
    }

}