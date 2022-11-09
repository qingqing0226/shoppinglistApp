package se.salt.shoppinglist.shoppinglistApp.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import se.salt.shoppinglist.shoppinglistApp.model.ShoppingList;

import java.util.List;

@Repository
public class ShoppingListRepository {
    @Autowired
    private JpaShoppingListRepository jpaRepo;

    public List<ShoppingList> getAllShoppinglists() {
        return jpaRepo.findAll();
    }
}