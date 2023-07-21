package mariannaalbrici.capstonev2.auth.payloads;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthenticationSuccessfulPayload {
    private String accessToken;
}
