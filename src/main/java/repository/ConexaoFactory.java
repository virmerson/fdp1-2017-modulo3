package repository;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoFactory {
	
	private static Connection conexao = null;

	public static Connection criarConexao() {
		
		
		try {
			
			Class.forName("org.postgresql.Driver");
			//Singleton
			if (conexao==null){
				conexao = DriverManager.getConnection("jdbc:postgresql://localhost:5432/curso_javaweb1_db","postgres","postgres");
			}
			return conexao;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
