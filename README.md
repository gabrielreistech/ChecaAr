# ChecaAr - Monitoramento de Qualidade do Ar

**ChecaAr** é um projeto desenvolvido em **TypeScript** e **Vite** que permite consultar a qualidade do ar de uma localidade com base no **CEP** fornecido. O projeto utiliza a **Brasil API CEPv2** para obter os dados de localização (cidade, rua, latitude e longitude) e, em seguida, usa a API **OpenWeather** para consultar o índice de poluição do ar (AQI - Air Quality Index) com base nas coordenadas geográficas obtidas.

## Como funciona

 1. **Consulta de CEP**: O usuário insere um **CEP** válido.
2. **Obtenção de coordenadas**: Através da **Brasil API CEPv2**, o sistema busca os dados de latitude e longitude.
3. **Consulta de poluição do ar**: Com as coordenadas geográficas, o sistema consulta a API **OpenWeather** para obter informações sobre a qualidade do ar, incluindo o índice de poluição (AQI) e os níveis de vários poluentes (CO, NO, NO2, O3, SO2, PM2.5, PM10, NH3).

## Tecnologias usadas

- **TypeScript**: Para garantir um código robusto e tipado.
- **React**: Para construção da interface do usuário.
- **Vite**: Para bundling e otimização do desenvolvimento.
- **Axios**: Para realizar as requisições HTTP às APIs.
- **Brasil API CEPv2**: Para buscar dados de CEPs brasileiros.
- **OpenWeather API**: Para obter dados de poluição do ar com base na latitude e longitude.

## Acesse o projeto

O projeto já está disponível para uso! Você pode acessá-lo no seguinte link de deploy:

[**ChecaAr - Monitoramento de Qualidade do Ar**](https://checa-ar.vercel.app/)
