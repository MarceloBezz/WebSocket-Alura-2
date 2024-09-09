import "dotenv/config";
import io from "./servidor.js";
import registrarEventosInicio from "./registrarEventos/Inicio.js";
import registrarEventosDocumento from "./registrarEventos/Documento.js";
import registrarEventosCadastro from "./registrarEventos/Cadastro.js";
import registrarEventosLogin from "./registrarEventos/Login.js";
import autorizarUsuario from "./middlewares/autorizarUsuario.js";

const nspUsuarios = io.of("/usuarios")

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on("connection", (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumento(socket, nspUsuarios);
})

io.of("/").on("connection", (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
