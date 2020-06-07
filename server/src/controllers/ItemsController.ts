import { Request, Response } from 'express';
import knex from '../database/connection';

// metodos que a comunidade normalmente usa como padrao
// index(list all), show(list one item), create, update, delete

class ItemsController {

    async index(req: Request, res: Response) {

        const items = await knex('items').select('*');

        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                image_url: `http://192.168.0.103:3333/uploads/${item.image}`
            };
        })

        return res.json(serializedItems);
    }
}

export default ItemsController;