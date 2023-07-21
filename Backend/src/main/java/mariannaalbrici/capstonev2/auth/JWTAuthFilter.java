package mariannaalbrici.capstonev2.auth;

import java.io.IOException;
import mariannaalbrici.capstonev2.entities.User;
import mariannaalbrici.capstonev2.entities.enums.Role;
import mariannaalbrici.capstonev2.exceptions.NotFoundException;
import mariannaalbrici.capstonev2.exceptions.UnauthorizedException;
import mariannaalbrici.capstonev2.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JWTAuthFilter extends OncePerRequestFilter {

	@Autowired
	UserService userService;

	@Override
	protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
		String authHeader = request.getHeader("Authorization");

		if (authHeader == null || !authHeader.startsWith("Bearer ")) throw new UnauthorizedException("Please add token to the authorization headers.");

		String accessToken = authHeader.substring(7);

		try {
			if (JWTTools.isTokenValid(accessToken)) {
				String email = JWTTools.extractSubject(accessToken);
				System.out.println(email);

				if (userService.findByEmail(email) != null) {
					User user = userService.findByEmail(email);
					UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user, null, user.getAuthorities());
					authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

					SecurityContextHolder.getContext().setAuthentication(authToken);

					filterChain.doFilter(request, response);

				}  else {
					throw new NotFoundException("User not found");
				}
			} else {
				throw new UnauthorizedException("Invalid token");
			}
		} catch (NotFoundException e) {
			e.printStackTrace();
		}
	}

	@Override
	protected boolean shouldNotFilter(HttpServletRequest request) {
		String servletPath = request.getServletPath();
		return new AntPathMatcher().match("/auth/login", servletPath) || new AntPathMatcher().match("/bookings", servletPath)|| new AntPathMatcher().match("/auth/register", servletPath);
	}

}