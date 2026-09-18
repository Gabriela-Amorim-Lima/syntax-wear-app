import Banner from '@/assets/images/banner.jpg'
import { Button } from '../Button'
import { Overlay } from '../Overlay'

export const Hero = () => {
    return (
        <div className="container">
            <section className='relative h-125 rounded-[20px] mb-10'>
                <img src={Banner} alt='Homem sentado com os tenis da Syntaxwear' className='w-full h-full object-cover rounded-[20px]' />

              
                <Overlay title="Krypton One" subtitle="Transforme qualquer passo em presença" className='bottom-0 md:px-24 pb-32 px-6 justify-end md:items-end'>
                   <Button variant='secondary'>Ver modelos</Button>
                   <Button>Comprar</Button>
                </Overlay>
            </section>
        </div>
    )
}