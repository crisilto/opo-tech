package basic.c08_oop;

public class Temperature {
    // 5. Crea una clase Temperature con el atributo privado celsius. El metodo
    // setCelsius(double celsius) solo debe aceptar valores entre -100 y 100.
    private double celsius;

    public Temperature(double celsius){
        setCelsius(celsius);
    }

    public double getCelsius() {
        return celsius;
    }

    public void setCelsius(double celsius){
        if(celsius >= -100 && celsius <= 100){
            this.celsius = celsius;
        }else{
            System.out.println("los celsius tienen que estar entre -100 y 100");
        }
    }
}
