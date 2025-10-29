import React from 'react'

class App extends React.Component {

  onBuscaRealizada = (termoDeBusca) => {
    const chaveAPI = 'cyJx3dHz4w3qiLol4wu7JHAHTWPBMldssXk4WDEuQCHahECXood48gJk'
    console.log(termoDeBusca)
  }

  render(){
    return (
      <div className='grid border-1 border-400 border-round-sm p-3 mx-3 mt-3'>
        <div className='col-12 '>
          <i className="pi pi-truck"></i>
        </div>
        <div className='col-12'>
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  } 
}



export default App