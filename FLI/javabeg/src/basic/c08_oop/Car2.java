package basic.c08_oop;

public class Car2 {
    private int speed;

    public Car2(int speed){
        if(speed < 0){
            this.speed = 0;
        } else if(speed > 120){
            this.speed = 120;
        } else {
            this.speed = speed;
        }
    }

    public int getSpeed(){
        return speed;
    }

    public void accelerate(int amount){
        if(amount < 0){
            System.out.println("La aceleración no puede ser negativa");
            return;
        }
        speed += amount;
        if(speed > 120){
            speed = 120;
        }
    }

    public void brake(int amount){
        if(amount < 0){
            System.out.println("No se puede frenar con un número negativo");
            return;
        }
        speed -= amount;
        if(speed < 0){
            speed = 0;
        }
    }
}