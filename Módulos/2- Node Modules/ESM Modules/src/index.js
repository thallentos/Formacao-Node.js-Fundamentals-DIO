//Faço do jeito abaixo caso eu queira exportar mais de uma coisa
import * as database from "./utils/database.js";

//Faço do jeito abaixo caso eu queira importar só uma coisa
// import connectToDatabase from "./utils/database.js";

database.connectToDatabase("thallentos-database");
database.disconnectToDatabase("thallentos-database");
