//1- Faço do jeito abaixo caso eu queira exportar mais de uma coisa
// import * as database from "./utils/database.js";

// Chamo as funções desse jeito caso eu as chame do jeito acime
// database.connectToDatabase("thallentos-database");
// database.disconnectToDatabase("thallentos-database");

//2- Faço do jeito abaixo caso eu queira importar só uma coisa
// import connectToDatabase from "./utils/database.js";

// Chamo as funções desse jeito caso eu as chame do jeito acime
// connectToDatabase("thallentos-database");

//3- Faço do jeito abaixo caso eu queira exportar mais de uma coisa
import {connectToDatabase, disconnectToDatabase, databaseType} from "./utils/database.js";
import * as api from "./utils/api.js";

// Chamo as funções desse jeito caso eu as chame do jeito acime
connectToDatabase("thallentos-database");
api.getDataFromApi();
disconnectToDatabase("thallentos-database");
