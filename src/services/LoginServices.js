import api from "./api"

class LoginService{  
    async login(data){
        return api({
            url: "/user/login",
            method: "POST",
            timeout: 5000,
            data: data,
            headers: {Accept: 'application/json'}
        }).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }

    async logout(){
        return api({
            url: "/user/logout",
            method: "PUT",
            timeout: 5000,
            headers: {Accept: 'application/json'}
        }).then((result) => {
            return Promise.resolve(result)
        }).catch((error) => {
            return Promise.reject(error)
        })
    }
}

const loginService = new LoginService()
export default loginService