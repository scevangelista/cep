## CEP - Cidade, Estado e País
### :gear: Em desenvolvimento :gear:

Microserviço para consulta de Cidades e Estados do Brasil. 
Projeto desenvolvido com o intuito de centralizar as informações de nomes e códigos de cidades brasileiras em sistemas distribuídos, garantindo integridade em cadastros que utilizam cidades e/ou estados.

**Este projeto usa: NodeJS, Express e banco de dados MySQL.**


##
### Executando :electric_plug:  

**Requerimentos**
- Docker e docker-compose

**Instruções para executar:**
- Primeiro, clone o repositório para um diretório de sua preferencia:
```
$ git clone https://github.com/scevangelista/CEP.git
```

- Segundo, execute o docker-compose build para o projeto baixar as dependências
```
$ cd CEP
$ docker-compose build
```

- Por último, execute o docker-compose start para iniciar os containers de banco de dados e da aplicação
```
$ docker-compose start
```

- Acesse a API pela porta 3500
http://ip_of_docker_server:3500

##
### Documentação da API :books:

[Acessar Documentação](https://github.com/scevangelista/CEP/tree/main/docs)

##
### Changelog: :clipboard:

**1.0.0** (2022-06-06)
- Initial Version