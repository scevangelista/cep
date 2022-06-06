## Documentação da API CEP -> Estado
Endpoints disponíveis para o módulo de Estado

<br />

### Lista Estados 

  Retorna dados em json com uma lista de todos estados cadastrados

* **URL**

  /api/{version}/states

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{"code":12,"country_code":1058,"name":"Acre","initials":"AC"}, {"code":13,"country_code":1058,"name":"Amazonas","initials":"AM"},...]`

    code: {Código IBGE do Estado}<br />
    country_code: {Código IBGE do País}<br />
    name: {Nome do Estado}<br />
    initials: {Sigla do Estado}
 
 
##
### Lista Estados de um País

  Retorna dados em json com uma lista de todos Estados cadastrados de um País

* **URL**

  /api/{version}/states/country/:code

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Parâmetros da URL:**

  **Obrigatório:**

   `code=[integer]` Código do País

* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{"code":12,"country_code":1058,"name":"Acre","initials":"AC"}, {"code":13,"country_code":1058,"name":"Amazonas","initials":"AM"},...]`

    code: {Código IBGE do Estado}<br />
    country_code: {Código IBGE do País}<br />
    name: {Nome do Estado}<br />
    initials: {Sigla do Estado}
 
 
##
### Mostra Estado

  Retorna dados em json de um único Estado

* **URL**

  /api/{version}/states/:code

* **Version:**

  v1

* **Método:**

  `GET`
  
* **Parâmetros da URL:**

  **Obrigatório:**

   `code=[integer]` Código do Estado

* **Sucesso:**

  * **Code:** 200 <br />
    **Content:** `[{"code":12,"country_code":1058,"name":"Acre","initials":"AC"}]`

    code: {Código IBGE do Estado}<br />
    country_code: {Código IBGE do País}<br />
    name: {Nome do Estado}<br />
    initials: {Sigla do Estado}
 