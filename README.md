![react native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![javascript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white) ![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Android](https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white) ![IOS](https://img.shields.io/badge/iOS-000000?style=for-the-badge&logo=ios&logoColor=white) ![MIT](https://img.shields.io/github/license/Ileriayo/markdown-badges?style=for-the-badge)

# :partly_sunny:

# React Native Weather App :sunny: :cloud: :snowflake:

<p float="left">
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029167106171011/home_day_1.png" />
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029168779698246/home_night_1.png" />
</p>

- [React Native Weather App](#rn-weather-app)
  - [Descrição](#descricao)
  - [Funcionalidades](#funcionalidades)
    - [Geolocalização](#geolocalizacao)
    - [Clima](#clima)
    - [Tematização](#tematização)
    - [Tratamento de exceções exibidas em tela](#tratamento-de-excecoes-exibidas-em-tela)
  - [Instruções para instalação](#instrucoes-para-instalacao)
  - [Como executar o projeto](#como-executar-o-projeto)
  - [Executando os testes da aplicação](#executando-os-testes-da-aplicacao)
  - [Principais bibliotecas utilizadas](#principais-bibliotecas-utilizadas)
  - [Sobre as decisões tomadas](#sobre-as-decisoes-tomadas)

#### Descrição

###### Aplicativo que exibe os dados de clima baseado na localização atual do usuário.

---

## Funcionalidades

### Geolocalização

Todas as funcionalidades do App são baseadas na geolocalização do usuário (caso o usuário permita que o App tenha acesso aos dados). Como por exemplo: baseado na localização atual, além de exibir os dados de clima o App também exibe os dados relacionados á cidade de onde o usuário está acessando atualmente, assim como dados relacionados á data atual.

### Clima

Diversos dados são exibidos em tela para que o usuário tenha diferentes tipos de informação em relação ao clima.

<img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995049539725709465/end2end.gif" />

- Clima atual
<p float="left">
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029167106171011/home_day_1.png" />
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029168779698246/home_night_1.png" />
</p>
- Clima nas próximas horas
- Clima nos próximos dias da semana
<p float="left">
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029167412346880/home_day_2.png" />
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029169383682159/home_night_2.png" />
</p>
- Dados em relação a sensação térmica, umidade relativa do ar, pressão e velocidade do vento;
<p float="left">
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029167777267842/home_day_3.png" />
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029169870229585/home_night_3.png" />
</p>
Vale destacar também que no cabeçalho do App possui um botão de Refresh, portanto caso o usuário queira recarregar os dados exibidos, basta pressionar o botão e aguardar para que a requisição seja realizada.

### Tematização

O tema atual do app (dia ou noite) é definido á partir dos dados resgatados da API de Clima. Portanto, se a API retorna que no momento é dia, o app se comporta com determinadas cores e ícones, caso retorn que é noite, o comportamento do tema é outro.

### Tratamento de exceções exibidas em tela

O App também possui um componente específico para exibir ao usuário um possível erro ao tentar resgatar os dados do clima, seja ele relacionado á localização e/ou internet.

<p float="left">
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029168389632231/home_day_error_network.png" />
  <img width="300" src="https://cdn.discordapp.com/attachments/727585262653145129/995029170260279416/home_night_error_location.png" />
</p>

---

## Instruções para instalação

### Ambiente de Desenvolvimento

Por gentileza, siga as intruções descritas na [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup) para preparar seu ambiente de desenvolvimento.

### Clonando o projeto

```
git clone https://github.com/Leosampc/rn-weather-app.git
```

### Acessando a pasta do projeto

```
cd rn-weather-app
```

### Instalando as dependências

> **Atenção**: O projeto foi configurado utilizando o Yarn (v1.22.17) e as versões dependências estão fixas no arquivo `yarn.lock`.

Para instalar as dependências utilize o comando:

```
yarn
```

Caso você pretenda executar o projeto através de um **MacOS**, você precisa rodar um dos seguintes comandos:

```
cd ios/ && pod install && cd ..
```

ou

```
npx pod-install
```

---

## Como executar o projeto

Após abrir o emulador ou conectar seu dispositivo via USB, execute o seguinte comando via terminal:

**Android**

```
yarn android
```

**iOS**

```
yarn ios
```

---

## Executando os testes da aplicação

```
yarn jest
```

---

## Principais bibliotecas utilizadas

- [React Native](https://reactnative.dev): versão 0.68.2
- [React Redux](https://react-redux.js.org)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [React Navigation](https://reactnavigation.org)
- [react-native-geolocation-service](https://github.com/Agontuk/react-native-geolocation-service)
- [Axios](https://axios-http.com)
- [Styled Components](https://styled-components.com)
- [Jest](https://jestjs.io)
- [React Native Testing Library](https://callstack.github.io/react-native-testing-library/)
- [babel-plugin-root-import](https://www.npmjs.com/package/babel-plugin-root-import)

---

## Sobre as decisões tomadas

**Porque usar Redux/Redux-Toolkit em um projeto tão pequeno?**

Decidi implementar Redux e Redux Toolkit para demonstrar a abordagem que eu escolheria caso estivésse criando uma aplicação do mundo real.

Sinto que devo citar que em projetos menores, a própria Context API supriria basicamente todas as necessidades de compartilhamento de estado, inclusive nesse projeto.

---

### Feedback

Todo e qualquer feedback é sempre bem vindo, esteja á vontade! :smile:
