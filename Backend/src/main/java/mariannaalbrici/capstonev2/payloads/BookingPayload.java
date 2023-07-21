package mariannaalbrici.capstonev2.payloads;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
public class BookingPayload {

    @NotNull
    private String email;
    @NotNull
    private String phoneNo;
    @NotNull
    private String name;
    @NotNull
    private String lastName;
    @NotNull
    private int guests;
    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;
    @NotNull
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate endDate;
    @NotNull
    private int unitId;
}
