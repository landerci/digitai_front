import api from "./api"

class PessoaService{
    
    async getAll(){   
        return api.get("/pessoas").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    async getPessoa(id){
        return api.get("/pessoas/" + id).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
    async uploadImage(id, file){
        const formData = new FormData()
        formData.append('file', file)
        return api.post("/pessoas/upload/", formData).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })  
    }
    async getGostos(id){
        return api.get("pessoas/gostos/"+id).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async cadastrarGostos(data){
        return api.post("/pessoas/pessoa/gosto",  data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }


}

const pessoaService = new PessoaService()
export default pessoaService

