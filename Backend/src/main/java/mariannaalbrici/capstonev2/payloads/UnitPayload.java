package mariannaalbrici.capstonev2.payloads;

import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class UnitPayload {
    @NotNull
    private int id;
    @NotNull
    private String address;
    @NotNull
    private int beds;
    @NotNull
    private double cost;
}
