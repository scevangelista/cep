## Documentação da API CEP -> Cidade
Endpoints disponíveis para o módulo de Cidade

<br />

### Lista Cidades 

  Retorna dados em json com uma lista de todas cidades cadastradas

* **URL**

  /api/{version}/cities

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{"code":1100015,"state_code":11,"name":"Alta Floresta D'Oeste"},{"code":1100023,"state_code":11,"name":"Ariquemes"},...]`

    code: {Codígo do IBGE da Cidade}<br />
    state_code: {Codígo do IBGE do Estado}<br />
    name: {Nome da Cidade}
 
 
##
### Lista Cidades de um Estado

  Retorna dados em json com uma lista de todas Cidades cadastradas de um Estado

* **URL**

  /api/{version}/cities/state/:code

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Parâmetros da URL:**

  **Obrigatório:**

   `code=[integer]` Código do Estado

* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{"code":1100015,"state_code":11,"name":"Alta Floresta D'Oeste"},{"code":1100023,"state_code":11,"name":"Ariquemes"},...]`

    code: {Codígo do IBGE da Cidade}<br />
    state_code: {Codígo do IBGE do Estado}<br />
    name: {Nome da Cidade}
 
 
##
### Mostra Cidade

  Retorna dados em json de uma única Cidade

* **URL**

  /api/{version}/cities/:code

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Parâmetros da URL:**

  **Obrigatório:**

   `code=[integer]` Código da Cidade

* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{"code":2300101,"state_code":23,"name":"Abaiara"}]`

    code: {Codígo do IBGE da Cidade}<br />
    state_code: {Codígo do IBGE do Estado}<br />
    name: {Nome da Cidade}
 