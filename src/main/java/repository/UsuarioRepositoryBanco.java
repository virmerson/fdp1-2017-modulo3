package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.util.List;

import model.Usuario;

public class UsuarioRepositoryBanco implements UsuarioRepository {
	
		Connection conexao =  ConexaoFactory.criarConexao();
		
		public void cadastrar(Usuario usuario) {
			
			try {
				PreparedStatement preparadorSQL = conexao.prepareStatement("insert into usuario (nome, senha) values (?,?)");
				preparadorSQL.setString(1, usuario.getNome());
				preparadorSQL.setString(2, usuario.getSenha());
				
				preparadorSQL.execute();
				preparadorSQL.close();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		
		}
		
		public void alterar(int indice, Usuario usuario){
			
				//Para vetor
		}
		
		public void alterar(Usuario usuario){
			
			PreparedStatement preparadorSQL;
			try {
				preparadorSQL = conexao.prepareStatement("update usuario set nome=?, senha=? where id=?");
				preparadorSQL.setString(1, usuario.getNome());
				preparadorSQL.setString(2, usuario.getSenha());
				preparadorSQL.setInt(3, usuario.getId());
				preparadorSQL.execute();
				preparadorSQL.close();
				
			
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			
		}



		public void excluir(int indice) {
		}

		public List<Usuario> buscarTodos() {
			return null;
		}

}
