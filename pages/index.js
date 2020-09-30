import React from 'react'

const Index = () => {
    return (
        <React.Fragment>
            <div className='float-center sm:flex mx-auto justify-around p-10 bg-pink-400'>
                <img src='/imagemPrincipal.png' alt='360Slim'></img>
                <img className='pt-6'src='/fundoSlim.png' alt='Fundo'></img>
            </div>
            <div className='bg-gray-400 h-1'></div>
            <div className='sm:flex items-center text-center font-bold text-lg sm:justify-around'>
                <p>TODOS OS PRODUTOS SÃO AUTORIZADOS PELA ANVISA</p>
                <img className='mx-auto h-32 sm:h-64'src='/Anvisa.png' alt='Anvisa'></img>
            </div>
            <div className='bg-gray-400 h-1'></div>
            <div className= 'sm:flex pt-10 justify-around bg-pink-400'>
                <img src='/d-fineCaps.png' alt='D-Fine Caps'></img>
                <div>
                    <h1 className='text-center p-8 font-bold text-xl'>
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


            
        