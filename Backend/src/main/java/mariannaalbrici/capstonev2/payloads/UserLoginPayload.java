package mariannaalbrici.capstonev2.payloads;

import lombok.Data;

@Data
public class UserLoginPayload {

    private String email;
    private String password;
}
