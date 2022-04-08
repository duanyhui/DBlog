package atri.wiki.service;

import atri.wiki.entity.User;

public interface UserService {
	User findUserByUsernameAndPassword(String username, String password);

	User findUserById(Long id);
}
