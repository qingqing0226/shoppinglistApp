package se.salt.shoppinglist.shoppinglistApp.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import se.salt.shoppinglist.shoppinglistApp.model.ShoppingList;

public interface JpaShoppingListRepository extends MongoRepository<ShoppingList, String> {
}
