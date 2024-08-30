import api from "./api"

class RelacionamentoService{
    
    async getAll(){   
        return api.get("/relacionamento").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}

const relacionamentoService = new RelacionamentoService()
export default relacionamentoService

