import passport from 'passport'; //npm install passport passport-local
import local from 'passport-local'; 
import { UserModel } from '../models/user.model.js'; //usuarios pelo schema mongoose
import { createHash, isValidPassword  } from '../utils.js';

const LocalStrategy = local.Strategy;

//declara passport como middleware
const initializePassport = () => {
    passport.use('register', new LocalStrategy( 
            {passReqToCallback: true, usernameField: 'email'}, async (req, email, password, done) => {
                const { nome, sobrenome, idade, email } = req.body;
                try {
                    let user = await UserModel.findOne({email: email});
                    if (user) {
                        return done(null, false, {message: 'Email já cadastrado'});
                    }
                    const newUser = {
                        nome: nome,
                        sobrenome: sobrenome,
                        email: email,
                        idade: idade,
                        password: createHash(password)
                    }
                    let result = await UserModel.create(newUser);

                    return done(null, result);
                } catch (error) {
                    return done(`Erro ao obter usuário: ${error}`);
                }
            }
        ));

    passport.use('login', new LocalStrategy({usernameField: 'email'}, async (email, password, done) => {
        try{
            const user = await UserModel.findOne({email: username});
            if (!user) {
                console.log('User not found');
                return done(null, false)
            }
            if (!isValidPassword(user, password)) return done(null, false); {
            return done(null, false)
            }
        }catch (error) {
            return done(error);
        }
    }));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });

    passport.deserializeUser(async (id, done) => {
        let user = await UserModel.findById(id);
        done(null, user);
    });
} 
    export default initializePassport;
      
