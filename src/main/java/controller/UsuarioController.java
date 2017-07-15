package controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import model.Usuario;

@WebServlet(urlPatterns={"/usucontroller", "/usuariocontroller"})
public class UsuarioController extends HttpServlet {

	//GERENCIADOR LISTA
	private List<Usuario> usuarios = new ArrayList<>();
	
	public void cadastrar(Usuario usuario){
			usuarios.add(usuario);
	}
	
	
	public void excluir(Usuario usuario){
		usuarios.remove(usuario);
	}
	
	
	//Métodos HTTP
	
	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		//leitura
		String nome = req.getParameter("nome");
		String senha = req.getParameter("senha");
		
		//instancia do objeto, seta os dados lidos
		Usuario usuario  = new Usuario();
		usuario.setNome(nome);
		usuario.setSenha(senha);

		//Gravar
		
		cadastrar(usuario);
		
		//Resposta
		resp.getWriter().println("Requisicao pelo POST: "+ nome + " "+ senha);
	}
	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.getWriter().println("Requisicao pelo GET");
	}
	
	
	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		resp.getWriter().println("Requisicao pelo PUT");
	}
	
	
	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		
		
		resp.getWriter().println("Requisicao pelo DELETE");
	}
	
}
