import styles from "./styles.module.scss";
import SecondPageHeader from "@/components/common/SecondPageHeader/SecondPageHeader";
import SimpleText from "@/components/common/SimpleText/SimpleText";
import WhiteSpace from "@/components/common/WhiteSpace/WhiteSpace";

interface RegulationsProps {
    youtubeLink: string
    youtubeTitle: string
}

export default function Regulations({ youtubeLink, youtubeTitle }: RegulationsProps): React.ReactElement {
    return (
        <div className={styles.wrapper}>
            <SecondPageHeader
                firstLine="Как проходят мои уроки"
            />
            <WhiteSpace
                size="small"
            />
            <SimpleText
                firstLine={youtubeTitle}
                textSize="middle"
            />
            <WhiteSpace
                size="small"
            />
            <div className={styles.media}>
                <iframe width="100%" height="100%" src={youtubeLink} title={youtubeTitle} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
        </div>
    );
}
