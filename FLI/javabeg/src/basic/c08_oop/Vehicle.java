package basic.c08_oop;

public class Vehicle {
    private String brand;
    private String model;

    public Vehicle(String brand, String model) {
        this.brand = brand;
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public String getModel() {
        return model;
    }

    public void describe() {
        System.out.println("Vehículo con marca: " + brand + ". Modelo: " + model);
    }

    public void move() {
        System.out.println("El vehículo se está moviendo");
    }
}

class Car extends Vehicle {

    public Car(String brand, String model){
        super(brand, model);
    }

    @Override
    public void move() {
        System.out.println("El coche se está moviendo");
    }

    @Override
    public void describe() {
        System.out.println("Coche con marca: " + getBrand() + ". Modelo: " + getModel());
    }

    public void honk() {
        System.out.println("El coche pita");
    }
}

class Bike extends Vehicle{

    public Bike(String brand, String model) {
        super(brand, model);
    }

    @Override
    public void describe() {
        System.out.println("Bici con marca: " + getBrand() + ". Modelo: " + getModel());
    }
}

class Truck extends Vehicle{
    public Truck(String brand, String model){
        super(brand, model);
    }

    @Override
    public void describe(){
        System.out.println("Camión con marca: "+getBrand()+". Modelo: "+getModel());
    }
}