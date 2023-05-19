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


}