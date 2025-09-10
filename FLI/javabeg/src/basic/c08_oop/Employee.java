package basic.c08_oop;

public class Employee {
    private String name;
    private double salary;

    public Employee(String name,double salary){
        this.name = name;
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public double getSalary() {
        return salary;
    }

    public void raiseSalary(double percent){
        if(percent > 0){
            salary *= 1 + (percent / 100);
        } else {
            System.out.println("Percentage must be positive");
        }
    }

    public void showInfo(){
        System.out.println(getName() + " tiene un salario de " + getSalary());
    }
}

class Manager extends Employee {
    private String department;

    public Manager(String name, double salary, String department) {
        super(name, salary);
        this.department = department;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    @Override
    public void showInfo() {
        System.out.println(getName() + " trabaja en " + department + " y tiene un salario de " + getSalary());
    }
}