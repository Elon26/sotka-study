import Image from "next/image";
import styles from "./styles.module.scss";
import platformPreview from "public/images/main-page/platform_preview.webp";
import face from "public/images/common/face.webp";
import ReactPlayer from "react-player";
import { githubHomePageUrl } from "../../../../data/contants.json";

interface EducationBodyProps {
    selectedHeader: number
}

export default function EducationBody({ selectedHeader }: EducationBodyProps): React.ReactElement {
    return (
        <div className={styles.cards}>
            <div className={`${styles.card} ${selectedHeader === 1 && styles.selectedCard}`}>
                <div className={styles.description}>
                    <div className={styles.top}>
                        <div className={styles.bigText}>
                            <p> И теория.</p>
                            <p> И практика.</p>
                            <p> И пробники.</p>
                            <p> И все нужные материалы.</p>
                        </div>
                        <div className={styles.smallText}>
                            тебе останется только войти
                        </div>
                    </div>
                </div>
                <div className={styles.media}>
                    <iframe className={styles.video} width="100%" height="100%" src="https://www.youtube.com/embed/47p_5uzZfKo" title="Как пользоваться образовательной платформой?" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </div>
            <div className={`${styles.card} ${selectedHeader === 2 && styles.selectedCard}`}>
                <div className={styles.description}>
                    <div className={styles.top}>
                        <div className={styles.bigText}>
                            Занимайся где захочется и когда захочется
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.button}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className={styles.icon}><path d="M13.9626 17.6382C13.9626 21.1126 15.6998 21.1126 15.6998 21.1126M15.6998 21.1126H16.5683M15.6998 21.1126H8.75107M7.88248 21.1126H8.75107M3.53955 13.2953V13.6675C3.53955 15.0574 3.53955 15.7523 3.81004 16.2832C4.04796 16.7502 4.42761 17.1298 4.89457 17.3677C5.42543 17.6382 6.12036 17.6382 7.51023 17.6382H10.4882M3.53955 13.2953V7.71153C3.53955 6.32166 3.53955 5.62672 3.81004 5.09586C4.04796 4.62891 4.42761 4.24926 4.89457 4.01133C5.42543 3.74084 6.12036 3.74084 7.51023 3.74084H16.9406C18.3305 3.74084 19.0254 3.74084 19.5563 4.01133C20.0232 4.24926 20.4029 4.62891 20.6408 5.09586C20.9113 5.62672 20.9113 6.32166 20.9113 7.71153V13.2953M3.53955 13.2953H20.9113M20.9113 13.2953V13.6675C20.9113 15.0574 20.9113 15.7523 20.6408 16.2832C20.4029 16.7502 20.0232 17.1298 19.5563 17.3677C19.0254 17.6382 18.3305 17.6382 16.9406 17.6382H10.4882M8.75107 21.1126C8.75107 21.1126 10.4882 20.6783 10.4882 17.6382" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>с компьютера</span>
                        </div>
                        <div className={styles.button}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" className={styles.icon}><path d="M12.2252 7.71519H12.234M12.6683 7.71519C12.6683 7.95504 12.4699 8.14948 12.2252 8.14948C11.9804 8.14948 11.782 7.95504 11.782 7.71519C11.782 7.47534 11.9804 7.2809 12.2252 7.2809C12.4699 7.2809 12.6683 7.47534 12.6683 7.71519ZM9.99167 21.6126H14.4587C15.8486 21.6126 16.5435 21.6126 17.0744 21.3421C17.5413 21.1042 17.921 20.7245 18.1589 20.2576C18.4294 19.7267 18.4294 19.0318 18.4294 17.6419V8.21153C18.4294 6.82166 18.4294 6.12672 18.1589 5.59586C17.921 5.12891 17.5413 4.74926 17.0744 4.51133C16.5435 4.24084 15.8486 4.24084 14.4587 4.24084H9.99168C8.60181 4.24084 7.90687 4.24084 7.37601 4.51133C6.90906 4.74926 6.52941 5.12891 6.29148 5.59586C6.021 6.12672 6.021 6.82166 6.021 8.21152V17.6419C6.021 19.0318 6.021 19.7267 6.29148 20.2576C6.52941 20.7245 6.90906 21.1042 7.37601 21.3421C7.90687 21.6126 8.60181 21.6126 9.99167 21.6126Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>с телефона</span>
                        </div>
                        <div className={styles.button}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 25 26" fill="none" className={styles.icon}><path d="M12.4084 10.0131L12.4084 10.0034M12.4084 9.52564C12.6825 9.52564 12.9047 9.74389 12.9047 10.0131C12.9047 10.2823 12.6825 10.5006 12.4084 10.5006C12.1343 10.5006 11.9121 10.2823 11.9121 10.0131C11.9121 9.74389 12.1343 9.52564 12.4084 9.52564ZM22.3351 16.4743L22.3351 10.7665C22.3351 9.37661 22.3351 8.68167 22.0646 8.15081C21.8267 7.68385 21.447 7.30421 20.9801 7.06628C20.4492 6.79579 19.7543 6.79579 18.3644 6.79579L6.45237 6.79579C5.0625 6.79579 4.36757 6.79579 3.83671 7.06628C3.36975 7.30421 2.9901 7.68386 2.75218 8.15081C2.48169 8.68167 2.48169 9.37661 2.48169 10.7665L2.48169 16.4743C2.48169 17.8642 2.48169 18.5591 2.75218 19.09C2.9901 19.5569 3.36975 19.9366 3.83671 20.1745C4.36757 20.445 5.0625 20.445 6.45237 20.445L18.3644 20.445C19.7543 20.445 20.4492 20.445 20.9801 20.1745C21.447 19.9366 21.8267 19.5569 22.0646 19.09C22.3351 18.5591 22.3351 17.8642 22.3351 16.4743Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <span>с планшета</span>
                        </div>
                    </div>
                </div>
                <div className={styles.media}>
                    <Image
                        className={styles.seconCardImage}
                        src={platformPreview}
                        alt="превью платформ"
                        width={890}
                        height={550}
                        placeholder="blur"
                    />
                </div>
            </div>
            <div className={`${styles.card} ${selectedHeader === 3 && styles.selectedCard}`}>
                <div className={styles.description}>
                    <div className={styles.top}>
                        <div className={styles.bigText}>
                            Практикуйся и получай моментальную обратную связь
                        </div>
                        <div className={styles.smallText}>
                            <p className={styles.withDot}>получишь результаты своей домашки уже через <span className={styles.withLine}>15 минут</span></p>
                            <p className={styles.withDot}>получишь подробный разбор всех своих ошибок</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.faceArea}>
                            <Image
                                className={styles.faceIcon}
                                src={face}
                                alt="лицо"
                                width={100}
                                height={100}
                                placeholder="blur"
                            />
                            <div className={styles.faceText}>наставник будет проверять снова и снова, пока задание не будет идеальным</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="18.974" viewBox="0 0 53 19" fill="none" className={styles.faceLine}><path d="M0.903601 18.5082C8.26471 6.30825 28.4233 -9.94675 51.8655 12.8846" stroke="currentColor" stroke-width="1.6"></path></svg>
                        </div>
                    </div>
                </div>
                <div className={styles.media}>
                    <ReactPlayer
                        url={"video/homeworkPreview.mp4"}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="770px"
                        height="470px"
                    />
                </div>
            </div>
            <div className={`${styles.card} ${selectedHeader === 4 && styles.selectedCard}`}>
                <div className={styles.description}>
                    <div className={styles.top}>
                        <div className={styles.bigText}>
                            Практикуйся и получай моментальную обратную связь
                        </div>
                        <div className={styles.smallText}>
                            <p className={styles.withDot}>получишь результаты своей домашки уже через <span className={styles.withLine}>15 минут</span></p>
                            <p className={styles.withDot}>получишь подробный разбор всех своих ошибок</p>
                        </div>
                    </div>
                    <div className={styles.bottom}>
                        <div className={styles.faceArea}>
                            <Image
                                className={styles.faceIcon}
                                src={face}
                                alt="лицо"
                                width={100}
                                height={100}
                                placeholder="blur"
                            />
                            <div className={styles.faceText}>наставник будет проверять снова и снова, пока задание не будет идеальным</div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="53" height="18.974" viewBox="0 0 53 19" fill="none" className={styles.faceLine}><path d="M0.903601 18.5082C8.26471 6.30825 28.4233 -9.94675 51.8655 12.8846" stroke="currentColor" stroke-width="1.6"></path></svg>
                        </div>
                    </div>
                </div>
                <div className={styles.media}>
                    <ReactPlayer
                        url={githubHomePageUrl + "video/homeworkPreview.mp4"}
                        playing={true}
                        loop={true}
                        muted={true}
                        width="770px"
                        height="470px"
                    />
                </div>
            </div>
        </div>
    );
}