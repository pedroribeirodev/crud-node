const livrosRotas = require('./livro-rotas');
const baseRotas = require('./base-rotas');

module.exports = (app) => {
    baseRotas(app);
    livrosRotas(app);
};