import api from "./api"

class TarefaService{
    
    async getAll(){   
        return api.get("/tarefa").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getAllConcluidas(){   
        return api.get("/tarefa/concluidas").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getAllPendentes(){   
        return api.get("/tarefa/pendentes").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async finalizar(data){   
        return api.post("/tarefa/finalizar/"+data, data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }


    async save(data){   
        return api.post("/tarefa/nova", data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const tarefaService = new TarefaService()
export default tarefaService

