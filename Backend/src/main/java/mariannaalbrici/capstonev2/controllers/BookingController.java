package mariannaalbrici.capstonev2.controllers;

import mariannaalbrici.capstonev2.entities.Booking;
import mariannaalbrici.capstonev2.payloads.BookingPayload;
import mariannaalbrici.capstonev2.services.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingService bookingService;

    // ********** GET ALL BOOKINGS **********
    @GetMapping("")
    public Page<Booking> getBookings(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size,
            @RequestParam(defaultValue = "id") String sortBy) {

        return bookingService.findAll(page, size, String.valueOf(sortBy));
    }

    // ********** POST NEW BOOKING **********
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Booking saveNewBooking(@RequestBody @Validated BookingPayload body) {
        return bookingService.saveBooking(body);
    }

    // ********** GET SINGLE BOOKING - BY ADMIN **********
    @GetMapping("/{id}")
    public Booking getBookingByAdmin(@PathVariable UUID id) throws Exception {
        return bookingService.findById(id);
    }

    // ********** GET SINGLE BOOKING - BY USER **********
    @GetMapping("/mybookings")
    public Booking getBooking(@RequestParam UUID id) throws Exception {
        return bookingService.findById(id);
    }

    // ********** PUT SINGLE BOOKING - BY ADMIN **********
    @PutMapping("/{id}")
    public Booking updateBookingByAdmin(@PathVariable UUID id, @RequestBody BookingPayload body)
            throws Exception {
        return bookingService.findByIdAndUpdate(id, body);
    }

    // ********** PUT SINGLE BOOKING - BY USER **********
    @PutMapping("/mybookings/{id}")
    public Booking updateBooking(@RequestParam UUID id, @RequestBody BookingPayload body)
            throws Exception {
        return bookingService.findByIdAndUpdate(id, body);
    }

    // ********** DELETE SINGLE BOOKING - BY ADMIN **********
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBookingByAdmin(@PathVariable UUID id) throws Exception {
        bookingService.findByIdAndDelete(id);
    }

    // ********** DELETE SINGLE BOOKING - BY USER **********
    @DeleteMapping("/mybookings/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteBooking(@RequestParam UUID bookingId, @PathVariable UUID id) throws Exception {
        bookingService.findByIdAndDelete(bookingId);
    }
}

