//crie um service para room
import api from "./api"

class RoomService {
    async getRooms() {
        console.log("chamou o getRoom")
        const response = await api.get('/room');
        return response.data;
    }
 
    async CadastrarUsuario(data){

        let usuario = {
            name:data
        }
        console.log("chamou o CadastrarUsuario")

        const response = await api.post('/usuario', usuario);
        return response.data;   
    }

    async enviarMensagem (usuario , texto){

        let mensagem = {
            text: texto,
            usuario : { name: usuario}

        }
        console.log(" esse é o mensagem", mensagem) 

        const response = await api.post('/mensagens', mensagem);

        return response.data;

    }

    async carregarMensagens() {
        const response = await api.get(`/mensagens`)
        return response.data
    }
}
const roomService = new RoomService()
export default roomService

