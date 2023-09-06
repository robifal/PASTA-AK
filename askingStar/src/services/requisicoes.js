import axios from "axios";

const baseUrl = "http://localhost:3006";

export class Requisicoes {
  constructor() {}

  async registerUsers(data) {
    console.log("registerUsers: " + JSON.stringify(data));
    const result = await axios
      .post(`${baseUrl}/api/cadastro`, {
        data: data,
      })
      .then((res) => {
        console.log("cadastro OK:" + res);
      })
      .catch((error) => {
        console.log("error:" + JSON.stringify(error));
      });

    console.log("result:" + JSON.stringify(result));
    return result;
  }

  async loginUser({ data }) {
    //console.log(data);

    const resultLogin = await axios
      .get(`${baseUrl}/api/login`, {
        headers: {
          email: data.email,
          password: data.senha,
        },
      })
      .then((res) => res)
      .catch((error) => {
        return {
          msg: "Usuario não encontrado, cadastre-se é efetue o login novamente!",
        };
      });

    return resultLogin;
  }

  async cadastroQuestion({}) {
    const resultPerguntas = await axios
      .post(`${baseUrl}/api/perguntas`, {})
      .then((res) => res);
    console.log(resultPerguntas);
    return resultPerguntas;
  }

  async portuguesQuestion({}) {
    const resultPortgues = await axios
      .get(`${baseUrl}/api/portugues`, {})
      .then((res) => res);
    console.log(resultPortgues);
    return resultPortgues;
  }

  async matematicaQuestion({}) {
    const resultMatematica = await axios
      .get(`${baseUrl}/api/matematica`, {})
      .then((res) => res);
    console.log(resultMatematica);
    return resultMatematica;
  }

  async historiaQuestion({}) {
    const resultHistoria = await axios
      .get(`${baseUrl}/api/historia`, {})
      .then((res) => res);
    console.log(resultHistoria);
    return resultHistoria;
  }

  async edufisicaQuestion({}) {
    const resultEdufisica = await axios
      .get(`${baseUrl}/api/edufisica`, {})
      .then((res) => res);
    console.log(resultEdufisica);
    return resultEdufisica;
  }

  async artesQuestion({}) {
    const resultArtes = await axios
      .get(`${baseUrl}/api/artes`, {})
      .then((res) => res);
    console.log(resultArtes);
    return resultArtes;
  }

  async informaticaQuestion({}) {
    const resultInformatica = await axios
      .get(`${baseUrl}/api/informatica`, {})
      .then((res) => res);
    console.log(resultInformatica);
    return resultInformatica;
  }
}
