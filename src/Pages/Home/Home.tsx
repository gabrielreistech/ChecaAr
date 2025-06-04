import {useEffect, useState } from "react";
import styles from "./Home.module.css";
import axios from "axios";
import TelaDeInformacoes from "../../Components/TelaDeInformacoes/TelaDeInformacoes";
import TelaDeErro from "../../Components/TelaDeErro/TelaDeErro";
import DetalhesDosDados from "../../Components/DetalhesDosDados/DetalhesDosDados";
import Carregando from "../../Components/Carregando/carregando";

const Home = () => {

  const [cep, setCep] = useState<string>('');
  const [cidade, setCidade] = useState<string>('');
  const [rua, setRua] = useState<string>('');
  const [longitude, setLongitude] = useState<number>(-1);
  const [latitude, setLatitude] = useState<number>(-1);
  const [informacoes, setInformacoes] = useState<boolean>(false);
  const [erro, setErro] = useState<string>('');
  const [buscar, setBuscar] = useState<boolean>(false);
  const [poluicao, setPoluicao] = useState<string>('');
  const [componentePoluicao, setComponentPoluicao] = useState<{ name: string; value: string }[]>([]);
  const [nivelAqi, setNivelAqi] = useState<number>(0);
  const [effectPoluicao, setEffectPoluicao] = useState<boolean>(false);
  const [carregando, setCarregando] = useState<boolean>(false);

  const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

  useEffect(() =>{
    setCarregando(true);
    setTimeout(() =>{
      setCarregando(false);
    }, 2500);
  }, [])

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCep(e.target.value);
  }

  const handleInformacoes = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const cepLimpo = cep.replace("-", "");

    if (cepLimpo.length === 8) {
      setErro('');
      setBuscar(true);
    } else {
      setErro("CEP inválido!");
      setInformacoes(false);
    }
  }

  //useEffect para buscar requisição do Cep
  useEffect(() => {
    if (buscar && longitude === -1 && latitude === -1) {

      axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`, {
        headers: {
          'Cache-Control': 'no-cache',
          'Pragma': 'no-cache',
          'Expires': '0',
        }
      })
        .then((response) => {
          setCidade(response.data.city);
          setRua(response.data.street);
          const lon = response.data.location.coordinates.longitude;
          const lat = response.data.location.coordinates.latitude;
          if ((lon === -1 && lat === -1) || (lon === 0 && lat === 0) || (lon === undefined && lat === undefined)) {
            console.log(lat);
            console.log(lon);
            setInformacoes(false);
            setErro("Latitude e Longitude não fornceidos pela API de CEP, tente outro.");
          } else {
            setLongitude(lon);
            setLatitude(lat);
            setErro('');
            setInformacoes(true);
            setEffectPoluicao(true);
          }
        })
        .catch((error) => {
          setInformacoes(false);
          setErro("CEP não encontrado ou houve um erro na busca.");
          console.log(error);
        })
        .finally(() => {
          setBuscar(false);
        });
    }
  }, [buscar, cep]);

  // Segundo useEffect - Requisição de Poluição do Ar
  useEffect(() => {
    if (effectPoluicao && latitude != -1 && longitude != -1 && latitude != 0 && longitude != 0) {
      console.log(latitude);
      console.log(longitude);
      setPoluicao('');
      setComponentPoluicao([]);

      setNivelAqi(0);
      setPoluicao('');
      setComponentPoluicao([]);

      axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then((pollutionResponse) => {
          const aqi = pollutionResponse.data.list[0].main.aqi;
          console.log(pollutionResponse.data);
          const componentes = pollutionResponse.data.list[0].components;
          setNivelAqi(aqi);

          let qualidadeDoAr = '';
          const descricaoPoluicao = [
            { name: 'CO', value: componentes.co.toFixed(2) },
            { name: 'NO', value: componentes.no.toFixed(2) },
            { name: 'NO2', value: componentes.no2.toFixed(2) },
            { name: 'O3', value: componentes.o3.toFixed(2) },
            { name: 'SO2', value: componentes.so2.toFixed(2) },
            { name: 'NH3', value: componentes.nh3.toFixed(2) },
            { name: 'PM2.5', value: componentes.pm2_5.toFixed(2) },
            { name: 'PM10', value: componentes.pm10.toFixed(2) },
          ];

          switch (aqi) {
            case 1:
              qualidadeDoAr = 'Boa qualidade do ar';
              break;
            case 2:
              qualidadeDoAr = 'Qualidade do ar regular';
              break;
            case 3:
              qualidadeDoAr = 'Qualidade do ar moderada';
              break;
            case 4:
              qualidadeDoAr = 'Qualidade do ar ruim';
              break;
            case 5:
              qualidadeDoAr = 'Qualidade do ar muito ruim';
              break;
            default:
              qualidadeDoAr = 'Dados de qualidade do ar não disponíveis';
          }

          setPoluicao(qualidadeDoAr);
          setComponentPoluicao(descricaoPoluicao);
        })
        .catch((pollutionError) => {
          console.error(pollutionError);
        })
        .finally(() => {
          setLatitude(-1);
          setLongitude(-1);
          setEffectPoluicao(false);
        });
    }
  }, [effectPoluicao, latitude, longitude]);

  return (
    carregando ? (
      <Carregando />
    ):(
    <div className={styles.containerExterno}>
      <h1 className={styles.titulo}>Seja muito bem-vindo(a) ao ChecaAr</h1>
      <div className={styles.containerInterno}>
        <h2 className={styles.tituloInput}>Digite seu CEP <br /> para checar a qualidade do ar na sua região</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <input value={cep} className={styles.input} type="text"
            placeholder="Digite seu CEP"
            onChange={handleChange}
          />
          <button onClick={handleInformacoes} className={styles.botao} type="button">Pesquisar</button>
        </form>
      </div>
      {informacoes &&
        <>
          <TelaDeInformacoes cidade={cidade} rua={rua} aqi={nivelAqi} poluicao={poluicao} componentePoluicao={componentePoluicao}
          />
          <DetalhesDosDados />
        </>
      }
      {erro.length > 0 &&
        <TelaDeErro erro={erro} />
      }
    </div>
    )
  );
}

export default Home;