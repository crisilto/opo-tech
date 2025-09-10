package basic.c08_oop;

public class Inheritance {
    public static void main(String[] args) {
        //herencia
        var myAnimal = new Animal("mi animal");
        myAnimal.eat();

        var myDog = new Dog("mi perro", 4);
        myDog.eat();

        var myCat = new Cat("mi gato");
        myCat.eat();

        var myBird = new Bird("mi pajaro");
        myBird.eat();
        myBird.fly();
    }
    public static class Animal{
        String name;

        public Animal(String name){
            this.name = name;
        }

        public void eat() {
            System.out.println("el animal con nombre "+name+" está comiendo");
        }
    }
    public static class Dog extends Animal{
        int age;
        public Dog(String name, int age) {
            super(name);
            this.age = age;
        }

        @Override
        public void eat() {
            System.out.println("el perro con nombre "+name+" está comiendo");
        }
    }
    public static class Cat extends Animal{
        public Cat(String name) {
            super(name);
        }
    }
    public static class Bird extends Animal{
        public Bird(String name) {
            super(name);
        }

        public void fly(){
            System.out.println("está volando");
        }
    }
}
