// importando usando {função desejada}. Assim, não preciso importar todas as funções
const {getFullName} = require("./services/products");

// importando usando module.exports
const config = require("./services/config");
const databse = require("./services/database");

async function main() {
  console.log("Carrinho de compras");
  //   getFullName("408", "mousepad");
  //   console.log(config.production);
  databse.connectToDatabase("thallentos");
}

main();
