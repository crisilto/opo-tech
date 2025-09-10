package basic.c05_structures;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;

public class StructuresExercises {
    public static void main(String[] args) {
        // 1. Crea un Array con 5 valores e imprime su longitud.
        int[] numbers = {13, 13, 5, 2, 10};
        System.out.println(numbers.length);

        // 2. Modifica uno de los valores del Array e imprime el valor del indice antes
        // y despues de modificarlo.
        System.out.println(numbers[2]);
        numbers[2] = 11;
        System.out.println(numbers[2]);

        // 3. Crea un ArrayList vacio.
        var names = new ArrayList<String>();

        // 4. Añade 4 valores al ArrayList y elimina uno a continuacion.
        names.add("cris");
        names.add("fay");
        names.add("crisketo");
        names.add("fayhuahua");
        System.out.println(names);
        names.remove("cris");
        System.out.println(names);

        // 5. Crea un HashSet con 2 valores diferentes.
        var employees = new HashSet<String>();
        employees.add("fay");
        employees.add("cris");

        // 6. Añade un nuevo valor repetido y otro sin repetir al HashSet.
        employees.add("fayhuahua");
        employees.add("cris");
        System.out.println(employees);

        // 7. Elimina uno de los elementos del HashSet.
        employees.remove("cris");
        System.out.println(employees);

        // 8. Crea un HashMap donde la clave sea un nombre y el valor el numero de
        // telefono. Añade tres contactos.
        var contacts = new HashMap<String, Integer>();
        contacts.put("cris", 666666);
        contacts.put("fay", 999999);
        contacts.put("lilith", 222222);

        // 9. Modifica uno de los contactos y elimina otro.
        contacts.replace("cris", 3333333);
        contacts.remove("lilith");
        System.out.println(contacts);

        // 10. Dado un Array, transformalo en un ArrayList, a continuacion en un HashSet
        // y finalmente en un HashMap con clave y valor iguales.
        // Array inicial
        String[] languages = { "Java", "Python", "JavaScript", "Java", "Kotlin", "Python" };
        System.out.println("Array original: " + java.util.Arrays.toString(languages));

        // Array a ArrayList
        ArrayList<String> languagesList = new ArrayList<>();
        for (String language : languages) {
            languagesList.add(language);
        }
        System.out.println("ArrayList: " + languagesList);
        System.out.println("Tamaño ArrayList: " + languagesList.size());

        // ArrayList a HashSet (elimina duplicados)
        HashSet<String> languagesSet = new HashSet<>(languagesList);
        System.out.println("HashSet (sin duplicados): " + languagesSet);
        System.out.println("Tamaño HashSet: " + languagesSet.size());

        // HashSet a HashMap (clave y valor iguales)
        HashMap<String, String> languagesMap = new HashMap<>();
        for (String language : languagesSet) {
            languagesMap.put(language, language);
        }
        System.out.println("HashMap (clave = valor): " + languagesMap);
        System.out.println("Tamaño HashMap: " + languagesMap.size());

        // Ejemplos adicionales de operaciones
        System.out.println("\n=== OPERACIONES ADICIONALES ===");

        // Verificar si contiene elementos
        System.out.println("¿El ArrayList contiene 'Java'? " + languagesList.contains("Java"));
        System.out.println("¿El HashSet contiene 'PHP'? " + languagesSet.contains("PHP"));
        System.out.println("¿El HashMap contiene la clave 'Python'? " + languagesMap.containsKey("Python"));

        // Obtener valores
        System.out.println("Primer elemento del ArrayList: " + languagesList.get(0));
        System.out.println("Ultimo elemento del ArrayList: " + languagesList.get(languagesList.size()-1));
        System.out.println("Valor de 'Java' en el HashMap: " + languagesMap.get("Java"));

        // Verificar si estan vacios
        System.out.println("¿Esta vacio el ArrayList? " + languagesList.isEmpty());
        System.out.println("¿Esta vacio el HashSet? " + languagesSet.isEmpty());
        System.out.println("¿Esta vacio el HashMap? " + languagesMap.isEmpty());
    }
}
