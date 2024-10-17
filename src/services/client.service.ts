import { IClientRepository } from '../interfaces/client.repository.interface';
import { IClient } from '../models/client.model';

export class ClientService {
    constructor(
        private clientRepository: IClientRepository
    ) {}

    async createdClient(client: IClient): Promise<void> {
        await 
        this.clientRepository
        .create(client);
    }
    async findClientById(id: string) {
        return await
        this.clientRepository
        .findById(id);
    }
    async updateClient(id:string, client: IClient) {
        await 
        this.clientRepository
        .update(id, client);
    }
    async deleteClient(id:string) {
        await 
        this.clientRepository
        .delete(id);
    }
}