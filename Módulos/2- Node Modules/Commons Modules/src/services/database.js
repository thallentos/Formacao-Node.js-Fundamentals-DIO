exports.connectToDatabase = async (dataBaseName) => {
  console.log(`Conectando-se ao banco: ${dataBaseName}`);
};

exports.disconnectToDatabase = async (dataBaseName) => {
  console.log(`Desconectando-se do banco: ${dataBaseName}`);
};
