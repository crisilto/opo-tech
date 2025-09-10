package basic.c08_oop;

public class Student2 {
    // 9. Crea una clase Student con el atributo privado grade. Agrega los metodos
    // setGrade(int grade) y isPassed() que retorne true si la nota es mayor o igual
    // a 60.
    private int grade;

    public Student2(int grade){
        this.grade = grade;
    }

    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade){
        if(grade >= 0 && grade <= 100){
            this.grade = grade;
        } else {
            System.out.println("Invalid grade, must be between 0 and 100");
        }
    }

    public boolean isPassed(){
        return grade >= 60;
    }
}
