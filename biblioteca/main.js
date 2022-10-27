const bibliotecaPersistence = require('./biblioteca_presistencia/biblioteca_presistencia')
//const produtoNegocio = require('./negocio/biblioteca_negocio')



async function main() {
  // INSERINDO CLIENTES
     const Clienteinserido = await bibliotecaPersistence.inserircliente({id_cliente: 3, nome_cliente: "vivi",matricula: "676599", telefone:" 096478"})
     console.log("Produto Inserido", Clienteinserido);

  // LISTANDO CLIENTES
     const listarclientes = await bibliotecaPersistence.listarcliente();
     console.log("Lista de Clientes",listarclientes);

  // BUSCANDO POR ID DE CLIENTES
     const cliente1 = await bibliotecaPersistence.buscarPorIdCliente({id_cliente: 1});
     console.log("cliente 1", cliente1);
  // DELETANDO CLIENTES
     const clienteDeletado = await bibliotecaPersistence.deletarCliente({id_cliente: 3});
     console.log("Produto deletado", clienteDeletado);
}
main();