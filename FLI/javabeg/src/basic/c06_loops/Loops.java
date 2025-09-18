package basic.c06_loops;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;

public class Loops {
    public static void main(String[] args) {

        //loops

        //for -> controlado por contador
        for (int i = 0; i < 5; i++) {
            System.out.println("Hola, Java!");
        }

        String[] names = {"cris", "crisketo", "fay"};
        for (int i = 0; i < names.length; i++){
            System.out.println(names[i]);
        }

        //foreach
        for(String name : names){
            System.out.println(name);
        }

        HashSet<Integer> numbers = new HashSet<>();
        numbers.add(3);
        numbers.add(13);
        numbers.add(2);
        numbers.add(12);
        for(Integer number : numbers){
            System.out.println(number);
        }

        HashMap<String, String> emails = new HashMap<>();
        emails.put("cris", "cris@gmail.es");
        emails.put("fay", "fay@gmail.es");
        emails.put("lilith", "lilith@gmail.es");

        for(Map.Entry<String, String> email : emails.entrySet()){
            System.out.println(email.getKey());
            System.out.println(email.getValue());
        }

        //while
        int index = 0;
        while (index<5){
            System.out.println("Hola, Java!");
            index++;
        }

        index = 0;
        while (index < names.length){
            System.out.println(names[index]);
            index++;
        }

        index = 0;
        boolean find = false;
        while (!find){
            System.out.println(names[index]);
            if(names[index].equalsIgnoreCase("CRISKETO")){
                find = true;
            }
            index++;
        }

        //dowhile
        index = 0;
        do{
            System.out.println("Hola, Java!");
            index++;
        }while (index < 0); //minimo 1 vez se va a ejecutar, y despues evaluará el criterio

        //control de bucles
        //break
        for(String name : names){
            if(name.equalsIgnoreCase("CRISKETO")){
                break;
            }
            System.out.println(name);
        }
        //continue
        for (int i = 0; i < 5; i++) {
            if(i == 3){
                continue; //se salta la ejecución del momento en el que i vale 3
            }
            System.out.println(i);
        }
    }
}
