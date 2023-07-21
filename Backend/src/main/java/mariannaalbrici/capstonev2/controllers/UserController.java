package mariannaalbrici.capstonev2.controllers;

import mariannaalbrici.capstonev2.entities.User;
import mariannaalbrici.capstonev2.exceptions.NotFoundException;
import mariannaalbrici.capstonev2.payloads.UserPayload;
import mariannaalbrici.capstonev2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    UserService userService;

    // ********** GET ALL GUESTS **********
    @GetMapping("")
    public Page<User> getGuests(
            @RequestParam(name = "page", defaultValue = "0") int page,
            @RequestParam(name = "size", defaultValue = "10") int size,
            @RequestParam(defaultValue = "email") String sortBy) {

        return userService.findAll(page, size, String.valueOf(sortBy));
    }

    // ********** GET CURRENT GUEST **********
    @GetMapping("/me")
    public User getCurrentGuest(Authentication authentication) throws NotFoundException {
        User userDetails = (User) authentication.getPrincipal();
        String guestEmail = userDetails.getEmail();
        User currentGuest = userService.findByEmail(guestEmail);
        return currentGuest;
    }

    // ********** POST NEW GUEST **********
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public User saveNewuser(@RequestBody @Validated UserPayload body) {
        return userService.saveUser(body);
    }

    // ********** GET SINGLE GUEST - BY ADMIN **********
    @GetMapping("/{email}")
    public User getGuestByAdmin(@PathVariable String email) throws Exception {
        return userService.findByEmail(email);
    }

    // ********** PUT SINGLE GUEST - BY ADMIN **********
    @PutMapping("/{email}")
    public User updateGuestByAdmin(@PathVariable String email, @RequestBody UserPayload body)
            throws Exception {
        return userService.findByEmailAndUpdate(email, body);
    }

    // ********** PUT SINGLE GUEST - BY USER **********
    @PutMapping("/me")
    public User updateGuest(@RequestParam String email, @RequestBody UserPayload body)
            throws Exception {
        return userService.findByEmailAndUpdate(email, body);
    }

    // ********** DELETE SINGLE GUEST - BY ADMIN **********
    @DeleteMapping("/{email}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGuestByAdmin(@PathVariable String email) throws Exception {
        userService.findByEmailAndDelete(email);
    }

    // ********** DELETE SINGLE GUEST - BY USER **********
    @DeleteMapping("/me")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteGuest(@RequestParam String email) throws Exception {
        userService.findByEmailAndDelete(email);
    }


}
