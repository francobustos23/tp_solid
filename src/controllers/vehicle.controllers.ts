import { Request, Response } from "express";
import { VehicleService } from "../services/vehicle.service";
import { Ivehicle } from "../models/vehicle.model";

export class VehicleController {

    constructor(
        private vehicleService: VehicleService
    ) {}

    async create(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const vehicle: Ivehicle = req.body;
            await this.vehicleService.createVehicle(vehicle);
            res.status(201).send('Vehicle created');
        } catch (error) {
            res.status(500).send('Error al crear el vehiculo');
        }
    }

    async findById(
        req: Request,
        res: Response
    ): Promise<void> {
        const { id } = req.params;
        const vehicle = await this.vehicleService.findVehicleById(id);
        if (vehicle) { res.status(200).json(vehicle); }
        else { res.status(404).send('Vehicle not found'); }
    }

    async update(
        req: Request,
        res: Response
    ): Promise<void> {
        const { id } = req.params;
        const vehicle = req.body;
        await this.vehicleService.updateVehicle(id, vehicle);
        res.status(200).send('Vehicle updated');
    }

    async delete(
        req: Request,
        res: Response
    ): Promise<void> {
        const { id } = req.params;
        await this.vehicleService.deleteVehicle(id);
        res.status(200).send('Vehicle deleted');
    }
}