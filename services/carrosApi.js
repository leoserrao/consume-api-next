import axios from "axios";

class CarrosApi{
    constructor(){
        this.cursos_url = 'https://api-carros.leoserrao.repl.co'
    }

    async getListCarros(){
        let response
        await axios(this.cursos_url)
            .then(res => {
                response = (res.data);
            }).catch(err => {
                response = err
            })

            return response
    }
}

export default new CarrosApi()