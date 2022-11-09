package se.salt.shoppinglist.shoppinglistApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import se.salt.shoppinglist.shoppinglistApp.model.ShoppingList;
import se.salt.shoppinglist.shoppinglistApp.service.ShoppingListService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class Controller {
    @Autowired
    private ShoppingListService service;

    @GetMapping(path = "shoppinglists")
    ResponseEntity<List<ShoppingList>> getAllShoppinglists() {
        return  ResponseEntity.ok(service. getAllShoppinglists());
    }
}
