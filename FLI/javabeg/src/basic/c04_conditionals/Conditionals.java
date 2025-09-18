package basic.c04_conditionals;

public class Conditionals {
    public static void main(String[] args) {
        //condicionales

        //if else, if else if else
        var age = 18;

        if(age > 18){
            System.out.println("mayor de edad");
        }else if(age == 18){
            System.out.println("tiene 18 años");
        }else{
            System.out.println("menor de edad");
        }

        //switch
        var day = 4;
        switch (day){
            case 1:
                System.out.println("lunes");
                break;
            case 2:
                System.out.println("martes");
                break;
            default:
                System.out.println("no es lunes ni martes");
        }
    }
}
