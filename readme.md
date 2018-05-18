```
# install express generator globally
npm install -g express-generator

mkdir sample_folder
cd sample_folder
express -f
npm install
```
install sequelize
```
npm install --save sequelize sequelize-cli sqlite3
```

create models (models are a JS representation of your database table)
You interact with the database through the model using sequelize as the translation layer

```
node_modules/.bin/sequelize init
node_modules/.bin/sequelize model:create --name Schedule --attributes team_home:string,team_away:string,event_date:date
node_modules/.bin/sequelize model:create --name User --attributes username:string
```
create .sequelizerc for config settings
```
// .sequelizerc
const path = require('path');

module.exports = {
  'config': path.resolve('config', 'config.js')
}
```
wrap the below code with the sequelize syncronizer

```
server.listen(port);
server.on('error',onError)
sever.on('listening', onListening)
```

becomes

```
models.sequelize.sync().then(function () {
  server.listen(port);
  server.on('error', onError);
  server.on('listening', onListening);
});
```
Adjust config.js in the config folder to suit your purpose
sample

```
module.exports = 
{
  "development": {
    "storage": "./db.development.sqlite",
    "dialect": "sqlite"
  },
  "test": {
    "storage": "./db.development.sqlite",
    "dialect": "sqlite"
  },
  "production": {
    "storage": "./db.development.sqlite",
    "dialect": "sqlite"
  }
}
```
