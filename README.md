## CEP - Cidade, Estado e País
### :gear: Versão Beta :gear:

Microserviço para consulta de Cidades e Estados do Brasil. 
Projeto desenvolvido com o intuito de centralizar as informações de nomes e códigos de cidades brasileiras em sistemas distribuídos, garantindo integridade em cadastros que utilizam cidades e/ou estados.

**Este projeto usa: NodeJS, Express e banco de dados MySQL.**


##
### Executando :electric_plug:  

**Requerimentos**
- Docker e docker-compose

**Instruções para executar:**
- Primeiro, clone o repositório para um diretório de sua preferência:
```
$ git clone https://github.com/scevangelista/CEP.git
```

- Segundo, execute o docker-compose build para o docker gerar a imagem e baixar as dependências
```
$ cd CEP
$ docker-compose build
```

- Por último, execute o docker-compose start para iniciar o container de banco de dados e o de aplicação
```
$ docker-compose start
```

- Acesse a API pela porta 3500
http://ip_of_docker_server:3500

##
### Documentação da API :books:

[Acessar Documentação](https://github.com/scevangelista/CEP/tree/main/docs)

##
### Exemplos de uso: :rocket:

[Classe PHP](https://github.com/scevangelista/CEP-Cliente-PHP)  
[Harbour](https://github.com/scevangelista/CEP-Cliente-xHarbour)

##
### Changelog: :clipboard:

**1.0.1** (2022-06-07)
- Correção no sql para criação do banco de dados
- Correção no docker-compose.yml - MySQL Charset

**1.0.0** (2022-06-06)
- Initial Version
