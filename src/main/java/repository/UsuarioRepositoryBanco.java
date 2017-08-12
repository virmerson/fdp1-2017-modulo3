package repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import model.Usuario;

public class UsuarioRepositoryBanco implements UsuarioRepository {
	
		Connection conexao =  ConexaoFactory.criarConexao();
		
		public void cadastrar(Usuario usuario) throws RepositoryException {
			
			try {
				PreparedStatement preparadorSQL = conexao.prepareStatement("insert into usuario (nome, senha) values (?,?)");
				preparadorSQL.setString(1, usuario.getNome());
				preparadorSQL.setString(2, usuario.getSenha());
				
				preparadorSQL.execute();
				preparadorSQL.close();
				
			} catch (SQLException e) {
				throw new RepositoryException(e);
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



		public void excluir(int id) {
			
			PreparedStatement preparadorSQL;
			try {
				preparadorSQL = conexao.prepareStatement("delete from usuario where id=?");
				
				preparadorSQL.setInt(1, id);
				preparadorSQL.execute();
				preparadorSQL.close();
				
			
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}

		public List<Usuario> buscarTodos() {
	
			List<Usuario> usuarios =  new ArrayList<>();
			
			PreparedStatement preparadorSQL;
			try {
				preparadorSQL = conexao.prepareStatement("select * from usuario");
			
				ResultSet resultSet = preparadorSQL.executeQuery();
			
				while (resultSet.next()){
					
					Usuario usuario = new Usuario();
					usuario.setId( resultSet.getInt("id")  );
					usuario.setNome(resultSet.getString("nome"));
					usuario.setSenha(resultSet.getString("senha"));
					
					usuarios.add(usuario);
					
				}
				
				preparadorSQL.close();
				
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			return usuarios;
		}

}
