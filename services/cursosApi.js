import axios from 'axios';
class CursosApi {
	construtor() {
		this.cursos_url = 'https://api-crud-cursos.leoserrao.repl.co'
	}
	async getListCursos() {
	 let response
	await axios(this.cursos_url)
		.then(res => {
			response = res.data
		}).catch(err => {
			response = err
		})
	return response
	}}
export default new CursosApi()
