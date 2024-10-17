import { Ivehicle } from "../models/vehicle.model";

export interface IVehicleRepository {

    create(vehicle: Ivehicle):
        Promise<void>;

    findById(id: string):
        Promise<Ivehicle | null>;

    update(id: string, vehicle: Ivehicle):
        Promise<void>;

    delete(id: string):
        Promise<void>;
}