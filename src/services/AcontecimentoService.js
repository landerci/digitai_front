import api from "./api"

class AcontecimentoService{
    
    async getAll(){   
        return api.get("/acontecimento").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

}

const acontecimentoService = new AcontecimentoService()
export default acontecimentoService

