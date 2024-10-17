import { Request, Response } from "express";
import { ClientService } from "../services/client.service";

export class ClientController {

    constructor(
        private clientService: ClientService
    ) {}

    async create(
        req: Request,
        res: Response
    ) : Promise<void> {
        try {
            const client = req.body;
            await this.clientService
            .createdClient(client);
            res.status(201).send('Client created');
        } catch (error: any) {
            res.status(500).send('error creating user')
            console.log(error)
        }
    }

    async findById(
        req: Request,
        res: Response
    ) : Promise<void> {
        const {id} = req.params;
        const client = await this.clientService.findClientById(id);

        if(client) { res.status(200).json(client)}
        else       {res.status(404).send('Client not found')}
    }

    async update(
        req: Request,
        res: Response
    ) : Promise<void> {
        const {id} = req.params;
        const client = req.body;
        await this.clientService.updateClient(id, client);
        res.status(200).send('Client update');
    }

    async delete(
        req: Request,
        res: Response
    ) {
        const {id} = req.params;
        await this.clientService.deleteClient(id);
        res.status(200).send('Client deleted')
    }
}