// vendo apenas gramátca. letra maiuscula para guardar e caracterizar como compoentne
// vamos guardar em uma constante para podermos usar depois
const App = () => {

  const estiloBotao = {
    marginTop: 10, 
    padding: '5px 10px', 
    borderRadius: 5, 
    borderStyle: 'none', 
    backgroundColor: 'blueviolet', 
    color: '#fff', 
    cursor: 'pointer'
  }

  const texto = "Nome:"

  const obterTextoDoBotao = () => 'Enviar'

  const aoClicar = () => alert('Clicou no botão!')
  // da errado, pois devolve undefined, tem que ajusar no onclick la embaixo

  // vamos usar css inline com OBJETO JS através do operador de troca de contexto {} para criar um objetos com par chave e valor
  return(
    <div style = {{width: 300, margin: 'auto', textAlign: 'center', backgroundColor: '#ddd', padding: 20, borderRadius: 10}}>
      Hello World! 2+2
      para sair do contexto jsx e entrar no js usamos {}
      {2 + 2}
      aqui ja volta ao contexto jsx
      {} é o operador de troca de contexto

      vamos fazer um rótulo em html com label
      {/* <label for="nome">Nome:</label> 
      <input type="text" id="nome" /> */}
      passamos o for para html, aponta para o id nome
      lembrando que como estamos em um contexto jsx, for vira htmlFor, pois se não daria conflito com o for do JS e para ler o código
      <label className="rotulo" htmlFor="nome" style={{display: 'block', border: '1px solid #ccc', borderRadius: 5, padding: 5}}>{texto}</label>
      <input type="text" id="nome" style={{border: '1px solid #ccc', borderRadius: 5, padding: 5, borderStyle: 'none', outline: 'none', width: '100%'}} />
      <button style={estiloBotao} onClick={() => aoClicar()} >
        {obterTextoDoBotao()}
      </button>
      {/* aplicamos estilos CSS através de js */}
    </div> 
  )
}
// POR SER objeto JS separamos objetos com , 
// para o contexto de margin for usamos ''
// backgroundColor usa C maiusculo, invés de backgorund-color por exemplo, pois é js e não css
// a gramática muda pois agora é JS e não CSS

export default App;