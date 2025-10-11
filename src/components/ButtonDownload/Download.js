import Image from "next/image";
import styles from './Download.module.scss';

export default function ButtonDownload() {
    return (
        <button className={styles.Download}> Baixe o App
            <Image
                className={styles.iconDownload}
                src="/download-icon.png"
                alt="icone de celular"
                width={12}
                height={20}
            />
        </button>
    )
}