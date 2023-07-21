package mariannaalbrici.capstonev2.services;

import mariannaalbrici.capstonev2.entities.Booking;
import mariannaalbrici.capstonev2.exceptions.NotFoundException;
import mariannaalbrici.capstonev2.payloads.BookingPayload;
import mariannaalbrici.capstonev2.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepo;

    public Booking saveBooking(BookingPayload body){
        Booking b = new Booking();
        b.setEmail(body.getEmail());
        b.setName(body.getName());
        b.setLastName(body.getLastName());
        b.setGuests(body.getGuests());
        b.setStartDate(body.getStartDate());
        b.setEndDate(body.getStartDate());
        b.setUnitId(body.getUnitId());
        return bookingRepo.save(b);
    }

    public Page<Booking> findAll(int page, int size, String sortBy){
        if (size < 0)
            size = 10;
        if (size > 100)
            size = 100;
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy));
        return bookingRepo.findAll(pageable);
    }

    public Booking findById(UUID id) throws NotFoundException {
        return bookingRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Booking not found"));
    }

    public Booking findByIdAndUpdate(UUID id, BookingPayload b)
            throws NotFoundException {
        Booking found = this.findById(id);
        found.setEmail(b.getEmail());
        found.setName(b.getName());
        found.setLastName(b.getLastName());
        found.setGuests(b.getGuests());
        found.setStartDate(b.getStartDate());
        found.setEndDate(b.getEndDate());
        found.setUnitId(b.getUnitId());
        return bookingRepo.save(found);
    }


    public void findByIdAndDelete(UUID id) throws NotFoundException {
        Booking found = this.findById(id);
        bookingRepo.delete(found);
    }

}
