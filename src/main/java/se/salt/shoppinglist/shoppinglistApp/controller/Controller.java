package se.salt.shoppinglist.shoppinglistApp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import se.salt.shoppinglist.shoppinglistApp.model.ShoppingList;
import se.salt.shoppinglist.shoppinglistApp.service.ShoppingListService;

import java.net.URI;
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

    @GetMapping(path = "shoppinglists/{id}")
    ResponseEntity getShoppinglistById(@PathVariable String id) {
        try {
            return ResponseEntity.ok(service.getShoppinglistById(id));
        } catch (Exception e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Shopping list cannot be found");
        }

    }

    @PostMapping (path = "shoppinglists")
    ResponseEntity<ShoppingList> createShoppinglist(@RequestBody ShoppingList shoppingList) {
        ShoppingList created = service.createShoppinglist(shoppingList);
        return  ResponseEntity.created(URI.create("/api/shoppinglists/" + shoppingList.getId())).body(created);
    }

    @DeleteMapping(path = "shoppinglists/{id}")
    ResponseEntity deleteShoppinglist(@PathVariable String id) {
        service.deleteShoppinglist(id);
        return ResponseEntity.noContent().build();
    }
}
