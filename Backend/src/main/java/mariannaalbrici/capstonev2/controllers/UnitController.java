package mariannaalbrici.capstonev2.controllers;

import mariannaalbrici.capstonev2.entities.Unit;
import mariannaalbrici.capstonev2.payloads.UnitPayload;
import mariannaalbrici.capstonev2.services.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/units")
public class UnitController {

    @Autowired
    UnitService unitService;

    // ********** GET ALL ACCOMMODATIONS **********
    @GetMapping("")
    public Page<Unit> getUnits(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size,
            @RequestParam(defaultValue = "name") String sortBy) {

        return unitService.findAll(page, size, String.valueOf(sortBy));
    }

    // ********** POST NEW ACCOMMODATIONS **********
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Unit saveNewUnit(@RequestBody @Validated UnitPayload body) {
        return unitService.saveUnit(body);
    }

    // ********** GET SINGLE ACCOMMODATION **********
    @GetMapping("/{id}")
    public Unit getUnit(@PathVariable int id) throws Exception {
        return unitService.findById(id);
    }

    // ********** PUT SINGLE ACCOMMODATION - BY ADMIN **********
    @PutMapping("/{id}")
    public Unit updateAccommodation(@PathVariable int id, @RequestBody UnitPayload body)
            throws Exception {
        return unitService.findByIdAndUpdate(id, body);
    }

    // ********** DELETE SINGLE ACCOMMODATION - BY ADMIN **********
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteAccommodation(@PathVariable int id) throws Exception {
        unitService.findByIdAndDelete(id);
    }


}

