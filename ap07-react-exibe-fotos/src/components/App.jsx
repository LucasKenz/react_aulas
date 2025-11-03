import Busca from './Busca'
import ListaImagens from './ListaImagens' // Importa o novo componente
// Se você for usar 'react-dotenv', descomente as linhas abaixo e importe o pexelsClient
// import env from 'react-dotenv' 
// import pexelsClient from '../utils/pexelsClient' 

// Para fins de demonstração, o cliente Pexels está definido aqui como um placeholder
// Lembre-se, na prática, você deve usar o pexelsClient do arquivo utils/
const PEXELS_KEY = 'cyJx3dHz4w3qiLol4wu7JHAHTWPBMldssXk4WDEuQCHahECXood48gJk'; // Usando sua chave temporariamente

class App extends React.Component {
  
  // 1. Define o estado para armazenar a lista de fotos
  state = { pics: [] } 

  // onBuscaRealizada = (termoDeBusca) => {
  //   console.log(`Termo de Busca: ${termoDeBusca}`);
    
  //   // 3. Faz a requisição à API Pexels (usando a biblioteca 'pexels')
  //   this.pexelsClient.photos.search({
  //       query: termoDeBusca
  //   })
  //   .then(picsResponse => {
  //       // 4. Atualiza o estado com a coleção 'photos' da resposta
  //       this.setState({ pics: picsResponse.photos });
  //   })
  //   .catch(error => {
  //       console.error("Erro durante a busca na Pexels:", error);
  //   });
  // }

  onBuscaRealizada = async (termoDeBusca) => {
    const result = awsait pexelsClient.get('/search', {
      params: { query: termoDeBusca }
    })
  }

  render(){
    return (
      <div className='grid border-1 border-400 border-round-sm p-3 mx-3 mt-3'>
        <div className='col-12'>
          <i className="pi pi-truck"></i>
        </div>
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        
        {/* Adiciona o componente ListaImagens abaixo da Busca */}
        <div className='col-12'>
          {/* O componente ListaImagens recebe a lista de fotos do estado */}
          <ListaImagens pics={this.state.pics} />
        </div>
      </div>
    )
  } 
}

export default App