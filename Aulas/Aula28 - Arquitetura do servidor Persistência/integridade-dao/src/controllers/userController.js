import { User } from '../models/user.js';
import { MemoryDAO } from '../dao/memoryDao.js';
import { MongoDBDAO } from '../dao/mongodbDao.js';

// Choose DAO implementation
const dao = new MongoDBDAO(); // or new MemoryDAO();

export default {
  createUser(req, res) {
    const { id, name, email } = req.body;
    const newUser = new User(id, name, email);
    dao.create(newUser);
    res.status(201).json(newUser);
  }

  // Implement other controller methods
};
