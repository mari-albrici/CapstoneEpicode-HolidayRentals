package mariannaalbrici.capstonev2.repositories;

import mariannaalbrici.capstonev2.entities.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BookingRepository extends JpaRepository<Booking, UUID> {
}
