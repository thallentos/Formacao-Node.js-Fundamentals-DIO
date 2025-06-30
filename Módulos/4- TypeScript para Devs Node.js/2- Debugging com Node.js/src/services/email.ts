async function getBaseEmail(senderName: string): Promise<string> {
  let base = `Olá ${senderName}, gostaria de me inscrever para uma vaga`;

  base += "\n estpu deixando o meu currículo";

  return base;
}

export { getBaseEmail };
