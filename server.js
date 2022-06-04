const express = require('express');

const app = express();
const port = 3500;

const countryRoutes = require('./src/routes/country.routes')
const stateRoutes = require('./src/routes/state.routes')
const cityRoutes = require('./src/routes/city.routes')

app.get('/api/v1/test', (req, res) => res.send('CEP - API'))
app.use('/api/v1/countries', countryRoutes)
app.use('/api/v1/states', stateRoutes)
app.use('/api/v1/cities', cityRoutes)


app.listen(port, () => {
  console.log("Server started in port " + port);
});