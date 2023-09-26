import passport from 'passport'; //npm install passport passport-local
import local from 'passport-local'; 
import { UserModel } from '../models/user.model.js'; //usuarios pelo schema mongoose
import { createHash, isValidPassword  } from '../utils.js';

const LocalStrategy = local.Strategy;




    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await UserModel.findById(id);
        done(null, user);
    });

    export default initializePassport;
      
