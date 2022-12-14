package se.salt.shoppinglist.shoppinglistApp.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import javax.persistence.Id;
import java.math.BigDecimal;
import java.util.List;

@Document(collection = "ShoppingList")
public class ShoppingList {
    @Id
    @MongoId(value = FieldType.OBJECT_ID)
    private String id;
    private String title;
    private String createdDate;
    private BigDecimal totalPrice;
    private List<Product> items;
    private boolean completed;

    public ShoppingList () {}

    public ShoppingList(String id, String title, String createdDate, BigDecimal totalPrice, List<Product> items) {
        this.id = id;
        this.title = title;
        this.createdDate = createdDate;
        this.totalPrice = totalPrice;
        this.items = items;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public BigDecimal getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(BigDecimal totalPrice) {
        this.totalPrice = totalPrice;
    }

    public List<Product> getItems() {
        return items;
    }

    public void setItems(List<Product> items) {
        this.items = items;
    }

    public boolean isCompleted() {
        return completed;
    }

    public void setCompleted(boolean completed) {
        this.completed = completed;
    }

    public BigDecimal computeTotalPrice() {
        return items.stream()
                .map(item -> item.getPrice().multiply(new BigDecimal(item.getQuantity())))
                .reduce(new BigDecimal(0), (partial, next) -> partial.add(next));
    }
}
