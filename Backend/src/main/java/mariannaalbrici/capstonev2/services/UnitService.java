package mariannaalbrici.capstonev2.services;

import mariannaalbrici.capstonev2.entities.Unit;
import mariannaalbrici.capstonev2.exceptions.NotFoundException;
import mariannaalbrici.capstonev2.payloads.UnitPayload;
import mariannaalbrici.capstonev2.repositories.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class UnitService {
    @Autowired
    private UnitRepository unitRepo;

    public Unit saveUnit (UnitPayload body){
        Unit u = new Unit();
        u.setId(body.getId());
        u.setAddress(body.getAddress());
        u.setCost(body.getCost());
        u.setBeds(body.getBeds());
        return  unitRepo.save(u);
    }

    public Page<Unit> findAll(int page, int size, String sortBy) {
        if (size < 0)
            size = 10;
        if (size > 100)
            size = 100;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return unitRepo.findAll(pageable);
    }

    public Unit findById(int id) throws NotFoundException {
        return unitRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Unit not found"));
    }

    public Unit findByIdAndUpdate(int id, UnitPayload u)
            throws NotFoundException {
        Unit found = this.findById(id);
        found.setId(u.getId());
        found.setAddress(u.getAddress());
        found.setCost(u.getCost());
        found.setBeds(u.getBeds());
        return unitRepo.save(found);
    }

    public void findByIdAndDelete(int id) throws NotFoundException {
        Unit found = this.findById(id);
        unitRepo.delete(found);
    }
}
