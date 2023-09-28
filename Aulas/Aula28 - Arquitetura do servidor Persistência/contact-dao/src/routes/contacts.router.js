import { Router } from 'express';
import Contacts from '../dao/mongo/contacts.mongo';

const router = Router();
const contactsService = new Contacts();

router.get('/', async(req, res) => {
    let result = await contactsService.get();
    res.send({status: "success", payload: result});
});

export default router;