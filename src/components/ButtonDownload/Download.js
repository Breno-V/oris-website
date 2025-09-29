import Image from "next/image";
import "@/components/ButtonDownload/Download.scss";

export default function ButtonDownload() {
    return (
        <button className="Download"> Baixe o App
            <Image
                className="iconDownload"
                src="/download-icon.png"
                alt="icone de celular"
                width={12}
                height={20}
            />
        </button>
    )
}