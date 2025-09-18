package basic.c08_oop;

class Product {
    private String name;
    private double price;

    public Product(String name, double price) {
        this.name = name;
        this.price = price;
    }

    public void applyDiscount(double discountPercentage) {
        if (discountPercentage >= 0 && discountPercentage <= 100) {
            double discountAmount = price * (discountPercentage / 100);
            price -= discountAmount;
            System.out.println("Descuento del " + discountPercentage + "% aplicado");
        } else {
            System.out.println("El descuento debe estar entre 0 y 100%");
        }
    }

    public void showPrice() {
        System.out.println("Producto: " + name + ", Precio: â‚¬" + String.format("%.2f", price));
    }

    public String getName() {
        return name;
    }

    public double getPrice() {
        return price;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(double price){
        if(price>0){
            this.price = price;
        }else{
            System.out.println("el precio tiene que ser mayor a 0");
        }
    }
}