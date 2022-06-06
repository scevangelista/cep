## Documentação da API CEP -> País
Endpoints disponíveis para o módulo de País

<br />

### Lista Países 

  Retorna dados em json com uma lista de todos países cadastrados

* **URL**

  /api/{version}/countries

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{ code: 1058, name: "Brasil", initials: "BR" }]`

    code: {Código IBGE do País}<br />
    name: {Nome do País}<br />
    initials: {Sigla do País}

##
### Mostra País

  Retorna dados em json de um único País

* **URL**

  /api/{version}/countries/:code

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Parâmetros da URL:**

  **Obrigatório:**

   `code=[integer]` Código do País

* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{ code: 1058, name: "Brasil", initials: "BR" }]`

    code: {Código IBGE do País}<br />
    name: {Nome do País}<br />
    initials: {Sigla do País}