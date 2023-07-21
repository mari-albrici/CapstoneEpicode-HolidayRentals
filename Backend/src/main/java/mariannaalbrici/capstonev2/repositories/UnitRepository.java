package mariannaalbrici.capstonev2.repositories;

import mariannaalbrici.capstonev2.entities.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UnitRepository extends JpaRepository<Unit, Integer> {
}
