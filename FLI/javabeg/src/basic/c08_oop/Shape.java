package basic.c08_oop;

public abstract class Shape {
    public abstract double calculateArea();
}

class Rectangle extends Shape {
    private double width;
    private double height;

    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    // Setters
    public void setWidth(double width) {
        this.width = width;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    @Override
    public double calculateArea() {
        return width * height;
    }

    public double calculatePerimeter() {
        return 2 * (width + height);
    }

    public void showCalculations() {
        System.out.println("Rectángulo de " + width + " x " + height);
        System.out.println("Área: " + calculateArea());
        System.out.println("Perímetro: " + calculatePerimeter());
    }
}

class Circle extends Shape {
    private double radio;

    public Circle(double radio) {
        this.radio = radio;
    }

    @Override
    public double calculateArea() {
        return Math.PI * Math.pow(radio, 2);
    }
}
