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

    public ShoppingList createdShoppinglist(ShoppingList shoppingList) {
        return jpaRepo.save(shoppingList);
    }

    public ShoppingList findShoppinglistById(String id) {
        return jpaRepo.findById(id).orElseThrow();
    }

    public void deleteShoppinglistById(String id) {
        jpaRepo.deleteById(id);
    }

    public ShoppingList updateShoppinglist(ShoppingList shoppingList) {
        return jpaRepo.save(shoppingList);
    }
}
