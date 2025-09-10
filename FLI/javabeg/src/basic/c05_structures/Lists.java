package basic.c05_structures;

import java.util.ArrayList;

public class Lists {
    public static void main(String[] args) {

        //declaracion y creacion
        ArrayList<String> names = new ArrayList<>();
        var numbers = new ArrayList<Integer>();

        //tamaño
        System.out.println(names.size());

        //añadir elementos
        names.add("crisketo");
        names.add("fayhuahua");
        names.add("lilith");
        System.out.println(names.size());

        //acceder a los elementos
        System.out.println(names.get(0)); //en java21 esta getFirst()
        System.out.println(names.get(names.size()-1)); //en java21 esta getLast()

        //modificar elementos
        names.set(0, "cristina");
        names.set(1, "fay");

        //eliminar elementos
        names.remove(2);
        //System.out.println(names.get(2)); error

        //buscar elementos
        System.out.println(names.contains("fay"));
        System.out.println(names.contains("fayhuahua"));

        //limpiar
        names.clear();
    }
}
