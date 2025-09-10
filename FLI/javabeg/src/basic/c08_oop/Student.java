package basic.c08_oop;

class Student {
    private String name;
    private double score;

    public Student(String name, double score) {
        this.name = name;
        this.score = score;
    }

    public void checkPassed() {
        if (score >= 60) {
            System.out.println(name + " ha aprobado con una nota de " + score);
        } else {
            System.out.println(name + " no ha aprobado. Nota: " + score);
        }
    }
}