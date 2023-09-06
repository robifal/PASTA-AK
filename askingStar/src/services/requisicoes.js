import axios from "axios";

const baseUrl = "http://10.220.30.171:3003";

export class Requisicoes {
  constructor() {}

  async registerUsers(data) {
    const result = await axios
      .post(`${baseUrl}/api/cadastro`, {
        data: data,
      })
      .then((res) => res)
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
    return resultPerguntas;
  }

  async portuguesQuestion({}) {
    console.log("entrou");
    const { data } = await axios
      .get(`${baseUrl}/api/portugues/listportugues`)
      .then((res) => res)
      .catch((erro) => {
        console.log(erro);
      });

    console.log(data);
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
