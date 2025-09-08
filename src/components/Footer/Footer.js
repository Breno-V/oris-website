import "@/components/Footer/Footer.scss"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="footer">    
            <Image src="/iconeFooter.png" alt="icone Oris" width={80} height={22}></Image>
            <p className="Description">App de hábitos que entende sua rotina e se adapta a ela. integrado com IA e o calendário pessoal, Oris sabe os momentos livres e te manda um lembrete no horário certo.</p>
            <p>© 2025 Oris. Todos os direitos reservados.</p>
        </footer>
    )
}