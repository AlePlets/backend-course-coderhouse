export default class Contacts {
    constructor() {
        this.data = [];
    }
    get = async() => {
        return this.data;
    }
}

//Metodo GET do MongoDB DAO tem o mesmo nome que o get do DAO da memorra, a troca de importações não será um problema.
//É importante ter a lógica separa para lidar com problemas de diferentes persitências.