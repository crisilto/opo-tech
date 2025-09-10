package basic.c08_oop;

import java.util.ArrayList;
import java.util.List;

public class PolymorphismExercises {
    public static void main(String[] args) {
        // 1. Crea una clase Animal con el metodo makeSound(). Luego crea subclases Dog,
        // Cat y Cow que sobrescriban ese metodo con sonidos diferentes. Llama al metodo
        // desde una lista de Animal.
        var animal = new Animal();
        var dog = new Dog();
        var cat = new Cat();
        var cow = new Cow();
        List<Animal> animals = new ArrayList<>();
        animals.add(animal);
        animals.add(dog);
        animals.add(cat);
        animals.add(cow);
        for(Animal a : animals){
            a.makeSound();
        }

        // 2. Crea una clase Shape con el metodo calculateArea(). Luego implementa
        // subclases Circle y Rectangle con sus propias formulas. Usa una lista de Shape
        // para recorrer e imprimir el area de varias figuras.
        var circle = new Circle(5);
        var rectangle = new Rectangle(10, 5);
        List<Shape> shapes = new ArrayList<>();
        shapes.add(circle);
        shapes.add(rectangle);
        for(Shape s : shapes){
            System.out.println( s.calculateArea());
        }

        // 3. Crea una clase Printer con varios metodos print() sobrecargados que
        // acepten diferentes tipos de parametros (String, int, double). Llama a cada
        // uno desde main.
        var myPrinter = new Printer();
        myPrinter.print("hola");
        myPrinter.print(13);
        myPrinter.print(11.12);

        // 4. Crea una clase Greeter con dos metodos greet(): uno que salude con
        // "Hello" y otro que reciba un nombre y salude con "Hello + nombre".
        var myGreet = new Greeter();
        myGreet.greet();
        myGreet.greet("Fay");

        // 5. Crea una clase Vehicle con un metodo start(). Luego crea Car, Bike y Truck
        // que sobrescriban ese metodo. Recorre una lista ArrayList<Vehicle> para llamar
        // a start() en cada uno.
        var myVehicle = new Vehicle();
        var myCar = new Car();
        var myBike = new Bike();
        var myTruck = new Truck();

        List<Vehicle> vehicles = new ArrayList<>();
        vehicles.add(myVehicle);
        vehicles.add(myCar);
        vehicles.add(myBike);
        vehicles.add(myTruck);

        for(Vehicle v : vehicles){
            v.start();
        }

        // 6. Crea una clase Notification con metodo send(), y subclases
        // EmailNotification, SMSNotification. Luego crea una funcion
        // sendNotification(Notification n) que reciba cualquier tipo y lo ejecute.
        var general = new Notification();
        var email = new EmailNotification();
        var sms = new SMSNotification();
        sendNotification(general);
        sendNotification(email);
        sendNotification(sms);

        // 7. Crea una funcion showAnimalType(Animal animal) que imprima el tipo de
        // animal. Pasa diferentes subclases (Dog, Cat, Horse) para que cada una imprima
        // su tipo con su propio getType() sobrescrito.

        // 8. Crea una clase Converter con metodos convert(int), convert(double), y
        // convert(String) que devuelvan diferentes formatos de texto.

        // 9. Crea una clase Product con el metodo getPrice(). Luego, Book y Electronic
        // deben sobrescribirlo con su propia logica de descuento. Recorre una lista de
        // Product e imprime el precio final de cada uno.

        // 10. Crea una clase Character con metodo attack(). Luego crea subclases
        // Warrior, Archer, Mage con ataques diferentes. En main, crea un array de
        // Character y llama a attack() para cada uno.
    }
    // 1. Crea una clase Animal con el metodo makeSound(). Luego crea subclases Dog,
    // Cat y Cow que sobrescriban ese metodo con sonidos diferentes. Llama al metodo
    // desde una lista de Animal.
    public static class Animal{
        public void makeSound(){
            System.out.println("sound");
        }
    }
    public static class Dog extends Animal{
        @Override
        public void makeSound() {
            System.out.println("guau");
        }
    }
    public static class Cat extends Animal{
        @Override
        public void makeSound() {
            System.out.println("meow");
        }
    }
    public static class Cow extends Animal{
        @Override
        public void makeSound() {
            System.out.println("muu");
        }
    }
    // 2. Crea una clase Shape con el metodo calculateArea(). Luego implementa
    // subclases Circle y Rectangle con sus propias formulas. Usa una lista de Shape
    // para recorrer e imprimir el area de varias figuras.
    public abstract static class Shape {
        public abstract double calculateArea();
    }

