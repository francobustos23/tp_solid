import { IVehicleRepository } from "../interfaces/vehicle.repository.interface";
import { Ivehicle } from "../models/vehicle.model";


export class VehicleMongoRepository implements IVehicleRepository{

    private vehicles: Ivehicle[] = [];

    async create(vehicle: Ivehicle): Promise<void> {
        this.vehicles
        .push(vehicle);
        console.log('Vehicle created in Mongo', vehicle);
    }

    async findById(id: string): Promise<Ivehicle | null> {
        const vehicle = 
        this.vehicles
        .find( search_vehicle => search_vehicle.id === id);
        console.log('Vehicle found in Mongo');
        
        return vehicle || null;
    }

    async update(id: string, vehicle: Ivehicle): Promise<void> {
        const index = 
        this.vehicles
        .findIndex(search_vehicle => search_vehicle.id === id);
        
        if (index !== -1) {
            this.vehicles[index] = vehicle;
            console.log('Vehicle update in Mongo:', vehicle);
        }
        console.log('Vehicle not found in Mongo:', vehicle);
    }

    async delete(id: string): Promise<void> {
        this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
        console.log('Vehicle deleted in Mongo')
    }
}