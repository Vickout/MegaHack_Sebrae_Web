export default class Auth {

    login(email: string) {
        localStorage.setItem('logado', JSON.stringify(true));
        localStorage.setItem('email', JSON.stringify(email));
    }

    isAuthenticated() {
        return !!localStorage.getItem('logado')
    }

    logout({history}: any) {
        localStorage.removeItem('logado');
        history.replace('/')
    }
}