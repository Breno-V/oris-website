import "@/components/MainContainer/MainContainer.scss";
import Image from "next/image";

export default function MainContainer() {
    return (
        <>
            <section>
                <div className="welcomeArea">
                    <div className="titleImpact">App de hábitos que se <span className="highlight">adapta</span> à sua rotina
                    </div>
                    <div className="subtitle"> Integrado ao seu calendário, Oris adapta seus hábitos à sua rotina e lembra você no momento exato. </div>
                </div>
                <div className="containerDownloadNow">
                    <button className="btnDownloadNow">Baixe gratuitamente
                        <Image
                            className="iconDownload"
                            src="/download-icon.png"
                            alt="icone de celular"
                            width={12}
                            height={20}
                        />
                    </button>
                </div>
                <div className="containerDemonstration">
                    <div className="imageDemonstration">
                        <Image
                            src={"/Example-cellphone-website.png"}
                            alt="exemplo de um celular com nosso app aberto"
                            width={500}
                            height={650}
                        />

                    </div>
                </div>
            </section>
            <section>
                <div className="HIWcontainer" id="HowItWorks">
                    <h2 className="title">Mais que um app, uma transformação.</h2>
                    <div className="cards">
                        <div className="cardsUp">
                            <div className="card1">
                                <div className="Images">
                                    <Image src="/Google-Calendar.png" alt="logo google calendar" width={100} height={120} />
                                    <div className="outlookWrapper">
                                        <Image src="/calendar.png" alt="logo outlook calendar" width={100} height={100} />
                                    </div>
                                </div>
                                <p className="upText">Integração inteligente com calendário</p>
                                <p className="text">Oris entende sua rotina ao se conectar ao seu calendário, organizando seus hábitos nos momentos ideais para você.</p>
                            </div>
                            <div className="card2">
                                <div className="Images">
                                    <Image src="/Iphone 15 Pro Max Black Titanium-1.png" alt="imagem de exemplo de um celular" width={300} height={200} />
                                </div>
                                <p className="upText">Criação de hábitos em linguagem natural</p>
                                <p className="text">Basta descrever o hábito em uma frase simples. O Oris transforma sua ideia em uma rotina estruturada automaticamente.</p>
                            </div>
                        </div>
                        <div className="cardsDown">
                            <div className="card3">
                                <div className="Images">
                                    <Image src="/Cellphone-Example.png" alt="imagem de exemplo de um celular" width={300} height={200} />
                                </div>
                                <p className="upText">Lembretes no momento certo</p>
                                <p className="text">Nada de notificações aleatórias. O Oris envia lembretes quando realmente há espaço no seu dia para agir.</p>
                            </div>
                            <div className="card4">
                                <div className="Images">
                                    <Image src="/Agenda.png" alt="imagem de exemplo da agenda do usuário" width={300} height={200} />
                                </div>
                                <p className="upText">Hábitos flexíveis</p>
                                <p className="text">Se surgir um imprevisto, o Oris reorganiza seus hábitos sem atrapalhar sua rotina.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="FlowContainer" id="Flow">
                    <h2 className="title">Construa hábitos que funcionam no mundo real, não só no papel.</h2>

                    <div className="mainContent">
                        <div className="wordContainer">
                            <h4 className="wordGray">Hábitos que se adaptam a sua rotina</h4>
                            <h4 className="symbol">+</h4>
                            <h4 className="wordGray">Lembretes no momento certo</h4>
                            <h4 className="symbol">+</h4>
                            <h4 className="wordGray">Organização automática</h4>
                            <h4 className="symbol">=</h4>
                            <h4 className="wordBlue">Constância natural</h4>
                        </div>

                        <aside className="imageInSide">
                            <Image
                                src={"/cellphone-aside.png"}
                                alt="Celular demonstrando a logo do aplicativo"
                                width={350}
                                height={700}
                            />
                        </aside>
                    </div>
                </div>


            </section>

        </>
    )
}