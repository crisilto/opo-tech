package basic.c05_structures;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
import java.util.Map;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.HashSet;


public class Structures {
    public static void main(String[] args) {

        // ======================
        // ARRAYS
        // ======================
        System.out.println("=== ARRAYS ===");
        // Declaración directa
        String[] array = {"cris", "fay", "linkin park"};
        System.out.println(Arrays.toString(array)); // [cris, fay, linkin park]
        array[0] = "nuevo"; // se puede modificar posiciones
        System.out.println(Arrays.toString(array)); // [nuevo, fay, linkin park]
        // ⚠️ no se puede cambiar el tamaño del array una vez creado


        // ======================
        // LIST
        // ======================
        System.out.println("\n=== LIST ===");
        // Mutable (más usada en proyectos)
        List<String> listMutable = new ArrayList<>();
        listMutable.add("cris");
        listMutable.add("fay");
        System.out.println(listMutable); // [cris, fay]
        listMutable.add("linkin park");  // se puede seguir añadiendo
        System.out.println(listMutable); // [cris, fay, linkin park]

        // Inmutable (List.of) - desde Java 9
        List<String> listImmutable = List.of("cris", "fay", "linkin park");
        System.out.println(listImmutable); // [cris, fay, linkin park]
        // listImmutable.add("nuevo"); // ❌ UnsupportedOperationException


        // ======================
        // SET
        // ======================
        System.out.println("\n=== SET ===");
        // Mutable con HashSet
        Set<String> setMutable = new HashSet<>();
        setMutable.add("cris");
        setMutable.add("fay");
        setMutable.add("cris"); // duplicado, no se guarda dos veces
        System.out.println(setMutable); // [cris, fay] (sin duplicados)

        // Inmutable con Set.of
        Set<String> setImmutable = Set.of("cris", "fay", "linkin park");
        System.out.println(setImmutable); // [cris, fay, linkin park]
        // setImmutable.add("nuevo"); // ❌ UnsupportedOperationException
        // Set.of("cris", "cris"); // ❌ IllegalArgumentException (no permite duplicados)


        // ======================
        // MAP
        // ======================
        System.out.println("\n=== MAP ===");
        // Mutable con HashMap
        Map<Integer, String> mapMutable = new HashMap<>();
        mapMutable.put(1, "cris");
        mapMutable.put(2, "fay");
        mapMutable.put(3, "linkin park");
        System.out.println(mapMutable); // {1=cris, 2=fay, 3=linkin park}
        mapMutable.put(2, "nuevo valor"); // se sobrescribe la clave 2
        System.out.println(mapMutable); // {1=cris, 2=nuevo valor, 3=linkin park}

        // Inmutable con Map.of
        Map<Integer, String> mapImmutable = Map.of(
                1, "cris",
                2, "fay",
                3, "linkin park"
        );
        System.out.println(mapImmutable); // {1=cris, 2=fay, 3=linkin park}
        // mapImmutable.put(4, "nuevo"); // ❌ UnsupportedOperationException
    }
}
