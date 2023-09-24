package br.com.edu.tutstuts.security.util;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class PasswordGenerator {
	public static void main(String[] args) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		var a = encoder.encode("admin");
		var b = a.toString();
		System.out.println(encoder.encode("client"));
	}
}
