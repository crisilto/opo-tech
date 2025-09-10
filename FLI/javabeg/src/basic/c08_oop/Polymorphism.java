package basic.c08_oop;

public class Polymorphism {
    public static void main(String[] args) {
        //-> polimorfismo por herencia (sobreescritura)
        var animal = new Animal();
        animal.sound();
        var dog = new Dog();
        dog.sound();

        //-> polimorfismo por sobrecarga (de metodos)
        var calculator = new Calculator();
        System.out.println(calculator.sum(3,5));
        System.out.println(calculator.sum(3,5, 2));
        System.out.println(calculator.sum(5.5, 3));
    }
    public static class Animal{
        public void sound(){
            System.out.println("algun sonido");
        }
        public void eat(){
            System.out.println("come");
        }
    }
    public static class Dog extends Animal{
        @Override
        public void sound() {
            System.out.println("guau");
        }
    }

    //-> polimorfismo por sobrecarga (de metodos)

    public static class Calculator{
        public int sum(int a, int b){
            return a+b;
        }
        public int sum(int a, int b, int c){
            return a+b+c;
        }
        public double sum(double a, double b){
            return a+b;
        }
    }
}
