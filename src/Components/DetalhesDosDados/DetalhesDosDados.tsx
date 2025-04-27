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
                        <table style={{ border: '1px solid black', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr>
                                    <th style={{ border: '1px solid black', padding: '6px' }}>Componente</th>
                                    <th style={{ border: '1px solid black', padding: '6px' }}>Significado</th>
                                    <th style={{ border: '1px solid black', padding: '6px' }}>Efeito Comum</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>CO</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Monóxido de carbono</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Reduz a quantidade de oxigênio no sangue; perigoso em ambientes fechados.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>NO</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Monóxido de nitrogênio</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Gás precursor de poluentes como o NO₂.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>NO₂</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Dióxido de nitrogênio</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Irritante respiratório; causa problemas pulmonares.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>O₃</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Ozônio</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Prejudicial em baixas altitudes; irrita olhos e pulmões.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>SO₂</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Dióxido de enxofre</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Irrita as vias respiratórias; causa chuva ácida.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>PM2.5</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Partículas finas</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Penetram nos pulmões e corrente sanguínea; muito perigosas.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>PM10</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Partículas inaláveis</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Irritam olhos, nariz e garganta.</td>
                                </tr>
                                <tr>
                                    <td style={{ border: '1px solid black', padding: '6px' }}><strong>NH₃</strong></td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Amônia</td>
                                    <td style={{ border: '1px solid black', padding: '6px' }}>Pode causar irritações e problemas respiratórios.</td>
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