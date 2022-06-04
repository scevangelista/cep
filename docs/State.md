## API Documentation

All documentation of API calls about State module

##

**Show States**

  Returns json data about all states in database.

* **URL**

  /api/{version}/states

* **Version:**

  v1

* **Method:**

  `GET`
  
* **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ code: 12, country: 1058, name: "Acre" },{ code: 27, country: 1058, name: "Alagoas" },...]`

    code: {IBGE State code}<br />
    country_code: {IBGE Country code of State}<br />
    name: {State name}<br />
    initials: {State prefix}
 
 
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/states",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

##

**Show States of Country code**

  Returns json data about all states of Country code in database.

* **URL**

  /api/{version}/states/country/:code

* **Version:**

  v1

* **Method:**

  `GET`
  
* **URL Params**

  **Required:**

   `code=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ code: 12, country: 1058, name: "Acre" },{ code: 27, country: 1058, name: "Alagoas" },...]`

    code: {IBGE State code}<br />
    country_code: {IBGE Country code of State}<br />
    name: {State name}<br />
    initials: {State prefix}
 
 
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/states/country/1058",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```

##

**Show State**

  Returns json data about single State.

* **URL**

  /api/{version}/states/:code

* **Version:**

  v1

* **Method:**

  `GET`
  
* **URL Params**

  **Required:**

   `code=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ code: 12, country: 1058, name: "Acre" }]`

    code: {IBGE State code}<br />
    country_code: {IBGE Country code of State}<br />
    name: {State name}<br />
    initials: {State prefix}
 
 
* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/states/12",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```