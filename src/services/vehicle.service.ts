import { Ivehicle } from "../models/vehicle.model";
import { IVehicleRepository } from "../interfaces/vehicle.repository.interface";


export class VehicleService {

    constructor(
        private vehicleRepository: IVehicleRepository
    ){};

    async createVehicle(vehicle: Ivehicle): Promise<void> {
        await 
        this.vehicleRepository
        .create(vehicle);
    };
    async findVehicleById(id: string): Promise<Ivehicle|null> {
        return await 
        this.vehicleRepository
        .findById(id);
    };
    async updateVehicle(id: string, vehicle: Ivehicle): Promise<void> {
        await 
        this.vehicleRepository
        .update(id, vehicle);
    };
    async deleteVehicle(id: string): Promise<void> {
        await 
        this.vehicleRepository
        .delete(id);
    };
}