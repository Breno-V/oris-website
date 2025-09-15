import "@/components/MainContainer/MainContainer.scss";
import Image from "next/image";

export default function MainContainer() {
    return (
        <section>
            <div className="HIWcontainer">
                <h2 className="title" id="HowItWorks">Mais que um app, uma transformação.</h2>
                <div className="cards">
                    <div className="cardsUp">
                        <div className="card1">
                            <div className="Images">
                                <Image src="/Google-Calendar.png" alt="logo google calendar" width={100} height={120} />
                                <Image src="/calendar.png" alt="logo google calendar" width={100} height={140} />
                            </div>
                            <p className="upText">Integração inteligente com calendário</p>
                            <p className="text">Oris entende sua rotina ao se conectar ao seu calendário, organizando seus hábitos nos momentos ideais para você.</p>
                        </div>
                        <div className="card2">
                            <div className="Images">
                                <Image src="/Iphone 15 Pro Max Black Titanium-1.png" alt="logo google calendar" width={300} height={200} />
                            </div>
                            <p className="upText">Integração inteligente com calendário</p>
                            <p className="text">Oris entende sua rotina ao se conectar ao seu calendário, organizando seus hábitos nos momentos ideais para você.</p>
                        </div>
                    </div>
                    <div className="cardsDown">
                        <div className="card3">
                            <div className="Images">
                                <Image src="/Cellphone-Example.png" alt="logo google calendar" width={300} height={200} />
                            </div>
                            <p className="upText">Lembretes no momento certo</p>
                            <p className="text">Nada de notificações aleatórias. O Oris envia lembretes quando realmente há espaço no seu dia para agir.</p>
                        </div>
                        <div className="card4">
                            <div className="Images">
                                <Image src="/Agenda.png" alt="logo google calendar" width={300} height={200} />
                            </div>
                            <p className="upText">Hábitos flexíveis</p>
                            <p className="text">Se surgir um imprevisto, o Oris reorganiza seus hábitos sem atrapalhar sua rotina.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}