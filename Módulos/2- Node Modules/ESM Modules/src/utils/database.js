async function connectToDatabase(dataBaseName) {
  console.log(`Conectado ao banco de dados: ${dataBaseName}`);
}

async function disconnectToDatabase(dataBaseName) {
  console.log(`Desconectando do banco de dados: ${dataBaseName}`);
}

//Faço do jeito abaixo caso eu queira exportar mais de uma coisa
export { connectToDatabase, disconnectToDatabase };

//Faço do jeito abaixo caso eu queira exportar só uma coisa
// export default connectToDatabase;
