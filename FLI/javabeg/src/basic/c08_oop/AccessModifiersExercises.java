package basic.c08_oop;

public class AccessModifiersExercises {
    public static void main(String[] args) {
        // 1. Crea una clase Person con atributos privados name y age. Usa los metodos
        // getName(), setName(), getAge() y setAge() para asignar y mostrar valores
        // desde otra clase.
        Person myPerson = new Person("fay", 26);
        System.out.println(myPerson.getName()+" tiene "+myPerson.getAge()+" años");
        myPerson.setName("fayhuahua");
        myPerson.setAge(888);
        System.out.println(myPerson.getName()+" tiene "+myPerson.getAge()+" años");

        // 2. Crea una clase Product con el atributo privado price. Añade el metodo
        // setPrice(double price) que solo permita precios mayores a 0.
        Product myProduct = new Product("mochi", 6);
        System.out.println(myProduct.getName()+" cuesta "+myProduct.getPrice()+"€");
        myProduct.setPrice(4);
        myProduct.setPrice(-20);
        System.out.println("ha habido una oferta y ahora "+myProduct.getName()+" cuesta "+myProduct.getPrice()+"€");

        // 3. Crea una clase BankAccount con el atributo privado balance. Implementa los
        // metodos deposit(double amount) y withdraw(double amount) que validen las
        // cantidades correctamente.
        var myBankAcc = new BankAccount("ABCDEFG-XX", 2500);
        System.out.println(myBankAcc.getAccountNumber()+" tiene un balance inicial de "+myBankAcc.getBalance());
        myBankAcc.deposit(500);
        myBankAcc.withdraw(1750);

        // 4. Crea una clase Book con el atributo privado title. Permite leerlo con el
        // metodo getTitle() pero no modificarlo (sin setTitle()). El titulo debe
        // asignarse solo por el constructor.
        var myBook = new Book("harry potter", "jk rowling");
        System.out.println(myBook.getTitle());

        // 5. Crea una clase Temperature con el atributo privado celsius. El metodo
        // setCelsius(double celsius) solo debe aceptar valores entre -100 y 100.
        var myTemperature = new Temperature(-300);
        var myTemperature2 = new Temperature(30);
        System.out.println(myTemperature2.getCelsius());
        myTemperature2.setCelsius(130);

        // 6. Crea una clase User con los atributos privados username y password.
        // Implementa los metodos setUsername(String username), setPassword(String
        // password) y checkPassword(String inputPassword) que compare contraseñas.
        var myUser = new User("fay", "fay123");

        if(myUser.checkPassword("fay134")){
            System.out.println("correcta");
        }else{
            System.out.println("incorrecta");
        }

        if(myUser.checkPassword("fay123")){
            System.out.println("correcta");
        }else{
            System.out.println("incorrecta");
        }

        // 7. Crea una clase Employee con el atributo privado salary. Agrega el metodo
        // raiseSalary(double percent) que solo permita aumentos positivos.
        var myEmployee = new Employee("empleado", 1400);
        myEmployee.raiseSalary(10); // +10%
        System.out.println(myEmployee.getSalary()); // 1540.0

        myEmployee.raiseSalary(-5); // intentará reducir, pero dará aviso
        System.out.println(myEmployee.getSalary()); // sigue 1540.0

        // 8. Crea una clase Rectangle con los atributos privados width y height. Agrega
        // setters y el metodo calculateArea() que devuelva el resultado de width *
        // height.
        var myRectangle = new Rectangle(10, 5);
        myRectangle.showCalculations();

        myRectangle.setWidth(20);
        myRectangle.setHeight(15);
        System.out.println("Nuevo area: " + myRectangle.calculateArea());

        // 9. Crea una clase Student2 con el atributo privado grade. Agrega los metodos
        // setGrade(int grade) y isPassed() que retorne true si la nota es mayor o igual
        // a 60.
        var myStudent = new Student2(69);
        var myStudent2 = new Student2(59);
        if(myStudent.isPassed()){
            System.out.println("The student1 passed");
        } else {
            System.out.println("The student1 failed");
        }
        if(myStudent2.isPassed()){
            System.out.println("The student2 passed");
        } else {
            System.out.println("The student2 failed");
        }

        // 10. Crea una clase Car2 con el atributo privado speed. Agrega los metodos
        // accelerate(int amount) que aumente la velocidad (maximo 120) y brake(int
        // amount) que reduzca la velocidad (minimo 0).
        var myCar2 = new Car2(100);

        myCar2.accelerate(20);  // llega a 120
        System.out.println(myCar2.getSpeed()); // 120

        myCar2.brake(130);      // baja a 0
        myCar2.brake(-20);      // muestra aviso
        myCar2.brake(40);       // ya está en 0, se queda en 0
        System.out.println(myCar2.getSpeed()); // 0
    }
}
