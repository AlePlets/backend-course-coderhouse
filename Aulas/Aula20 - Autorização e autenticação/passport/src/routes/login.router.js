import { Router } from 'express'; // Importa o módulo Router do Express para criar um roteador
import { UserModel } from '../models/user.model.js'; // Importa o modelo de usuário (assumindo que esteja definido em user.model.js)
import cookieParser from 'cookie-parser'; // Importa o módulo cookie-parser para lidar com cookies
import session from "express-session"; // Importa o módulo express-session para gerenciar sessões
import { createHash } from '../utils.js'; // Importa a função createHash de um arquivo de utilidades
import { isValidPassword } from '../utils.js'; // Importa a função isValidPassword de um arquivo de utilidades

const router = Router(); // Cria uma instância de roteador do Express

// Rota GET '/'
router.get('/', (req, res) => {
    console.log(req.session); // Exibe informações da sessão no console
    if (req.session.logged) {
        res.send('Logado!'); // Se o usuário estiver logado (conforme indicado pela sessão), envia "Logado!"
    } else {
        res.send('Não logado!'); // Caso contrário, envia "Não logado!"
    }
});

// Rota POST '/recovery'
router.post('/recovery', async (req, res) => {
    let { email, password } = req.body; // Extrai os campos 'email' e 'password' do corpo da requisição
    try {
        const user = await UserModel.findOne({ email: email }); // Procura um usuário no banco de dados com o email fornecido
        if (user == null) {
            res.status(404); // Se o usuário não for encontrado, retorna status 404
        } else {
            user.password = createHash(password); // Cria um hash da nova senha e atualiza a senha do usuário
            user.save(); // Salva o usuário com a nova senha no banco de dados
            res.send('Senha alterada com sucesso!'); // Retorna uma mensagem indicando que a senha foi alterada com sucesso
        }
    } catch (error) {
        res.status(400).json({ erro: error.message }); // Se ocorrer um erro durante o processamento, retorna um JSON com a mensagem de erro
    }
});

// Rota POST '/'
router.post('/', async (req, res) => {
    let { email, password } = req.body; // Extrai os campos 'email' e 'password' do corpo da requisição
    try {
        const user = await userModel.findOne({ email: email }); // Procura um usuário no banco de dados com o email fornecido
        if (user === null) {
            res.status(400); // Se o usuário não for encontrado, retorna status 400
        }
        if (user.password !== password) {
            res.status(400).json({ erro: "Senha incorreta" }); // Se a senha fornecida não coincidir com a senha do usuário, retorna status 400 com uma mensagem de erro em formato JSON
        } else {
            req.session.user = email; // Define o campo 'user' na sessão como o email do usuário
            req.session.logged = true; // Define o campo 'logged' na sessão como true, indicando que o usuário está logado
            res.send('Logado com sucesso!'); // Retorna uma mensagem indicando que o usuário foi logado com sucesso
        }
    } catch (error) {
        res.status(400).json({ erro: error.message }); // Se ocorrer um erro durante o processamento, retorna um JSON com a mensagem de erro
    }
});

// Rota POST '/login'
router.post('/login', passport.authenticate('login', { failureRedirect: '/faillogin' }), async (req, res) => {
    if (!req.user) return res.status(400).send({ status: "error", error: "Invalid credentials" }); // Se o usuário não estiver autenticado (passport.authenticate falhar), retorna um erro com status 400 e uma mensagem de erro em formato JSON
    req.session.user = req.user; // Define o campo 'user' na sessão com as informações do usuário autenticado
    // Não há retorno explícito nesta rota, presumivelmente o restante do código trata o sucesso da autenticação
});

router.post('/register', passport.authenticate('register', { failureRedirect: '/failregister' }), async (req, res) => {
    res.send({status:'Sucesso', message: 'Registrado com sucesso!'}); // Retorna uma mensagem indicando que o usuário foi registrado com sucesso
});
router.get('/failregister', (req, res) => {
    console.log('Falha no registro'); // Exibe uma mensagem de erro no console
    res.send({status:'Falha', message: 'Falha no registro'}); // Retorna uma mensagem indicando que o registro falhou
});

export default router; // Exporta o roteador para uso em outros arquivos do projeto
