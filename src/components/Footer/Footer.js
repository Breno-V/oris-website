import styles from "./Footer.module.scss"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.leftSide}>
                <Image src="/iconeFooter.png" alt="icone Oris" width={80} height={22} />
                <p className={styles.Description}>App de hábitos que entende sua rotina e se adapta a ela. Integrado com IA e o calendário pessoal, Oris sabe os seus momentos livres e te manda um lembrete no horário certo.</p>
                <p style={{marginTop: "6vh"}}>© 2025 Oris. Todos os direitos reservados.</p>
            </div>

            <div className={styles.rightSide}>
                <div className={styles.Up}>
                    <p><a href="https://www.instagram.com/orishabitapp/">Instagram</a></p>
                    <p><a href="https://www.linkedin.com/company/oris-habit-app/posts/?feedView=all">Linkedin</a></p>
                </div>
                <div className={styles.Down}>
                    <p><a href="https://github.com/Oris-Habit-App">Github</a></p>
                    <p><a href="mailto:orishabitapp@gmail.com?subject=Quero saber Mais!&body=Olá pessoal do Oris! Vim do site de vocês e gostaria de saber mais sobre o projeto">Email</a></p>
                </div>
            </div>
        </footer>
    )
}