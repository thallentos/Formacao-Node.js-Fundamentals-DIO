async function connectToDatabase(user, password) {
  if (
    user === process.env.USERDATABASE &&
    password === process.env.PASSWORDDATABASE
  ) {
    console.log("Conectado ao banco de dados");
  } else {
    console.log("Erro ao conectar ao banco de dados");
  }
}

export default connectToDatabase;
