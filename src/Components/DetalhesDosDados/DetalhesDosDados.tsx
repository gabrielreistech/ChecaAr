import styles from "./DetalhesDosDados.module.css";

const DetalhesDosDados = () => {
    return (
        <div className={styles.containerExterno}>
            <div className={styles.containerInterno}>
                <section>
                    <h2>Sobre os Dados de Qualidade do Ar</h2>
                    <br />
                    <article>
                        <h3>🧭 AQI — Índice de Qualidade do Ar</h3>
                        <br />
                        <p>
                            O valor do <strong>AQI (Air Quality Index)</strong> representa o nível de pureza ou poluição do ar com base em diversos poluentes. Os valores possíveis vão de <strong>1 a 5</strong>:
                        </p>
                        <ul>
                            <br />
                            <li><strong>1 – Bom:</strong> Qualidade do ar satisfatória; o ar está limpo.</li>
                            <br />
                            <li><strong>2 – Regular:</strong> Pode afetar levemente pessoas extremamente sensíveis.</li>
                            <br />
                            <li><strong>3 – Moderado:</strong> Pessoas sensíveis devem considerar reduzir a exposição ao ar livre.</li>
                            <br />
                            <li><strong>4 – Ruim:</strong> Grupos sensíveis podem apresentar efeitos mais sérios; evitar atividades ao ar livre.</li>
                            <br />
                            <li><strong>5 – Muito Ruim:</strong> Toda a população pode sentir efeitos nocivos à saúde.</li>
                        </ul>
                            <br />
                        <p><em>*Consulte escalas específicas do Reino Unido, Europa, EUA ou China Continental para comparações mais detalhadas.*</em></p>
                            <br />  
                    </article>

                    <article>
                        <h3>🧪 Componentes do Ar Monitorados</h3>
                        <br />
                        <p>Os valores são apresentados em <strong>μg/m³</strong> (microgramas por metro cúbico).</p>
                        <br />
                        <table border="1" cellpadding="6" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Componente</th>
                                    <th>Significado</th>
                                    <th>Efeito Comum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><strong>CO</strong></td>
                                    <td>Monóxido de carbono</td>
                                    <td>Reduz a quantidade de oxigênio no sangue; perigoso em ambientes fechados.</td>
                                </tr>
                                <tr>
                                    <td><strong>NO</strong></td>
                                    <td>Monóxido de nitrogênio</td>
                                    <td>Gás precursor de poluentes como o NO₂.</td>
                                </tr>
                                <tr>
                                    <td><strong>NO₂</strong></td>
                                    <td>Dióxido de nitrogênio</td>
                                    <td>Irritante respiratório; causa problemas pulmonares.</td>
                                </tr>
                                <tr>
                                    <td><strong>O₃</strong></td>
                                    <td>Ozônio</td>
                                    <td>Prejudicial em baixas altitudes; irrita olhos e pulmões.</td>
                                </tr>
                                <tr>
                                    <td><strong>SO₂</strong></td>
                                    <td>Dióxido de enxofre</td>
                                    <td>Irrita as vias respiratórias; causa chuva ácida.</td>
                                </tr>
                                <tr>
                                    <td><strong>PM2.5</strong></td>
                                    <td>Partículas finas</td>
                                    <td>Penetram nos pulmões e corrente sanguínea; muito perigosas.</td>
                                </tr>
                                <tr>
                                    <td><strong>PM10</strong></td>
                                    <td>Partículas inaláveis</td>
                                    <td>Irritam olhos, nariz e garganta.</td>
                                </tr>
                                <tr>
                                    <td><strong>NH₃</strong></td>
                                    <td>Amônia</td>
                                    <td>Pode causar irritações e problemas respiratórios.</td>
                                </tr>
                            </tbody>
                        </table>
                    </article>
                    <br />
                    <p><strong>💡 Dica:</strong> Evite atividades ao ar livre em dias com qualidade do ar ruim. A exposição contínua pode afetar sua saúde a longo prazo.</p>
                </section>

            </div>
        </div>
    );
}

export default DetalhesDosDados;