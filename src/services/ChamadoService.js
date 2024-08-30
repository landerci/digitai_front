import api from "./api"

class ChamadoService{
    async getActive(){   
        return api.get("/chamado/find-actives").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getAllFields(){   
        return api.get("/chamado/get-all-fields").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getById(id){   
        return api.get("/chamado/find-one/" + id).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getStatusHistory(id){   
        return api.get("/chamado/status-history/" + id).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getRetainedEquipments(){   
        return api.get("/chamado/retained-equipments").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async getStatusList(){   
        return api.get("/chamado/find-status").then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async save(data){   
        console.log(data)
        if (data.id){
            return api.put("/chamado/update",  data).then((result) => {
                return Promise.resolve(result)
            }).catch((error) => {
                return Promise.reject(error)
            })
        }else{
            return api.post("/chamado/create",  data).then((result) => {
                return Promise.resolve(result)
            }).catch((error) => {
                return Promise.reject(error)
            })
        }        
    }

    async duplicate(id){
        let data = {
            id: id
        }
        return api.post("/chamado/duplicate",  data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async saveRegulacao(data){   
        return api.put("/chamado/update-regulacao",  data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })        
    }

    async saveStatus(idChamado, data){   
        return api.put("/chamado/change-status/" + idChamado,  data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })        
    }

    async enviarViatura(data){   
        return api.put("/chamado/update-viatura",  data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })        
    }

    async finalizarChamado(data){   
        return api.put("/chamado/update-finalizar",  data).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })        
    }

}

const chamadoService = new ChamadoService()
export default chamadoService

