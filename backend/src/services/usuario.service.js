export function buscarUsuarios(){
  const usuarios = [
    {
      id: 1,
      nome: "Aguinaldo Jose ",
      email: "aguinaldoarnaldo@gmail.com",
    },
    {
      id: 2,
      nome: "Joaquim Arnaldo",
      email: "joaquim@gmail.com",
    },
    {
      id: 3,
      nome: "Gilmar Arnaldo",
      email: "gilmararnaldo@gmail.com",
    },
  ];
  return usuarios;
};

export function buscarUsuarioPorId(id) {
  //primeiro buscamos todos os usuarios
  const usuarios = buscarUsuarios();

  //Procuramos no array os usuario que possui o id recebido
  const usuario = usuarios.find((usuario)=> usuario.id === id)

  //retornamos o usuario encontrado
  return usuario;
}

