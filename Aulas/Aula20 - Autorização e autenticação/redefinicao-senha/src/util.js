import { fileURLToPath } from 'url';
import { dirname } from 'path';
import bcrypt from 'bcryptjs'; //npm install bcrypt

const createHash =  password => bcrypt.hashSync(password, bcrypt.genSaltSync(10));

const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password);

export default { createHash, isValidPassword };