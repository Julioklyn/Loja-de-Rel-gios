import estilos from './Contato.module.css';

export default function Contato() {
    return (
        <section id={estilos.contato}>
            <div className={estilos.contato}>
                <h2>Fale Conosco</h2>
                <p>
                    Estamos aqui para ajudar! Se você tiver alguma dúvida, sugestão ou precisar de assistência, não hesite em entrar em contato conosco. Nossa equipe está pronta para oferecer o suporte necessário e garantir que sua experiência conosco seja excepcional.
                </p>
                
                <div className={estilos.central_redes}>
                    <div className={estilos.bloco_contato}>
                        <h4>Contato</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./tele.png" alt="Telefone" />
                                </picture>
                                (12) 8002-8922
                            </li>

                            <li>
                                <picture>
                                    <img src="./mail.png" alt="Email" />
                                </picture>
                                @KlynElegance
                            </li>

                            <li>
                            <picture>
                                    <img src="./location-pin.png" alt="Localização" />
                                </picture>Paris, França
                             
                            </li>
                        </ul>
                    </div>

                    <div className={estilos.bloco_contato}>
                        <h4>Redes Sociais</h4>
                        <ul>
                            <li>
                                <picture>
                                    <img src="./instagram.png" alt="Instagram" />
                                </picture>
                                @KlynElegance
                            </li>

                            <li>
                                <picture>
                                    <img src="./whatsapp.png" alt="" />
                                </picture>
                                (12) 4002-8922
                            </li>

                            <li>
                                <picture>
                                    <img src="./twitter.png" alt="Twitter" />
                                </picture>
                                @KlynElegance
                            </li>
                        </ul>

                </div>
            </div>
        </div>
        </section>
    )
}
