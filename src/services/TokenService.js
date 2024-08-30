import api from "./api"

class TokenService{  
    async refresh(data){
        return api({
            url: "/token/refresh",
            method: "PUT",
            timeout: 5000,
            data: data,
            headers: {Accept: 'application/json'}
        }).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async verify(data){
        return api({
            url: "/token/verify",
            method: "PUT",
            timeout: 5000,
            data: data,
            headers: {Accept: 'application/json'}
        }).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const tokenService = new TokenService()
export default tokenService