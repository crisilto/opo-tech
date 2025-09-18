package basic.c05_structures;

import java.util.HashSet;

public class Sets {
    public static void main(String[] args) {

        //declaracion y creacion
        HashSet<String> names = new HashSet<>();
        var numbers = new HashSet<Integer>();

        //tamaño
        System.out.println(names.size());

        //añadir elementos
        names.add("cristina");
        names.add("fay");
        names.add("lilith");
        System.out.println(names.size());

        //acceder a los elementos / modificar elementos
        //no existe orden, la manera en la que se indexa es con un hash no con un indice, de manera random
        //tampoco voy a poder modificarlos

        //eliminar elementos
        names.remove("cristina");
        names.remove("cris");

        System.out.println(names.contains("fay"));
        System.out.println(names.contains("FAY"));

        System.out.println(names);
        names.add("fay");
        names.add("fay");
        names.add("fay");
        System.out.println(names); //no permite repetidos

        var countries = new HashSet<String>();
        countries.add("spain");
        countries.add("chile");
        countries.add("germany");
        countries.add("fay");

        names.addAll(countries);
        System.out.println(names);

        //names.removeAll(countries);
        names.retainAll(countries);
        System.out.println(names);
    }
}
