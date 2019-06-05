class BaseControlador {

    static rotas() {
        return {
            home: '/',
            login: '/login'
        };
    }

    home() {
        return function(req, resp) {
            resp.marko(
                require('../views/base/home/home.marko')
            );
        };
    }

    login(){
        return function(req, resp){
            resp.marko(templates.base.login);
        };
    }

    efetuaLogin() {

        return function(req, resp) {

            // Lógica de login.

        };
    }
}

module.exports = BaseControlador;