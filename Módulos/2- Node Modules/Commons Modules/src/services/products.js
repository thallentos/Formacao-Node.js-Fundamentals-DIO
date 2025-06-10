//todas as funções que lidam com o produto
async function getFullName(codeId, productName) {
  await doBreakLine();
  console.log(`Product ${codeId} -- ${productName}`);
}

// hidden (escondido) function, porque eu não a estou exportando
async function doBreakLine() {
  console.log("\n");
}

async function getProductLabel(productName) {
  console.log(`Product: ${productName}`);
}

module.exports = {
  getFullName,
  getProductLabel,
};
