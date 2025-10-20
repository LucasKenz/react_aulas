import React from 'react';
// Importação de ReactDOM é mantida para fidelidade ao Bloco de Código 1.9 (embora seja legacy).
import ReactDOM from 'react-dom';

// 1.5 - Simulação do import de imagem local (doc1)
// Em um projeto real, essa variável conteria o caminho ou hash da imagem.
const doc1 = 'https://images.unsplash.com/photo-1559839734-2b7194cb9043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'; 

// Componente para a aplicação principal
const App = () => {

    // 1.1 - Definição dos estilos do container usando uma função que devolve um objeto JSON.
    const containerStyles = () => { 
        return {
            width: '95%', // Ajustado para ser responsivo
            maxWidth: 1280, // Mantendo a largura máxima do exercício (1280px)
            margin: '20px auto', 
            border: '1px solid black', 
            backgroundColor: "#EEE", 
            borderRadius: 8, 
            padding: 12, 
            textAlign: 'center'
        }; 
    } 

    // 1.4 - Definição dos nomes dos médicos em um objeto JSON.
    const docNames = {
        doc1: 'José da Silva', 
        doc2: 'Maria da Silva', 
        doc3: 'Jaqueline Mendes'
    }; 

    // 1.3/Bloco 1.4 - Estilos para simular a classe .profissional (adaptado para objeto JS)
    const profissionalStyle = {
        // Estilos do .profissional
        border: '1px solid rgb(192, 153, 243)', // roxo claro
        backgroundColor: 'rgb(228, 221, 238)', // cinza roxo claro
        borderRadius: 8,
        padding: 8,
        // Estilos de layout para a div
        width: 'calc(33% - 24px)', // 3 cards por linha no desktop
        minWidth: 250, // Mínimo para mobile
        margin: '12px 8px',
        flexShrink: 0,
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    // 1.3/Bloco 1.4 - Estilos para a tag img (adaptado para objeto JS)
    const profissionalImageStyle = {
        // Estilos do .profissional img
        height: 150, 
        borderRadius: 8, 
        width: '100%',
        objectFit: 'cover',
        marginBottom: 8,
    };
    
    // Importação do styles.css comentada, pois o ambiente só permite um único arquivo JSX.
    // import './styles.css' 

    return ( 
        // 1.1 - Aplicação do estilo do container
        <div style={containerStyles()}> 
            <h2 style={{fontSize: '2rem', marginBottom: '20px', color: '#333'}}>Profissionais de saúde</h2> 

            {/* 1.2 - Definição de estilos do elemento "2" (container de cards) usando CSS In-line (objeto literal) */}
            <div 
                style={{
                    margin: 8, 
                    border: '1px solid #DDD', 
                    borderRadius: 8, 
                    padding: 8, 
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-around',
                    flexWrap: 'wrap', // Garante quebra de linha em telas pequenas (responsividade)
                }}
            > 
                {/* CARD 1: José da Silva (Imagem via import - 1.5) */}
                <div style={profissionalStyle}> 
                    {/* Imagem do import doc1 (simulado) */}
                    <img src={doc1} style={profissionalImageStyle} alt={`Foto de ${docNames.doc1}`} /> 
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem', color: '#555'}}>{docNames.doc1}</p> 
                </div> 

                {/* CARD 2: Maria da Silva (Imagem via PUBLIC_URL - 1.6) */}
                <div style={profissionalStyle}> 
                    {/* 1.6 - Acessando imagem via process.env.PUBLIC_URL (simulado com placeholder) */}
                    {/* O uso de PUBLIC_URL é mais comum com process.env.PUBLIC_URL + '/doc2.jpg' */}
                    <img 
                        // Simulação do process.env.PUBLIC_URL + 'doc2.jpg'
                        src={'https://images.unsplash.com/photo-1582218456673-903732486667?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} 
                        style={profissionalImageStyle} 
                        alt={`Foto de ${docNames.doc2}`} 
                    /> 
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem', color: '#555'}}>{docNames.doc2}</p> 
                </div> 

                {/* CARD 3: Jaqueline Mendes (Imagem via link HTTPS comum - 1.7) */}
                <div style={profissionalStyle}> 
                    {/* 1.7 - Acessando imagem via link HTTPS comum (URL simplificada para garantir funcionamento) */}
                    <img 
                        src='https://images.unsplash.com/photo-1591604021695-0c69b7c05981?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
                        style={profissionalImageStyle} 
                        alt={`Foto de ${docNames.doc3}`} 
                    /> 
                    <p style={{fontWeight: 'bold', fontSize: '1.1rem', color: '#555'}}>{docNames.doc3}</p> 
                </div> 
            </div> 
        </div> 
    ) 
} 

// O componente precisa ser renderizado no elemento com id="root"
// Bloco de Código 1.9 (parte final)
ReactDOM.render( 
    <App />, 
    document.querySelector('#root') 
);

export default App;
