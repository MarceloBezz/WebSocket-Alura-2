import { MongoClient } from "mongodb";


const cliente = new MongoClient(
  process.env.DB_CONNECTION_STRING
);

let documentosColecao;
let usuariosColecao;

try {
  await cliente.connect();

  const db = cliente.db(process.env.DATABASE_NAME);
  documentosColecao = db.collection("documentos");
  usuariosColecao = db.collection("usuarios")

  console.log("Conectado ao banco de dados com sucesso!");
} catch (erro) {
  console.log(erro);
}

export { documentosColecao, usuariosColecao };
