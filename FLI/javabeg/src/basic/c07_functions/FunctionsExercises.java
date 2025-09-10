package basic.c07_functions;

import java.util.ArrayList;

public class FunctionsExercises {
    public static void main(String[] args) {
        //1
        welcome();
        //2
        greet("fay");
        //3
        System.out.println("10-5="+subtraction(10,5));
        //4
        System.out.println("el cuadrado de 3 es "+square(3));
        //5
        System.out.println("el numero 5 es "+oddOrEven(5)+"." +
                " el numero 6 es "+oddOrEven(6));
        //6
        System.out.println("¿19 años es mayor de edad? "+isAdult(19)+". " +
                "¿16 años es mayor de edad? "+isAdult(16));
        //7
        var myString = "crisketo";
        System.out.println("La longitud de "+myString+" es "+stringLength(myString));
        //8
        int[] myNumbers = {10, 5, 2, 3};
        System.out.println("La media de "+myNumbers+" es "+average(myNumbers));
        //9
        System.out.println("El factorial de 5 es "+factorial(5));
        //10
        ArrayList<String> names = new ArrayList<>();
        names.add("fay");
        names.add("fayhuahua");
        names.add("crisketo");
        showList(names);
    }
    // 1. Crea una funcion que imprima "¡Te doy la bienvenida al curso de Java desde
    // cero!".
    public static void welcome(){
        System.out.println("¡Te doy la bienvenida al curso de Java desde cero!");
    }

    // 2. Escribe una funcion que reciba un nombre como parametro y salude a esa
    // persona.
    public static void greet(String name){
        System.out.println("Hola "+name);
    }

    // 3. Haz un metodo que reciba dos numeros enteros y devuelva su resta.
    public static int subtraction(int n1, int n2){
        return n1-n2;
    }

    // 4. Crea un metodo que calcule el cuadrado de un numero (n * n).
    public static int square(int n){
        return n*n;
    }

    // 5. Escribe una funcion que reciba un numero y diga si es par o impar.
    public static String oddOrEven(int n){
        if(n%2 == 0){
            return "par";
        }
        return "impar";
    }

    // 6. Crea un metodo que reciba una edad y retorne true si es mayor de edad (y
    // false en caso contrario).
    public static boolean isAdult(int age){
        if(age >= 18){
            return true;
        }
        return false;
    }

    // 7. Implementa una funcion que reciba una cadena y retorne su longitud.
    public static int stringLength(String string){
        var stringLenth = string.length();
        return stringLenth;
    }

    // 8. Crea un metodo que reciba un array de enteros, calcula su media y lo
    // retorna.
    public static double average(int[] numbers){
        var arrLength = numbers.length;
        var arrTotal = 0;
        for(int number : numbers){
            arrTotal += number;
        }
        var arrAverage = arrTotal / arrLength;
        return arrAverage;
    }

    // 9. Escribe un metodo que reciba un numero y retorna su factorial.
    public static int factorial(int num){
        int factorial = 1;
        for(int i = 1; i <= num; i++){
            factorial *= i;
        }
        return factorial;
    }

    // 10. Crea una funcion que reciba un ArrayList<String> y lo recorra mostrando
    // cada elemento.
    public static void showList(ArrayList<String> myList){
        for(String listElement : myList){
            System.out.println(listElement);
        }
    }
}
