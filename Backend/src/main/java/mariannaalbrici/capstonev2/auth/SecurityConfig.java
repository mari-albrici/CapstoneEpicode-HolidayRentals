package mariannaalbrici.capstonev2.auth;

import mariannaalbrici.capstonev2.exceptions.ExceptionHandlerFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


@Configuration
@EnableMethodSecurity
public class SecurityConfig {
	@Autowired
	JWTAuthFilter jwtAuthFilter;

	@Autowired
	CorsFilter corsFilter;

	@Autowired
	ExceptionHandlerFilter exceptionHandlerFilter;

	@Bean
	SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {

		http.csrf(AbstractHttpConfigurer::disable);

		/* AUTHENTICATION ENDPOINT */

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers("/auth/**", "/login/**").permitAll());

		/* GOOGLE AUTHENTICATION */
		http
				.authorizeHttpRequests(auth -> {
					auth.requestMatchers("/").permitAll();
					auth.requestMatchers("/google/").permitAll();
					auth.requestMatchers("/google/**").permitAll();
					auth.requestMatchers("/google/callback").permitAll();
					auth.requestMatchers(HttpMethod.POST, "/google/callback/").permitAll();
				})
				.oauth2Login(Customizer.withDefaults())
				.formLogin(Customizer.withDefaults());


		/* BOOKINGS ENDPOINTS */
		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET, "/bookings").permitAll());

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.POST, "/bookings").permitAll());

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET, "/bookings/mybookings").hasAuthority("guest"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET, "/bookings/{id}").hasAuthority("admin"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.PUT, "/bookings/{id}").hasAuthority("admin"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.PUT, "/bookings/mybookings/{id}").hasAuthority("guest"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.DELETE, "/bookings/mybookings/{id}").hasAuthority("guest"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.DELETE, "/bookings/{id}").hasAuthority("admin"));


		/* ACCOMMODATION ENDPOINTS */
		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET,"/units").permitAll());

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET,"/units/**").permitAll());

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.POST,"/units").hasAuthority("admin"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.DELETE,"/units/**").hasAuthority("admin"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.PUT,"/units/**").hasAuthority("admin"));


		/* GUESTS ENDPOINTS */

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET,"/users").hasAnyAuthority("admin", "guest"));


		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET,"/users/**").hasAnyAuthority("admin", "guest"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.POST,"/users").permitAll());

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.PUT,"/users/me").hasAuthority("guest"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.GET,"/users/me").hasAuthority("guest"));

		http.authorizeHttpRequests(auth ->
				auth.requestMatchers(HttpMethod.DELETE,"/users").hasAnyAuthority("admin", "guest" ));


		http.addFilterBefore(corsFilter, UsernamePasswordAuthenticationFilter.class);

		http.addFilterBefore(jwtAuthFilter, CorsFilter.class);

		http.addFilterBefore(exceptionHandlerFilter, JWTAuthFilter.class);

		http.sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

		return http.build();
	}

	@Bean
	PasswordEncoder pwEncoder() {
		return new BCryptPasswordEncoder(10);
	}

}