const { Client } = require('pg')
const { conexao } = require('./conexao')


// Função para listar Clientes
async function listarcliente() {
  const cliente = new Client(conexao)
  await cliente.connect();
  const res = await cliente.query('SELECT * FROM cliente');
  await cliente.end();
  return res.rows;
}
// Função para inserir Clientes
async function inserircliente(clientes) {
  const cliente = new Client(conexao)

  await cliente.connect();

  const res = await cliente.query('INSERT INTO cliente(id_cliente,nome_cliente,matricula,telefone) VALUES ($1,$2,$3,$4) RETURNING *', 
      [clientes.id_cliente, clientes.nome_cliente,clientes.matricula,clientes.telefone]);
  await cliente.end();
  return res.rows[0]
}
// Função para buscar por ID DE Clientes
async function buscarPorIdCliente(id) {
  const cliente = new Client(conexao)
  await cliente.connect();
  const res = await cliente.query('SELECT * FROM cliente WHERE id_cliente = $1',[id.id_cliente]);
  await cliente.end();
  return res.rows[0];
}

// Função para deletar clientes
async function deletarCliente(id) {
  const cliente = new Client(conexao)
  await cliente.connect();
  const res = await cliente.query('DELETE FROM cliente WHERE id_cliente = $1 RETURNING *',[id.id_cliente]);
  await cliente.end();
  return res.rows[0];
}



module.exports = {
  listarcliente,
  inserircliente,
  buscarPorIdCliente,
  deletarCliente,
}


