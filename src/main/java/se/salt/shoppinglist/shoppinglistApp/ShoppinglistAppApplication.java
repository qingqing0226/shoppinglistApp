package se.salt.shoppinglist.shoppinglistApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class })
@EnableMongoRepositories(basePackages = "se.salt.shoppinglist.shoppinglistApp")
public class ShoppinglistAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ShoppinglistAppApplication.class, args);
	}

}
