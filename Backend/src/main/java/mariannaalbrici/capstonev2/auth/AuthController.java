package mariannaalbrici.capstonev2.auth;

import mariannaalbrici.capstonev2.auth.payloads.AuthenticationSuccessfulPayload;
import mariannaalbrici.capstonev2.entities.User;
import mariannaalbrici.capstonev2.exceptions.NotFoundException;
import mariannaalbrici.capstonev2.exceptions.UnauthorizedException;
import mariannaalbrici.capstonev2.payloads.UserLoginPayload;
import mariannaalbrici.capstonev2.payloads.UserPayload;
import mariannaalbrici.capstonev2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
public class AuthController {

	@Autowired
	UserService userService;

	@Autowired
	private PasswordEncoder bcrypt;

	@PostMapping("/register")
	public ResponseEntity<User> register(@RequestBody @Validated UserPayload body) {
		body.setPassword(bcrypt.encode(body.getPassword()));
		User createdGuest = userService.saveUser(body);
		return new ResponseEntity<>(createdGuest, HttpStatus.CREATED);
	}

	@PostMapping("/login")
	public ResponseEntity<AuthenticationSuccessfulPayload> login(@RequestBody UserLoginPayload body)
			throws NotFoundException {
		User user = userService.findByEmail(body.getEmail());

		String plainPW = body.getPassword();
		String hashedPW = user.getPassword();

		if (!bcrypt.matches(plainPW, hashedPW))
			throw new UnauthorizedException("Invalid credentials");

		String token = JWTTools.createUserToken(user);

		return new ResponseEntity<>(new AuthenticationSuccessfulPayload(token), HttpStatus.OK);
	}


}