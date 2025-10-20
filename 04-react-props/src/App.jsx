import React, { useState } from 'react';
import ReactDOM from 'react-dom';

// --- CONFIGURAÇÃO: Inclusão de Bootstrap e Font Awesome via CDN ---
// (Em um projeto Create-React-App, seriam feitos via import/npm, conforme 2.3.2 e 2.4.1)
// Adicionando a estrutura externa para carregar as bibliotecas
// No ambiente Immersive/Canvas, o React é renderizado dentro de um div,
// mas vou incluir o link do CSS no escopo para simular o Bloco 2.4.1.

// Este componente é para carregar estilos e scripts globais.
const GlobalDependencies = () => (
    <React.Fragment>
        {/* Bootstrap CDN (Simulando o import 'bootstrap/dist/css/bootstrap.min.css') */}
        <link 
            rel="stylesheet" 
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
            xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
            crossOrigin="anonymous" 
        />
        {/* Font Awesome CDN (Simulando o import '@fortawesome/fontawesome-free/css/all.css') */}
        <link 
            rel="stylesheet" 
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" 
            xintegrity="sha512-SnH5WK+bZxgPHs44uWIX+LLMDsWvMTQo+JObbI3JEU7jKqJz+xM5x2k7g/A+fA/0Gk2q2j2E9A+q" 
            crossOrigin="anonymous" 
        />
    </React.Fragment>
);

// --- 1. COMPONENTE FEEDBACK (Bloco 2.9.1) ---
const Feedback = props => {
    return (
        // d-flex e justify-content-end do Bootstrap
        <div className="d-flex justify-content-end"> 
            <button 
                onClick={props.funcaoOK} 
                className="btn btn-primary m-1"
            >
                {props.textoOK}
            </button>
            <button 
                onClick={props.funcaoNOK} 
                className="btn btn-danger m-1"
            >
                {props.textoNOK}
            </button>
        </div>
    )
}


// --- 2. COMPONENTE PEDIDO (Bloco 2.8.3, adaptado) ---
// Utiliza desestruturação para acessar as props.
const Pedido = ({icone, titulo, descricao}) => {
    return (
        // d-flex e p-2 para espaçamento do Bootstrap
        <div className="d-flex align-items-center">
            <div className="p-2">
                {/* Ícone usando Font Awesome (props.icone) */}
                <i className={`${icone} fa-3x text-info`}></i> 
            </div>
            <div className="flex-grow-1 p-2">
                {/* flex-grow-1: toma o espaço restante */}
                <h5 className="text-secondary mb-1">{titulo}</h5>
                <p className="text-muted mb-0">{descricao}</p>
            </div>
        </div>
    )
}

// --- 3. COMPONENTE CARTAO (Bloco 2.8.1) ---
// Utiliza as props.cabecalho e a prop implícita props.children.
const Cartao = (props) => {
    return (
        <div className="card shadow mb-4">
            <div className="card-header bg-light">
                {/* props.cabecalho para o título/data */}
                <h6 className="mb-0 text-muted">{props.cabecalho}</h6>
            </div>
            <div className="card-body p-3">
                {/* props.children: Elementos "filhos" que foram passados na chamada (Pedido + Feedback) */}
                {props.children} 
            </div>
        </div>
    )
}


