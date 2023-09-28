import { User } from '../models/user.js';

export class MemoryDAO {
  constructor() {
    this.users = [];
  }

  create(user) {
    this.users.push(user);
  }

  // Implement other CRUD methods
}
