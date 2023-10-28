package br.com.edu.tutstuts.security.util;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		var a = encoder.encode("123");
		
		System.out.println(a);
	}
}
