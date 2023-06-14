import axios from 'axios';

const baseUrl = 'http://localhost:3002';



export class Requisicoes {

        constructor(){      


 
        }

   async registerUsers({data}) {
            console.log(data);
          const result =  await axios.post(`${baseUrl}/api/cadastro`, {

            data: data

          }).then(res => res);
            
            console.log(result);
            return result;
        }


        async loginUser({data}) {
          console.log(data);

          const resultLogin =  await axios.post(`${baseUrl}/api/perguntas`, {
                
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
        
}






