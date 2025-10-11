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
              <div className={styles.block}>
                <div className={styles.icon}>
                  <svg className={styles.iconBlocks} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                    <path d="M22.4466 2H34.8909C37.38 2 38.6239 2 39.5746 2.48442C40.4108 2.91052 41.0914 3.58994 41.5175 4.42622C42.002 5.37693 42.002 6.6215 42.002 9.11062V21.5551C42.002 24.0442 42.002 25.2888 41.5175 26.2395C41.0914 27.0758 40.4102 27.7566 39.5739 28.1827C38.6241 28.6667 37.3815 28.6667 34.8973 28.6667H28.6683V34.8958C28.6683 37.38 28.6683 38.6226 28.1844 39.5724C27.7583 40.4087 27.0777 41.09 26.2414 41.5161C25.2916 42 24.0494 42 21.5652 42H9.10611C6.62188 42 5.37792 42 4.42814 41.5161C3.59187 41.09 2.91246 40.4094 2.48636 39.5731C2.00195 38.6224 2.00195 37.3784 2.00195 34.8893V22.4449C2.00195 19.9558 2.00195 18.7103 2.48636 17.7595C2.91246 16.9233 3.59187 16.2439 4.42814 15.8177C5.37885 15.3333 6.62432 15.3333 9.11341 15.3333H15.3351V9.11155C15.3351 6.62242 15.3351 5.37693 15.8195 4.42622C16.2456 3.58994 16.925 2.91052 17.7613 2.48442C18.712 2 19.9575 2 22.4466 2Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className={styles.texts}>
                  <div className={styles.upperText}>Painel unificado</div>
                  <div className={styles.downText}>Visualize e edite todos os seus hábitos em um só lugar. Simples e direto.</div>
                </div>
              </div>
              <div className={styles.block}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M21.9979 13.1111V24.2222H33.1068M42.002 7.71367L35.194 2M8.80986 2L2.00195 7.71367M21.9979 42C12.1815 42 4.22373 34.0406 4.22373 24.2222C4.22373 14.4038 12.1815 6.44444 21.9979 6.44444C31.8143 6.44444 39.7721 14.4038 39.7721 24.2222C39.7721 34.0406 31.8143 42 21.9979 42Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={styles.texts}>
                  <div className={styles.upperText}>Foco total, sem distrações.</div>
                  <div className={styles.downText}>Pomodoro integrado mantém o foco e afasta as distrações. Só produtividade.</div>
                </div>
              </div>
              <div className={styles.block}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 37" fill="none">
                  <path d="M2.00195 24.0005V27.96C2.00195 30.4242 2.00195 31.6555 2.48636 32.5967C2.91246 33.4246 3.59188 34.0991 4.42814 34.5209C5.37792 35 6.62189 35 9.10612 35H42.002M2.00195 24.0005V2M2.00195 24.0005L10.565 16.9359L10.572 16.9303C12.1211 15.6523 12.8971 15.0121 13.7386 14.7521C14.7326 14.4448 15.8034 14.4934 16.7652 14.8885C17.5807 15.2234 18.2957 15.9312 19.7257 17.3469L19.74 17.3611C21.1922 18.7988 21.9203 19.5196 22.7488 19.8538C23.7292 20.2492 24.8207 20.2832 25.8255 19.9533C26.6774 19.6735 27.4555 19.0006 29.0112 17.6529L42.0015 6.4" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={styles.texts}>
                  <div className={styles.upperText}>Acompanhe seu progresso.</div>
                  <div className={styles.downText}>Acompanhe seu progresso em tempo real e monitore cada detalhe de perto.</div>
                </div>
              </div>
              <div className={styles.block}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M12.0237 39.3373C14.9603 41.031 18.3676 42 22.0012 42C33.0469 42 42.002 33.0458 42.002 22.0001C42.002 10.9543 33.0477 2 22.002 2C10.9563 2 2.00195 10.9543 2.00195 22.0001C2.00195 25.6337 2.97094 29.0409 4.6646 31.9776L4.67116 31.989C4.83413 32.2715 4.91631 32.414 4.95353 32.5486C4.98863 32.6757 4.99844 32.7898 4.98945 32.9213C4.97979 33.0626 4.93218 33.209 4.83458 33.5018L3.12609 38.6273L3.12393 38.6341C2.76346 39.7155 2.58322 40.2562 2.71169 40.6165C2.82371 40.9306 3.07236 41.1786 3.3865 41.2906C3.74599 41.4188 4.28428 41.2393 5.36095 40.8804L5.37435 40.8755L10.4998 39.167C10.7917 39.0697 10.94 39.0204 11.081 39.0107C11.2125 39.0017 11.3259 39.0136 11.4529 39.0487C11.5879 39.086 11.7305 39.1682 12.0145 39.332L12.0237 39.3373Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className={styles.texts}>
                  <div className={styles.upperText}>Converse com IA</div>
                  <div className={styles.downText}>Abra o chat e descreva seu novo hábito do seu jeito, sem menus ou formulários engessados.</div>
                </div>
              </div>
            </div>
            <div className={styles.mockup}>
              <Image
                src={"/mockup.png"}
                alt={"mockup demonstrando funcionaidade pomodoro"}
                width={300}
                height={450}
              />
            </div>
          </div>
        </div>
      </section >

      {/* Final Section */}
      < section >
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
      </section >
    </div >
  );
}