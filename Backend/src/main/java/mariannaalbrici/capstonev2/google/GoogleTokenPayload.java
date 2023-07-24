package mariannaalbrici.capstonev2.google;

import lombok.Data;

@Data
public class GoogleTokenPayload {
    private String access_token;
    private String expires_in;
    private String token_type;
    private String refresh_token;
}
