package mariannaalbrici.capstonev2.payloads;

import lombok.Data;
import mariannaalbrici.capstonev2.entities.enums.Role;

@Data
public class UserPayload {
    private String email;

    private String name;
    private String lastName;
    private String password;
    private String role;
}
