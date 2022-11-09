package se.salt.shoppinglist.shoppinglistApp.model;

import java.math.BigDecimal;

public class Product {
    private String title;
    private int quantity;
    private BigDecimal price;
    public Product () {}

    public Product(String title, int quantity, BigDecimal price) {
        this.title = title;
        this.quantity = quantity;
        this.price = price;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }
}
