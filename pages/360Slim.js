import React from 'react'


const Slim = () => {
    return (
        <div>
            
            <section>
                <div className='mx-auto sm:flex mx-auto p-10 justify-around text-white bg-pink-500'>
                    <div>
                        <img src='/imagemPrincipal.png' alt='360Slim'></img>
                        
                    </div>
                    <div className='text-center sm:text-auto'>
                        <h1 className='py-6 text-3xl font-bold'>Conheça O Emagrecedor 100% Natural 
                            <br /> Que Intensifica A Perda De Peso 
                            <br /> E Queima De Gordura.
                        </h1>
                        <p className='font-bold text-xl pb-6'>Emagreça De Forma Rápida E Definitiva</p>
                        <p className='font-bold'>Controla A Ansiedade</p>
                        <p className='font-bold'>Sem Efeito Sanfona</p>
                        <p className='font-bold'>Inibidor De Apetite</p>
                        <p className='font-bold'>Elimina Gordura Localizada</p>
                        <p className='font-bold'>Faz Uma Faxina No Organismo</p>
                        <div className='pt-4'>
                            <button className='shadow-xl font-bold hover:bg-pink-300 border py-4 px-10 rounded-full bg-pink-800'>
                                <a href='https://www.360slim.com.br/?mcr=AYH10246959'>SAIBA TODOS BENEFÍCIOS</a>
                            </button>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <div className='mx-auto p-8 sm:flex text-center justify-around'>
                    <img className='sm:h-64 px-8' src= '/certificado100.png' alt='Garantia'></img>
                    <div className='text-center mx-auto sm:m-auto sm:w-1/2'>
                        <p className='font-bold text-red-900 pb-5'>
                            GARANTIA DE RESULTADOS OU SEU DINHEIRO DE VOLTA!<br />
                        </p>
                        <p className='pb-5 font-bold'>Desafio 30 dias 360 SLIM!</p>
                        <p className='text-red-600 pb-8 sm:pb-10'>    
                            Garantimos os resultados de 360 SLIM. Prova disso, Que devolvemos o seu dinheiro se o produto não atender as expectativas.
                            Você terá até 30 dias após a compra para solicitar a devolução.
                        </p>
                        <button className='shadow-xl font-bold hover:bg-pink-800 border py-4 px-10 rounded-full bg-pink-300'>
                            <a href='https://ofertadfinecaps.com/new-braip/?pv=lip62dlx&af=afix6q4m'>Comprar Agora</a>
                        </button>
                    </div>
                </div>
                <div className='h-1 sm:bg-gray-200'></div>
                <div className='justify-items-center p-8 bg-pink-500 sm:flex mx-auto justify-around'>
                    
                    <img className='sm:w-1/2' src='/baner01.jpg'></img>
                    
                    <iframe className='max-h-full max-w-full py-8 sm:w-1/2 sm:p-8 sm:border-solid sm:border-4 sm:border-black sm:shadow'
                        src = "https://www.youtube.com/embed/Vlz542Y6IHo" 
                        posição = " absoluta "
                
                        id = " myId "
                    
                    ></iframe>
                </div>
                <div className='pb-8 bg-pink-500'>
                    <button className='flex mx-auto shadow-xl font-bold hover:bg-pink-800 border py-4 px-10 rounded-full bg-pink-300'>
                        <a href='https://www.360slim.com.br/?mcr=AYH10246959'>Saiba mais Benefícios</a>
                    </button>
                </div>
            </section>           
        </div>
    )
}

export default Slim