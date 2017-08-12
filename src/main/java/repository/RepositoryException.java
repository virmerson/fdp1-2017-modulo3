package repository;

import java.sql.SQLException;

public class RepositoryException extends Exception {

	public RepositoryException(Exception e) {
		
			super(e);
	}

}
