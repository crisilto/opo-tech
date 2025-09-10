package basic.c08_oop;

class Worker {
    private String name;
    private double salary;

    public Worker(String name, double salary) {
        this.name = name;
        this.salary = salary;
    }

    public void showSalary() {
        System.out.println("Trabajador: " + name + ", Salario: â‚¬" + salary);
    }
}
