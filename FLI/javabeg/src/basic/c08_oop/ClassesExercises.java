package basic.c08_oop;

import java.util.ArrayList;

public class ClassesExercises {
    public static void main(String[] args) {

        // 1. Crea una clase Book con atributos title y author. Crea un objeto y muestra
        // sus datos.
        Book book1 = new Book(" ", " ");
        book1.author = "J. R. R. Tolkien";
        book1.showInfo();

        // 2. Crea una clase Dog con un mÃ©todo bark() que imprima su sonido.
        Dog dog1 = new Dog("Krypto", 10);
        dog1.makeSound();

        // 3. AÃ±ade un constructor a la clase Book que reciba title y author.
        Book book2 = new Book("1984", "George Orwell");
        book2.showInfo();

        // 4. Crea una clase Car con atributos brand y model y un mÃ©todo describe().
        Car car1 = new Car("DMC", "DeLorean");
        car1.describe();

        // 5. Crea una clase Student con atributo score y un mÃ©todo que diga si aprobÃ³
        // (mayor o igual a 60).
        Student student1 = new Student("Brais", 85);
        student1.checkPassed();

        Student student2 = new Student("Moure", 45);
        student2.checkPassed();

        // 6. Crea una clase BankAccount con atributo balance y un mÃ©todo deposit() que
        // sume el saldo.
        BankAccount account1 = new BankAccount("12345", 1000.0);
        account1.showBalance();
        account1.deposit(250.0);
        account1.showBalance();

        // 7. Crea una clase Rectangle con mÃ©todos para calcular el Ã¡rea y el perÃ­metro.
        Rectangle rectangle1 = new Rectangle(5.0, 3.0);
        rectangle1.showCalculations();

        // 8. Crea una clase Worker que reciba nombre y salario, y un mÃ©todo para
        // mostrar su salario.
        Worker worker1 = new Worker("Brais Moure", 2500.0);
        worker1.showSalary();

        // 9. Crea varios objetos Person y guÃ¡rdalos en un ArrayList.
        ArrayList<Person> people = new ArrayList<>();

        people.add(new Person("Brais Moure", 21));
        people.add(new Person("MoureDev", 38));
        people.add(new Person("Brais MoureDev", 42));

        System.out.println("Lista de personas:");
        for (Person person : people) {
            person.sayHello();
        }

        // 10. Crea una clase Product y un mÃ©todo que aplique un descuento sobre su
        // precio.
        Product product1 = new Product("Teclado", 199.99);
        product1.showPrice();
        product1.applyDiscount(15.0);
        product1.showPrice();
    }
}