// --- 4. COMPONENTE PRINCIPAL APP (Bloco 2.9.2) ---
const App = () => {
    // Estado para exibir o feedback das funções de clique, evitando 'alert()'
    const [feedbackMessage, setFeedbackMessage] = useState("Aguardando confirmação...");

    // Definições de textos e funções (funcoesOK/NOK) - (Adaptado do Bloco 2.9.2)
    const textoOK = "Já chegou";
    const textoNOK = "Ainda não chegou";
    
    // Substituindo alert() por setFeedbackMessage
    const funcaoOK = () => {
        setFeedbackMessage("✅ Agradecemos a confirmação! (Chegou)");
        console.log("Agradecemos a confirmação!");
    };
    const funcaoNOK = () => {
        setFeedbackMessage("⚠️ Verificaremos o ocorrido! (Não Chegou)");
        console.log("Verificaremos o ocorrido!");
    };

    // Definição do componente Feedback (Bloco 2.9.2)
    const componenteFeedback = (
        <Feedback 
            textoOK={textoOK} 
            textoNOK={textoNOK} 
            funcaoOK={funcaoOK} 
            funcaoNOK={funcaoNOK} 
        />
    );

    // Definição dos pedidos (Adaptado dos Blocos 2.7.2, 2.5.5, 2.5.6, 2.5.7)
    const pedidoSSD = (
        <Pedido 
            icone="fa-solid fa-hdd" // Ícone Font Awesome para SSD
            titulo="SSD" 
            descricao="SSD Kingston A400 - SATA"
        />
    );
    const pedidoLivro = (
        <Pedido 
            icone="fa-solid fa-book" // Ícone Font Awesome para Livro
            titulo="Livro" 
            descricao="Concrete Mathematics - Donald Knuth"
        />
    );
    const pedidoNotebook = (
        <Pedido 
            icone="fa-solid fa-laptop" // Ícone Font Awesome para Notebook
            titulo="Notebook" 
            descricao="Notebook Dell - 8Gb - i5"
        />
    );


    return (
        // container principal (container-fluid para ocupar toda a largura)
        <div className="container-fluid p-4 bg-light min-vh-100">
            {/* Importando as dependências globais */}
            <GlobalDependencies />

            {/* Linha para o título */}
            <div className="row">
                <div className="col text-center my-4">
                    <h1 className="text-primary display-4">
                        Seus pedidos
                    </h1>
                </div>
            </div>

            {/* Linha para o Feedback de Ação */}
            <div className="row mb-4">
                <div className="col text-center">
                    <div className={`p-3 rounded ${feedbackMessage.startsWith('✅') ? 'bg-success text-white' : feedbackMessage.startsWith('⚠️') ? 'bg-warning text-dark' : 'bg-secondary text-white'}`}>
                        {feedbackMessage}
                    </div>
                </div>
            </div>
            
            {/* Linha para os pedidos (row) */}
            <div className="row justify-content-center">
                
                {/* --- 1º PEDIDO (SSD) --- (Bloco 2.7.2 / 2.8.2) */}
                {/* controle de colunas para responsividade: col-sm-8 col-md-6 m-2 */}
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 p-2"> 
                    <Cartao cabecalho="22/04/2021">
                        {pedidoSSD}
                        {componenteFeedback}
                    </Cartao>
                </div>

                {/* --- 2º PEDIDO (LIVRO) --- (Bloco 2.7.2 / 2.8.2) */}
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 p-2">
                    <Cartao cabecalho="20/04/2021">
                        {pedidoLivro}
                        {componenteFeedback}
                    </Cartao>
                </div>

                {/* --- 3º PEDIDO (NOTEBOOK) --- (Bloco 2.7.2 / 2.8.2) */}
                <div className="col-12 col-sm-8 col-md-6 col-lg-4 p-2">
                    <Cartao cabecalho="21/01/2021">
                        {pedidoNotebook}
                        {componenteFeedback}
                    </Cartao>
                </div>

            </div>
        </div>
    );
}

// --- MONTAGEM DO COMPONENTE --- (Adaptado do Bloco 2.7.2 / 2.9.2)
// O ReactDOM.render é necessário para completar a estrutura de um arquivo index.js/App.jsx completo.
// Nota: Em um ambiente moderno, apenas a exportação do App seria necessária.
export default App;

if (typeof document !== 'undefined') {
    const rootElement = document.querySelector('#root');
    if (rootElement) {
        ReactDOM.render(
            <App />,
            rootElement
        );
    }
}
