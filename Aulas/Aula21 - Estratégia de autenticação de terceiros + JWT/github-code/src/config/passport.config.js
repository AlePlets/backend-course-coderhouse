import passport from "passport";
import GitHubStrategy from "passport-github2";
import userService from "../models/User.js";
import { accessSync } from "fs";

// const initializePassport = () => {
//     passport.serializeUser((user, done) => {
//         done(null, user);
//     });

//     passport.deserializeUser(async (user, done) =>{
//         let user = await userService.findById(id);
//         done(null, user);
//     });
// }

const initializePassport = () => {
    passport.use('github', new GitHubStrategy({
        clienteID: "f0b1b0a0b0a0b0a0b0a0",
        clienteSecret: "f0b1b0a0b0a0b0a0b0a0",
        callbackURL: "http://localhost:8080/api/sessions/githubcallback"
        }, async (accessToken, refreshToken, profile, done) => {
            try { 
                console.log(profile);
                let user = await userService.findOne({email: profile.__json.email});
                if(!user){
                    let newUser = {
                        name: profile.__json.name,
                        last_name: '',
                        age:18,
                        profile: profile.__json.avatar_url,
                        password: ''
            }
            let result = await userService.create(newUser);
            done(null, result);
        } 
        else {
            done(null, user);
        }
    }catch (error) {
        return done(erro);
    }
    }));
}
export default initializePassport;