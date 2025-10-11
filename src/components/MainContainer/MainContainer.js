import styles from "./MainContainer.module.scss";
import Image from "next/image";

export default function MainContainer() {
  return (
    <div className={styles.colorBackground}>
      {/* Welcome Area */}
      <section>
        <div className={styles.welcomeArea}>
          <div className={styles.titleImpact}>
            App de hábitos que se <span className={styles.highlight}>adapta</span> à sua rotina
          </div>
          <div className={styles.subtitle}>
            Integrado ao seu calendário, Oris adapta seus hábitos à sua rotina e lembra você no momento exato.
          </div>
        </div>
        <div className={styles.containerDownloadNow}>
          <button className={styles.btnDownloadNow}>
            <div>Baixe gratuitamente</div>
            <Image src="/download-icon.png" alt="icone de celular" width={12} height={20} />
          </button>
        </div>
        <div className={styles.containerDemonstration}>
          <div className={styles.imageDemonstration}>
            <Image src="/Example-cellphone-website.png" alt="exemplo de um celular com nosso app aberto" width={500} height={650} />
          </div>
        </div>
      </section>

      {/* HIW Container */}
      <section>
        <div className={styles.HIWcontainer}>
          <h2 className={styles.title} id="HowItWorks">Mais que um app, uma transformação.</h2>
          <div className={styles.label}>COMO FUNCIONA</div>
          <div className={styles.cards}>
            <div className={styles.cardsUp}>
              <div className={styles.card}>
                <div className={styles.icons}>
                  <Image src="/Google-Calendar.png" alt="logo google calendar" width={100} height={120} />
                  <div className={styles.outlookWrapper}>
                    <Image src="/calendar.png" alt="logo outlook calendar" width={100} height={100} />
                  </div>
                </div>
                <p className={styles.upText1}>Integração inteligente com calendário</p>
                <p className={styles.text1}>Oris entende sua rotina ao se conectar ao seu calendário, organizando seus hábitos nos momentos ideais para você.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.Images}>
                  <Image src="/exemplo-chat-ia.png" alt="Imagem de exemplo de um celular" width={300} height={190} />
                </div>
                <p className={styles.upText}>Criação de hábitos em linguagem natural</p>
                <p className={styles.text}>Basta descrever o hábito em uma frase simples. O Oris transforma sua ideia em uma rotina estruturada automaticamente.</p>
              </div>
            </div>
            <div className={styles.cardsDown}>
              <div className={styles.card}>
                <div className={styles.Images}>
                  <Image src="/Cellphone-Example.png" alt="imagem de exemplo de um celular" width={300} height={200} />
                </div>
                <p className={styles.upText}>Lembretes no momento certo</p>
                <p className={styles.text}>Nada de notificações aleatórias. O Oris envia lembretes quando realmente há espaço no seu dia para agir.</p>
              </div>
              <div className={styles.card}>
                <div className={styles.Images}>
                  <Image src="/Agenda.png" alt="imagem de exemplo da agenda do usuário" width={300} height={170} />
                </div>
                <p className={styles.upText4}>Hábitos flexíveis</p>
                <p className={styles.text4}>Se surgir um imprevisto, o Oris reorganiza seus hábitos sem atrapalhar sua rotina.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Container */}
      <section>
        <div className={styles.FlowContainer} id="Flow">
          <h2 className={styles.title}>Construa hábitos que funcionam no mundo real, não só no papel.</h2>
          <div className={styles.label}>FLOW</div>
          <div className={styles.mainContent}>
            <div className={styles.wordContainer}>
              <h4 className={styles.wordGray}>Hábitos que se adaptam a sua rotina</h4>
              <h4 className={styles.symbol}>+</h4>
              <h4 className={styles.wordGray}>Lembretes no momento certo</h4>
              <h4 className={styles.symbol}>+</h4>
              <h4 className={styles.wordGray}>Organização automática</h4>
              <h4 className={styles.symbol}>=</h4>
              <h4 className={styles.wordBlue}>Constância natural</h4>
            </div>

            <aside className={styles.imageInSide}>
              <Image src="/cellphone-aside.png" alt="Celular demonstrando a logo do aplicativo" width={350} height={300} />
            </aside>
          </div>
        </div>
      </section>

      {/* Container Functions */}
      <section>
        <div className={styles.containerFunctions} id="Functions">
          <h2 className={styles.title}>Um app de hábitos mais inteligente, preciso e prático.</h2>
          <div className={styles.label}>FUNCIONALIDADES</div>
          {/* bloco de funções */}
          <div className={styles.blockContainer}>
            <div className={styles.blocksArea}>
              {/* Repetir blocos conforme seu JSX original */}
            </div>
          </div>
        </div>
      </section>

      {/* Final Section */}
      <section>
        <div className={styles.finalSection}>
          <h2 className={styles.title} id="Download">Pronto para começar um novo hábito?</h2>
          <div className={styles.containerButtons}>
            <button className={styles.downloadFree}>
              <div className={styles.txtDownloadFree}>Baixe gratuitamente</div>
              <Image src="/download-icon.png" width={15} height={25} alt="icone de celular" />
            </button>
            <button className={styles.downloadGooglePlay}>
              <Image src="/download-google.svg" width={720} height={340} alt="imagem para botão Google Play" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}