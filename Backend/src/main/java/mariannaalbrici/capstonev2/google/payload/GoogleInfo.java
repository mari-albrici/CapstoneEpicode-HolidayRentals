package mariannaalbrici.capstonev2.google.payload;

import lombok.Data;

@Data
public class GoogleInfo {
    private String id;
    private String email;
    private boolean verifiedEmail;
    private String name;
    private String given_name;
    private String family_name;
    private String picture;
    private String locale;
}
