import express from 'express';
import session from 'express-session';
import bcrypt from 'bcryptjs';
import passport from 'passport';
import flash from 'express-flash';
import { Strategy as LocalStrategy } from 'passport-local';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: false
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

app.set('view engine', 'ejs');

// Simulando um banco de dados de usuários
const users = [
  {
    id: 1,
    email: 'adminCoder@coder.com',
    password: bcrypt.hashSync('adminCod3r123', 10),
    role: 'admin'
  }
];

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password'
}, (email, password, done) => {
  const user = users.find(u => u.email === email);
  if (!user) return done(null, false, { message: 'No user with that email' });

  if (bcrypt.compareSync(password, user.password)) {
    return done(null, user);
  } else {
    return done(null, false, { message: 'Password incorrect' });
  }
}));

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => {
  const user = users.find(u => u.id === id);
  done(null, user);
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.post('/login', passport.authenticate('local', {
  successRedirect: '/products',
  failureRedirect: '/login',
  failureFlash: true
}));

app.get('/register', (req, res) => {
  res.render('register');
});

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ id: users.length + 1, email, password: hashedPassword, role: 'user' });
  res.redirect('/login');
});

app.get('/products', (req, res) => {
  if (!req.isAuthenticated()) return res.redirect('/login');
  res.render('products', { user: req.user });
});

app.post('/logout', (req, res) => {
  req.logOut();
  res.redirect('/login');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
