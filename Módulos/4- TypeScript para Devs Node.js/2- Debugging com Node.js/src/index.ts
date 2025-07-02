import { getBaseEmail } from "./services/email";

async function main() {
  console.log(await getBaseEmail("Thalles"));

  console.log("finalizado!");
  console.log("...");
}

main();