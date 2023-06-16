import axios from 'axios';

const baseUrl = 'http://localhost:3002';



export class Requisicoes {

        constructor(){      


 
        }

   async registerUsers(data) {
            console.log(data);
          const result =  await axios.post(`${baseUrl}/api/cadastro`, {

            data: data

          }).then(res => res);
            
            console.log(result);
            return result;
        }


        async loginUser({data}) {
          console.log(data);

          const resultLogin =  await axios.get(`${baseUrl}/api/perguntas`, {
                
              data: data
          }).then(res => res);

            console.log(resultLogin);
              return resultLogin;
        }

      async cadastroQuestion({}){

        const resultPerguntas = await axios.post(`${baseUrl}/api/perguntas`, {

        }).then(res => res);
            console.log(resultPerguntas);
            return resultPerguntas;
      }
        
      async portuguesQuestion({}) {

        const resultPortgues = await axios.get(`${baseUrl}/api/portugues`, {

        }).then(res => res);
          console.log(resultPortgues);
          return resultPortgues;
      
      }

      async matematicaQuestion({}) {

        const resultMatematica = await axios.get(`${baseUrl}/api/matematica`, {

        }).then(res => res);
          console.log(resultMatematica);
          return resultMatematica;
      }

    async historiaQuestion({}) {

      const resultHistoria = await axios.get(`${baseUrl}/api/historia`, {

      }).then(res => res);
        console.log(resultHistoria);
        return resultHistoria;
    }

    async edufisicaQuestion({}) {

      const resultEdufisica = await axios.get(`${baseUrl}/api/edufisica`, {

      }).then(res => res);
        console.log(resultEdufisica);
        return resultEdufisica;
    }

    async artesQuestion({}) {

      const resultArtes = await axios.get(`${baseUrl}/api/artes`, {

      }).then(res => res);
        console.log(resultArtes);
        return resultArtes;
    }
    
    async informaticaQuestion({}) {

      const resultInformatica = await axios.get(`${baseUrl}/api/informatica`, {

      }).then(res => res);
          console.log(resultInformatica);
          return resultInformatica;
    }
} 






