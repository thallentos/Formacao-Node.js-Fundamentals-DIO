# Inicializa um projeto Node.js

npm init -y

# Cria a pasta src

mkdir src

# Cria o arquivo inicial

echo 'console.log("hello world");' > src\dado.ts

# Instala as dependências

npm i typescript tsx tsup

# Cria o arquivo tsconfig

npx tsc --init

# Configurações padrões a se colocar no tsconfig.json

"compilerOptions": {
"target": "ES6",
"module": "CommonJS",
"outDir": "./dist",
"strict": true,
"esModuleInterop": true
}

# Scripts padrões

"scripts": {
"dist": "tsup src",
"start:dev": "tsx src/index.ts",
"start:watch": "tsx watch src/index.ts",
"start:dist": "npm run dist && node dist/index.js"
},
