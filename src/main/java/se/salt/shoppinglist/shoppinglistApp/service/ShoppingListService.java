package se.salt.shoppinglist.shoppinglistApp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.salt.shoppinglist.shoppinglistApp.model.ShoppingList;
import se.salt.shoppinglist.shoppinglistApp.repository.ShoppingListRepository;

import java.util.List;

@Service
public class ShoppingListService {
    @Autowired
    private ShoppingListRepository repo;

    public List<ShoppingList> getAllShoppinglists() {
        return repo.getAllShoppinglists();
    }

    public ShoppingList createShoppinglist(ShoppingList shoppingList) {
        return repo.createdShoppinglist(shoppingList);
    }

    public ShoppingList getShoppinglistById(String id) {
        return repo.findShoppinglistById(id);
    }
}
