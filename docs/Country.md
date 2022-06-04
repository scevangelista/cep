## API Documentation
All documentation of API calls about Country module

**Show Countries**
----
  Returns json data about all countries in database.

* **URL**

  /api/{version}/countries

* **Version:**

  v1

* **Method:**

  `GET`
  
*  **URL Params**

  None

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ code: 1058, name: "Brasil" }]`

    code: {IBGE Code}
    name: {Country Name}
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : true }`

* **Sample Call:**

  ```javascript
    $.ajax({
      url: "/api/v1/countries",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```