import estilos from './Sobre.module.css';

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
            <h2>Sobre Nós</h2>
            <p>Bem-vindo à nossa loja de relógios de luxo, onde a elegância encontra a precisão. Fundada em 2023, nossa missão é oferecer aos entusiastas de relógios uma seleção exclusiva das marcas mais renomadas do mundo.</p>
           

            <div className={estilos.elementos_sobre}>
                <picture>
                    <img src="./fachada.png" alt="Sobre Nós" />
                  </picture>
           

            <div className={estilos.sobre_elementos}>
                <h4>Nossas Filiais</h4>
                <p>Atualmente, contamos com filiais em São Paulo, Paris e Miami, proporcionando atendimento personalizado e uma experiência de compra única em cada local.</p>
                </div>

                <div className={estilos.sobre_elementos}>
                    <h4>Nossa Missão</h4>
                    <p>Nossa missão é oferecer relógios de luxo autênticos, combinando tradição e inovação.</p>
                    </div>

                <picture>
                    <img src="./fachada2.png" alt="Relógio Antigo" />
                  </picture>

                        </div>
                    </div>
        </section>
    )
}
