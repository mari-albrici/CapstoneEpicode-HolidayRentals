package mariannaalbrici.capstonev2.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.UUID;

@Entity
@Table(name = "bookings")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

    @Id
    @GeneratedValue
    private UUID id;

    private String email;

    private String phoneNo;
    
    private String name;
    private String lastName;
    private int guests;
    private LocalDate startDate;
    private LocalDate endDate;
    private int unitId;

}
