package basic.c06_loops;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class LoopsExercises {
    public static void main(String[] args) {

        // 1. Imprime los numeros del 1 al 10 usando while.
        int i = 1;
        while (i <= 10){
            System.out.println(i);
            i++;
        }

        // 2. Usa do-while para mostrar todos los valores de un ArrayList.
        ArrayList<String> names = new ArrayList<>();
        names.add("cris");
        names.add("fay");
        names.add("crisketo");
        names.add("fayhuahua");
        i = 0;
        do{
            for (String name : names){
                System.out.println(name);
            }
            i++;
        }while (i < names.size());

        // 3. Imprime los multiplos de 5 del 1 al 50 usando for.
        for(i=5; i <= 50; i+=5){
            System.out.println(i);
        }

        // 4. Recorre un Array de 5 numeros e imprime la suma total.
        int[] numbers = {4, 1, 4, -1, 2, 5};
        int suma = 0;
        for(int number : numbers){
            suma+=number;
        }
        System.out.println(suma);

        // 5. Usa un for para recorrer un Array y mostrar sus valores.
        for(i = 0; i < numbers.length; i++){
            System.out.println(numbers[i]);
        }

        // 6. Usa for-each para recorrer un HashSet y un HashMap.
        HashSet<String> colours = new HashSet<>();
        colours.add("yellow");
        colours.add("red");
        colours.add("black");
        colours.add("white");
        for(String colour : colours){
            System.out.println(colour);
        }

        HashMap<Integer, String> users = new HashMap<>();
        users.put(1, "cris");
        users.put(2, "fay");
        users.put(4, "lilith");
        users.put(3, "crisketo");
        for(Map.Entry<Integer, String> user : users.entrySet()){
            System.out.println(user.getKey());
            System.out.println(user.getValue());
        }

        // 7. Imprime los numeros del 10 al 1 (descendiente) con un bucle for.
        for(i = 10; i >= 1; i--){
            System.out.println(i);
        }

        // 8. Usa continue para saltar los multiplos de 3 del 1 al 20.
        for(i = 1; i <= 20; i++){
            if(i%3 == 0){
                continue;
            }
            System.out.println(i);
        }

        // 9. Usa break para detener un bucle cuando encuentres un numero negativo en un
        // array.
        for(i=0; i<numbers.length; i++){
            if(numbers[i] < 0){
                break;
            }
            System.out.println(numbers[i]);
        }

        // 10. Crea un programa que calcule el factorial de un numero dado.
        int num = 5;
        long factorial = 1;

        System.out.println("Calculando el factorial de " + num + ":");
        for (i = 1; i <= num; i++) {
            factorial *= i;
            System.out.println(i + "! = " + factorial);
        }
        System.out.println("El factorial de " + num + " es: " + factorial);
    }
}
