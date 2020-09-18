import React from 'react'

const Index = () => {
    return (
        <React.Fragment>
            <div className='float-center sm:flex mx-auto justify-around p-10 bg-pink-400'>
                <img className=''src='/imagemPrincipal.png' alt='360Slim'></img>
                <div className='justify-items-center p-8'>
                    <iframe className ='max-h-full max-w-full pb-8 sm:p-8 h-full w-screen'
                        src = "https://www.youtube.com/embed/Vlz542Y6IHo" 
                        posição = " absoluta "
                        
                        id = " myId "
                         
                    ></iframe>

                    <button className='flex mx-auto shadow-xl font-bold hover:bg-pink-800 border py-4 px-10 rounded-full bg-pink-300'>
                        <a href='https://www.360slim.com.br/?mcr=AYH10246959'>Saiba mais Benefícios</a>
                    </button>
                </div>
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
            
            <div className= 'sm:flex pt-10 justify-around bg-pink-400'>
                <img src='/d-fineCaps.png' alt='D-Fine Caps'></img>
                <div>
                    <h1 className='p-8 font-bold text-xl'>
                        Diferente de outros produtos disponíveis no mercado,<br /> 
                        D-FINE CAPS possui Registro no Ministério da Saúde,<br /> 
                        Autorização da ANVISA e se destaca por apresentar uma composição 100% natural,<br /> 
                        contando com poderosos ingredientes cuidadosamente selecionados,<br /> 
                        que trabalham em conjunto e garantem uma queima de gordura rápida e<br /> 
                        natural para o seu corpo.
                    </h1>
                    <div className='flex'>
                        <div className='p-4'>
                            <button className='shadow-xl font-bold hover:bg-pink-800 border py-4 px-10 rounded-full bg-pink-300'>
                                <a href='https://d-finecaps.com/braip/?pv=propv75p&af=afix6q4m'>Saiba Mais</a>
                            </button>
                        </div>
                        <div className='p-4'>
                            <button className='shadow-xl font-bold hover:bg-pink-800 border py-4 px-10 rounded-full bg-pink-300'>
                                <a href='https://ofertadfinecaps.com/new-braip/?pv=lip62dlx&af=afix6q4m'>Comprar Agora</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export async function getStaticProps() { 
    return{
        props: {pages: '/**.js'}
    }
}
export default Index


            
        