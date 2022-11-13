package org.vihv.contoureditor;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class UserAuthenticationProvider implements AuthenticationProvider {

    /**
     * We should not allow attacker to check login and password separately
     * But with spring security we do exactly that,
     * so we use same error message in both cases to glue the broken pair back
     * */
    public final String wrongPasswordMessage = "Wrong login/password pair";

    Logger logger = LoggerFactory.getLogger(UserAuthenticationProvider.class);
    private UserRepository userRepository;
    private PasswordEncoder passwordEncoder;

    public UserAuthenticationProvider(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return authentication.equals(UsernamePasswordAuthenticationToken.class);
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String username = authentication.getName();
        String password = authentication.getCredentials().toString();
        User user = userRepository.getByLogin(username);
        if (user == null) {
            throw new BadCredentialsException(wrongPasswordMessage);
        }
        List<GrantedAuthority> roles = new ArrayList<GrantedAuthority>();
        if(!passwordEncoder.matches(password, user.password)) {
            throw new BadCredentialsException(wrongPasswordMessage);
        }
        return new UsernamePasswordAuthenticationToken( username, password, roles);
    }
}
