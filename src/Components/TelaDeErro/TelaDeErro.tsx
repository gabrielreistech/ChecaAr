import styles from "./TelaDeErro.module.css";

interface ErroProps {
    erro:string;
}

const TelaDeErro : React.FC<ErroProps> = ({erro}) => {
    return (
        <div className={styles.containerExterno}>
            <div className={styles.containerInterno}>
                <h2>{erro}</h2>
            </div>
        </div>
    );
}

export default TelaDeErro;