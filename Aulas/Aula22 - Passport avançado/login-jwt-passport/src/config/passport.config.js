import passport from 'passport';
import {jwt} from 'passport-jwt';
import { UserModel } from '../models/user.model.js';

const JWTStrategy = jwt.Strategy;
const ExtractJWT = jwt.ExtractJwt;

const initializePassport = () => {

    passport.use('jwt', new JWTStrategy({jwtFromRequest: ExtractJWT.fromExtractors([cookieExtractor]), 
        secretKey: 'umaStringDeChar',
        }, async(token, done) => {
        try{
            return done(null, token.user);
        }
        catch (error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await UserModel.findById(id);
        done(null, user)
    });
};

const cookieExtractor = (req) => {
    let token = null;
    if(req && req.cookies){ //Confirma que existe um cookie para retornar
        token = req.cookies['jwt']; //Pega somente o cookie que precisamos
    }
    return token;
}

export default initializePassport;