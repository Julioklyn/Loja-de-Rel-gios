import estilos from './Produtos.module.css';

export default function Produtos() {
    return (
        <section id="produto" className={estilos.produtos}>
            <div className={estilos.titulos}>
             <h2>Nossos Produtos</h2>
             <p>Aqui, reunimos os relógios de luxo mais refinados do mundo, com designs icônicos e tecnologia de precisão que reflete elegância e exclusividade.
             </p>
             <p>  Mais que medir horas - traduzimos precisão, herança e elegância em cada batida do mecanismo</p>
            
            <div className={estilos.relogio_img}> 
                <div className={estilos.card_relogio}> 
                    <h3>Baume Mercier Clifton Chronograph</h3>
                    <picture>
                        <img src="./relofoco.png" alt="baume mercier clifton chronograph" />
                    </picture>
                    <p className={estilos.preco}>R$ 25.340,00</p>
                    <button className={estilos.botao}>Comprar</button>
                     </div>
                     <div className={estilos.card_relogio}> 
                    <h3>Clifton Gold</h3>
                    <picture>
                        <img src="./relogiodourado.png" alt="Clifton Gold" />
                    </picture>
                    <p className={estilos.preco}>R$ 29.250,00</p>
                    <button className={estilos.botao}>Comprar</button>
                     </div>

                     <div className={estilos.card_relogio}> 
                    <h3>Rolex submariner</h3>
                    <picture>
                        <img src="./relocarro.png" alt="Rolex submariner" />
                    </picture>
                    <p className={estilos.preco}>R$ 35.000,00</p>
                    <button className={estilos.botao}>Comprar</button>
                     </div>

                     <div className={estilos.card_relogio}> 
                    <h3> iwc Portofino Automatico 37</h3>
                    <picture>
                        <img src="./relocarro2.png" alt="PORTOFINO AUTOMÁTICO 37" />
                    </picture>
                    <p className={estilos.preco}>R$ 31.000,00</p>
                    <button className={estilos.botao}>Comprar</button>
                     </div>
                    </div>
                 </div>
        </section>
    )
}