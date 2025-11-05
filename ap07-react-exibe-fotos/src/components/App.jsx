import React from 'react'
import Busca from './Busca'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'

class App extends React.Component {

  state = {
    photos: []
  }

  onBuscaRealizada = async (termoDeBusca) => {
    const result = await pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }
    })
    console.log(result)
    this.setState({photos: result.data.photos})
  }

  // onBuscaRealizada = (termoDeBusca) => {
  //   this.pexelsClient.photos.search({
  //     query: termoDeBusca,
  //     per_page: 10
  //   })
  //   .then(result => this.setState({photos: result.photos}))
  // }
  
  
  render(){
    return (
      <div className='grid border-1 border-400 border-round-sm p-3 mx-3 mt-3'>
        <div className="col-12">
          <i className="pi pi-truck"></i>
        </div>
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}
            dica="Digite o que quer ver"/>
        </div>
        <div className="col-12">
          <div className='grid'>
            <ListaImagens  // media : 6 colunas ocupadas --> diminui espaço de ocupação por imagem
              imageStyle="col-12 md:col-6 lg:col-4 xl:col-3" // temos que desestruturar e passar para Imagem pela ListaImagens
              photos={this.state.photos} />   
            </div>
        </div>
      </div>
    )
  }
}

export default App