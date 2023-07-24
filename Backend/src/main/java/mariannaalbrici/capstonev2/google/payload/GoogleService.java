package mariannaalbrici.capstonev2.google.payload;

import mariannaalbrici.capstonev2.google.GoogleTokenPayload;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

@Service
public class GoogleService {

    //get id, secret and redirect uri from env.properties
    @Value("${spring.security.oauth2.client.registration.google.client-id}")
    private String clientId;

    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
    private String clientSecret;

    @Value("${spring.security.oauth2.client.registration.google.redirect-uri}")
    private String redirectUri;
    private RestTemplate restTemplate;

    public GoogleService() {
        this.restTemplate = new RestTemplate();
    }

    //create auth url
    public String getAuthorizationUrl() {
        String authorizationUrl = "https://accounts.google.com/o/oauth2/auth";
        authorizationUrl += "?client_id=" + clientId;
        authorizationUrl += "&redirect_uri=" + redirectUri;
        authorizationUrl += "&response_type=code";
        authorizationUrl += "&state=state_parameter_passthrough_value";
        authorizationUrl += "&scope=email%20profile";
        return authorizationUrl;
    }

    //retrieves an access token from Google using an authorization code.
    //GoogleAccessTokenResponse object containing the access token.
    public GoogleTokenPayload getAccessToken(String authorizationCode) {
        String tokenUrl = "https://oauth2.googleapis.com/token";

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> body = new LinkedMultiValueMap<>();
        body.add("code", authorizationCode);
        body.add("client_id", clientId);
        body.add("client_secret", clientSecret);
        body.add("redirect_uri", redirectUri);
        body.add("grant_type", "authorization_code");
        HttpEntity<MultiValueMap<String, String>> requestEntity = new HttpEntity<>(body, headers);

        ResponseEntity<GoogleTokenPayload> responseEntity = restTemplate.exchange(
                tokenUrl,
                HttpMethod.POST,
                requestEntity,
                GoogleTokenPayload.class
        );

        return responseEntity.getBody();
    }

    //retrieves Google's user info using the access token
    //GoogleUserInfoResponse objects containing the user informations
    public GoogleInfo getUserInfo(String accessToken) {
        String userInfoUrl = "https://www.googleapis.com/oauth2/v2/userinfo";

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + accessToken);

        HttpEntity<String> requestEntity = new HttpEntity<>(headers);

        ResponseEntity<GoogleInfo> responseEntity = restTemplate.exchange(
                userInfoUrl,
                HttpMethod.GET,
                requestEntity,
                GoogleInfo.class
        );

        return responseEntity.getBody();
    }
}
