import React from 'react'


const Index = () => {
    return (
        <div>
            <div className='p-8 bg-pink-300'>
                <img className=''src='/imagemPrincipal.png' alt='360Slim'></img>
            </div>
            <h1 className='p-10 font-bold text-red-800 text-4xl text-center'>
                ACESSE A PAGINA DE NOSSOS PRODUTOS E CONFIRA!<br />
                Todos os nossos produtos são certificados pela ANVISA.

            </h1>
            <h2 className='pb-12 font-bold text-red-600 text-4xl text-center'>
                Obrigado por acessar o nosso site,<br /> 
                no momento estamos fazendo melhorias em nosso sistema <br />
                para melhor lhe atender.
            </h2>
            <div className= 'mx-auto bg-pink-300'>
                <img src='/d-fineCaps.png' alt='D-Fine Caps'></img>
                
                <button className='shadow-xl font-bold hover:bg-pink-800 border py-4 px-10 rounded-full bg-pink-300'>Saiba Mais</button>
                <button>Comprar Agora</button>
                
            </div>

        </div>
    )
}

export async function getStaticProps() { 
    return{
        props: {pages: '/**.js'}
    }
}
export default Index


            
        