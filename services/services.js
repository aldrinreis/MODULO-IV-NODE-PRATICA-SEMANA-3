const axios = require("axios");

module.exports = class Services {
  static async UsuarioCreate(req, res) {
    let valores = req.body;

    const options = {
      url: "https://07e5eedb-302b-4516-bf9b-2f950096b7ff-00-r5ofrl5bno6r.worf.replit.dev/usuarios/Cadastrar",
      method: "POST",
      data: valores,
    };

    axios(options);
    const mensagem = "Cadastro realizado com sucesso!";
    res.render("mensagem", { mensagem });
  }

  //LISTAR
  static async UsuarioListar(req, res) {
    const options = {
      url: "https://07e5eedb-302b-4516-bf9b-2f950096b7ff-00-r5ofrl5bno6r.worf.replit.dev/usuarios",
      method: "GET",
      data: {},
    };
    axios(options).then((response) => {
      console.log(response.data);
      const usuarios = response.data;
      res.render("usuarios/listar", { usuarios });
    });
  }

};


