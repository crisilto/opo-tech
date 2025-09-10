package basic.c08_oop;

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void sayHello() {
        System.out.println("Hola, soy " + name + " y tengo " + age + " años.");
    }

    public String getName(){
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }
}

class StudentPerson extends Person {
    private int grade;

    public StudentPerson(String name, int age, int grade){
        super(name, age);
        this.grade = grade;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    @Override
    public void sayHello() {
        System.out.println("Hola, soy " + getName() + ", tengo " + getAge() + " años y mi nota es " + grade + ".");
    }

    public void study(){
        System.out.println("El estudiante " + getName() + " está estudiando");
    }
}