    public static class Circle extends Shape{
        private double radio;

        public Circle(double radio) {
            this.radio = radio;
        }

        @Override
        public double calculateArea() {
            return Math.PI * Math.pow(radio, 2);
        }
    }

    public static class Rectangle extends Shape{
        private double width;
        private double height;

        public Rectangle(double width, double height){
            this.width = width;
            this.height = height;
        }

        @Override
        public double calculateArea() {
            return width*height;
        }
    }

    // 3. Crea una clase Printer con varios metodos print() sobrecargados que
    // acepten diferentes tipos de parametros (String, int, double). Llama a cada
    // uno desde main.
    public static class Printer{
        public void print(String myString){
            System.out.println(myString);
        }
        public void print(int myInt){
            System.out.println(myInt);
        }
        public void print(double myDouble){
            System.out.println(myDouble);
        }
    }

    // 4. Crea una clase Greeter con dos metodos greet(): uno que salude con
    // "Hello" y otro que reciba un nombre y salude con "Hello + nombre".
    public static class Greeter{
        public void greet(){
            System.out.println("hello");
        }
        public void greet(String name){
            System.out.println("hello, "+name);
        }
    }

    // 5. Crea una clase Vehicle con un metodo start(). Luego crea Car, Bike y Truck
    // que sobrescriban ese metodo. Recorre una lista ArrayList<Vehicle> para llamar
    // a start() en cada uno.
    public static class Vehicle{
        public void start(){
            System.out.println("vehicle started");
        }
    }
    public static class Car extends Vehicle{
        @Override
        public void start() {
            System.out.println("car started");
        }
    }
    public static class Bike extends Vehicle{
        @Override
        public void start() {
            System.out.println("bike started");
        }
    }
    public static class Truck extends Vehicle{
        @Override
        public void start() {
            System.out.println("truck started");
        }
    }

    // 6. Crea una clase Notification con metodo send(), y subclases
    // EmailNotification, SMSNotification. Luego crea una funcion
    // sendNotification(Notification n) que reciba cualquier tipo y lo ejecute.
    public static class Notification{
        public void send(){
            System.out.println("notification sent");
        }
    }
    public static class EmailNotification extends Notification{
        @Override
        public void send() {
            System.out.println("email sent");
        }
    }

    public static class SMSNotification extends Notification{
        @Override
        public void send() {
            System.out.println("sms sent");
        }
    }
    public static void sendNotification(Notification n) {
        n.send();
    }

    // 7. Crea una funcion showAnimalType(Animal animal) que imprima el tipo de
    // animal. Pasa diferentes subclases (Dog, Cat, Horse) para que cada una imprima
    // su tipo con su propio getType() sobrescrito.

    // 8. Crea una clase Converter con metodos convert(int), convert(double), y
    // convert(String) que devuelvan diferentes formatos de texto.

    // 9. Crea una clase Product con el metodo getPrice(). Luego, Book y Electronic
    // deben sobrescribirlo con su propia logica de descuento. Recorre una lista de
    // Product e imprime el precio final de cada uno.

    // 10. Crea una clase Character con metodo attack(). Luego crea subclases
    // Warrior, Archer, Mage con ataques diferentes. En main, crea un array de
    // Character y llama a attack() para cada uno.
}
