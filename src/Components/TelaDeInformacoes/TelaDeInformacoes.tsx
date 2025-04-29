import styles from "./TelaDeInformacoes.module.css";

interface TelaDeInformacoesProps {
    cidade: string;
    rua: string;
    aqi: number;
    poluicao: string;
    componentePoluicao: { name: string; value: string }[];
}

const TelaDeInformacoes: React.FC<TelaDeInformacoesProps> = ({ cidade, rua, aqi,  poluicao, componentePoluicao }) => {

    return (
        <div className={styles.containerExterno}>
            <div className={styles.containerInterno}>
                <h3 className={styles.titulo}>Informações de Localização</h3>
                <p className={styles.informacoes}>Cidade: {cidade}</p>
                <p className={styles.informacoes}>Rua: {rua}</p>

                <h3 className={styles.titulo}>Nível de AQI:</h3>
                <p className={styles.informacoes}>{aqi}</p>

                <h3 className={styles.titulo}>Status da qualidade do ar:</h3>
                <p className={styles.informacoes}>{poluicao}</p>
                <h4 className={styles.titulo}>Componentes de Poluição:</h4>
                {componentePoluicao.map((componente, index) => (
                    <div key={index} className={styles.componentes}>
                        <strong>{componente.name}:</strong> {componente.value} µg/m³
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TelaDeInformacoes;