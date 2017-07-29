package repository;

import java.util.List;

import model.Usuario;

public interface UsuarioRepository {
	public void cadastrar(Usuario usuario) ;
	
	public void alterar(int indice, Usuario usuario);

	public void excluir(int indice) ;
	
	public List<Usuario> buscarTodos() ;
}
