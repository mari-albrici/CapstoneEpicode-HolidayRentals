package mariannaalbrici.capstonev2.exceptions;

import lombok.Getter;

import java.time.LocalDate;
import java.util.Date;

@Getter
public class ErrorsPayload {
    private String message;
    public Date timestamp;
    private int internalCode;

    public ErrorsPayload(String message, Date timestamp, int internalCode) {
        this.message = message;
        this.timestamp = timestamp;
        this.internalCode = internalCode;
    }
}
