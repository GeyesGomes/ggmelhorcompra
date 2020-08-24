import React from 'react'
import Header from '../components/header'

const Index = () => {
    return (
        <div>
            <div>
                <Header />
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
        </div>
    )
}

export async function getStaticProps() { 
    return{
        props: {pages: '/**.js'}
    }
}
export default Index


            
        