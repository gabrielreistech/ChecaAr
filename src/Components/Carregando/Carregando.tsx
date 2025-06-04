import Styles from "./Carregando.module.css";

export default function Carregando() {
    return (
        <>
            <div className={Styles.loaderContainer}>
                <div className={Styles.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            <div className={Styles.loaderContainer}>
                <div className={Styles.loader}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>

    );
}


