package basic.c08_oop;

import java.util.ArrayList;
import java.util.List;

public class InheritanceExercises {
    public static void main(String[] args) {
        // 1. Crea una clase Vehicle con un metodo move(). Luego crea una subclase Car
        // que herede de Vehicle y agrega el metodo honk().
        var myVehicle = new Vehicle("ford", "fiesta");
        myVehicle.describe();
        myVehicle.move();
        var myCar = new Car("opel", "corsa");
        myCar.describe();
        myCar.move();
        myCar.honk();

        // 2. Define una clase Person con los atributos name y age. Luego crea una clase
        // Student que agregue el atributo grade y un metodo study().
        var myStudent = new StudentPerson("fay", 26, 93);
        myStudent.study();

        // 3. Crea una clase Animal con el metodo makeSound(). Haz que Dog diga Woof y
        // Cat diga Meow sobrescribiendo ese metodo.
        Animal a0 = new Animal("Animal", 10);
        Animal a1 = new Dog("Rocky", 14);
        Animal a2 = new Cat("Lilith", 4);

        a0.makeSound();
        a1.makeSound(); // Woof
        a2.makeSound(); // Meow

        // 4. La clase Employee tiene los atributos name y salary. Manager hereda de
        // Employee y agrega el atributo department.
        Employee m1 = new Manager("Manager", 1900, "RRHH");
        m1.showInfo();

        // 5. Crea una clase abstracta Shape con un metodo calculateArea(). Luego
        // implementa ese metodo en Circle y Rectangle.
        Shape myCircle = new Circle(20);
        System.out.println(myCircle.calculateArea());
        Shape myRectangle = new Rectangle(10, 5);
        System.out.println(myRectangle.calculateArea());

        // 6. Crea una clase Bird con el metodo fly(). Luego crea Eagle que sobrescriba
        // fly() pero tambien llame al metodo original con super.fly().
        var myBird = new Bird("Pajaro", 1);
        myBird.fly();
        Bird myEagle = new Eagle("Aguila", 2);
        myEagle.fly();

        // 7. Haz una clase Device con un constructor que imprima "Device created".
        // Luego crea Phone que herede de Device y en su constructor imprima "Phone ready".
        var myDevice = new Device("TV");
        Device myPhone = new Phone("iPhone");

        // 8. BankAccount tiene un saldo y metodos para deposit() y withdraw().
        // SavingsBankAccount hereda y agrega un metodo addInterest().
        var mySavingsBankAccount = new SavingsBankAccount("12345XXXX", 1000, 0.05);
        mySavingsBankAccount.showBalance();
        mySavingsBankAccount.deposit(500);
        mySavingsBankAccount.withdraw(200);
        mySavingsBankAccount.addInterest();
        mySavingsBankAccount.showBalance();

        // 9. Crea una clase Vehicle y tres subclases: Car, Bike y Truck, cada una con
        // un metodo describe() sobrescrito.
        Vehicle myCar1 = new Car("ford", "fiesta 2009");
        Vehicle myBike = new Bike("canyon", "grail CF SLX");
        Vehicle myTruck = new Truck("mercedes-benz", "actros");
        myCar1.describe();
        myBike.describe();
        myTruck.describe();

        /*
         10. Crea un ArrayList<Animal> que contenga instancias de Dog, Cat y Bird.
         Recorre la lista y llama a makeSound().

         -> De manera inmutable
                List<Animal> animals = List.of(
                        new Dog("rocky", 14),
                        new Cat("lilith", 4),
                        new Bird("birdy", 1)
                );
                for(Animal a : animals){
                    a.makeSound();
                }
        */
        //de manera mutable
        List<Animal> animals = new ArrayList<>();
        animals.add(new Dog("rocky", 14));
        animals.add(new Cat("lilith", 4));
        animals.add(new Bird("birdy", 1));

        for(Animal a : animals){
            a.makeSound();
        }
    }
}
