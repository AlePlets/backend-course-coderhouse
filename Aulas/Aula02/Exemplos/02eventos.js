class TicketManager {  // declara a classe TicketManager

    eventos = []; // declara um evento vazio
    participantes = []; // Declara uma lista de participantes vazio
    basePrice = 3; //declara um preço base de 3 reais

    getEvents(){ //cria um  metodo que mostra todos os eventos salvos - retorna evento vazio
        return this.eventos; //o this referencia a variável de classe no caso eventos

    }
    addEvent(eventos){ //recebe os eventos passando os objetos 
        eventos.preco = this.basePrice + eventos.preco; //pega o base price e soma como o preco
        eventos.eventId += 1; // pega o eventId e acrescenta 1
        this.eventos.push(eventos); //insere os dados do evento

    }
    addUser(user){ //adiciona os usuarios e verifica se o id é = o indice que ta no objeto evento, se encontrar coloca no array participante, se nao retorna codigo 404
        let find = false; //cria uma variável já referenciando como falsa
        
        this.eventos.forEach((element, index)=>{       // pega o evento e percorre por cada elemento da lista
            if(user.evento == index){ // se o user.evento for igual o índex então pega o user e adiciona na lista de participantes
                this.participantes.push(user);
                find = true
            }
        })
        if(find){
            return this.user
            
            }
                return {erro:'evento não encontrado', code:404} // caso contráro retorna o erro
            }
    putEventoEnGira(engira){  // cria o método putEventoEnGira que recebe os eventos da variável engira
        let eventoExistente = this.eventos.eventId; // cria uma variável eventoExistente que recebe os ID's do eventos
        const novoEvento = { //cria uma nova variável com as informações do evento existente e altera o lugar, data para novas infos. 
            ...eventoExistente,
            novoLugar: 'Quatá',
            novaData: new Date(),
            eventoId: eventos.eventId
        };

        return novoEvento
    }
  }


let ticketManager = new TicketManager(); //cria um novo objeto ticketmanager
console.log('evento: ', ticketManager.getEvents());

let eventos = {nome:'alessandra', lugar:'São-Paulo', preco: 4, capacidade: 50, data: new Date(), eventId: 0} //criamos o evento e adicionamos no add event, pegou o preço, adicionou + 3 e colocou no array 

ticketManager.addEvent(eventos); //chama o objeto e pode chamar os métodos e funções aqui dentro, no caso o eventos

console.log('eventos: ',ticketManager.getEvents());

let user = {eventId:1, userId:1}

userDone = ticketManager.addUser(user);

if(userDone?.code === 404){
    console.log(userDone.erro)
}

console.log('participante', ticketManager.participants);

let engira = {newCity:'Quatá', newDate: new Date()}

console.log('eventos: ',ticketManager.putEventoEnGira());


