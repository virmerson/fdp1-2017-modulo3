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
import repository.UsuarioRepository;

@WebServlet(urlPatterns = { "/usucontroller", "/usuariocontroller" })
public class UsuarioController extends HttpServlet {

	private UsuarioRepository usuRepository = new UsuarioRepository();
	
	
	@Override
	public void init() throws ServletException {
		Usuario u1 = new Usuario();
		u1.setNome("Jao");

		Usuario u2 = new Usuario();
		u2.setNome("Zé");

		Usuario u3 = new Usuario();
		u3.setNome("Maria");

		usuRepository.cadastrar(u1);
		usuRepository.cadastrar(u2);
		usuRepository.cadastrar(u3);

		super.init();
	}

	// Métodos HTTP

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		// leitura
		String nome = req.getParameter("nome");
		String senha = req.getParameter("senha");

		// instancia do objeto, seta os dados lidos
		Usuario usuario = new Usuario();
		usuario.setNome(nome);
		usuario.setSenha(senha);

		// Gravar

		usuRepository.cadastrar(usuario);

		// Resposta
		resp.getWriter().println("Requisicao pelo POST: " + nome + " " + senha);
	}


	
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		List<Usuario> lista = usuRepository.buscarTodos();
		String json ="[";
		
		for (int i=0; i<lista.size(); i++){
			Usuario usu = lista.get(i);
			
			json +="{   \"nome\"   :\"" + usu.getNome() +    "\" ,  \"senha\":\"123\"  }";
			
			if (i<lista.size()-1){
				json+= ",";
			}	
		}
		
		json +="]";
		
		resp.getWriter().println(json);
	}

	@Override
	protected void doPut(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		int indice = Integer.parseInt(req.getParameter("indice"));
		
		String nome =  req.getParameter("nome");
		String senha =  req.getParameter("senha");
		
		Usuario usu = new Usuario();
		usu.setNome(nome);
		usu.setSenha(senha);
		
		usuRepository.alterar(indice, usu);
		
	}

	@Override
	protected void doDelete(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		int indice = Integer.parseInt(req.getParameter("indice"));
		try {
			usuRepository.excluir(indice);
		} catch (Exception e) {
			throw new ServletException("Não pode excluir!");
		}

	}

}
