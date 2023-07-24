package mariannaalbrici.capstonev2.google;

import mariannaalbrici.capstonev2.auth.JWTTools;
import mariannaalbrici.capstonev2.auth.payloads.AuthenticationSuccessfulPayload;
import mariannaalbrici.capstonev2.entities.User;
import mariannaalbrici.capstonev2.entities.enums.Role;
import mariannaalbrici.capstonev2.exceptions.NotFoundException;
import mariannaalbrici.capstonev2.google.payload.GoogleInfo;
import mariannaalbrici.capstonev2.google.payload.GoogleService;
import mariannaalbrici.capstonev2.payloads.UserPayload;
import mariannaalbrici.capstonev2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/google")
public class GoogleController {

    @Autowired
    private UserService userService;

    @Autowired
    private GoogleService googleService;

    @GetMapping("/callback")
    public ResponseEntity<AuthenticationSuccessfulPayload> googleCallback(@RequestParam("code") String authorizationCode) throws NotFoundException {
        // using auth code from Google to get the access token
        GoogleTokenPayload accessTokenResponse = googleService.getAccessToken(authorizationCode);
        String accessToken = accessTokenResponse.getAccess_token();

        // using access token to get user info
        GoogleInfo userInfoResponse = googleService.getUserInfo(accessToken);
        String email = userInfoResponse.getEmail();
        String firstname = userInfoResponse.getGiven_name();
        String lastname = userInfoResponse.getFamily_name();


        User user =  userService.findUserByEmail(email);
        if(user == null){
            UserPayload newUser = new UserPayload();
            newUser.setEmail(email);
            newUser.setName(firstname);
            newUser.setLastName(lastname);
            newUser.setRole(String.valueOf(Role.admin));
            System.out.println(newUser);
            userService.saveUser(newUser);
            user = userService.findUserByEmail(email);
        }
        // if not create new user


        String token = JWTTools.createUserToken(user);

        return new ResponseEntity<>(new AuthenticationSuccessfulPayload(token), HttpStatus.OK);
    }

    //this will return authorization google url
    @GetMapping("/authorization-url")
    public ResponseEntity<String> getGoogleAuthorizationUrl() {
        System.out.println(googleService.getAuthorizationUrl());
        return new ResponseEntity<>( googleService.getAuthorizationUrl(), HttpStatus.OK);
    }


}
