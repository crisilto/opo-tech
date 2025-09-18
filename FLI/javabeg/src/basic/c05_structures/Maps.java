package basic.c05_structures;

import java.util.HashMap;

public class Maps {
    public static void main(String[] args) {

        //declaracion y creacion
        HashMap<String, String> names = new HashMap();
        var numbers = new HashMap<Integer, String>();

        //tamaño
        System.out.println(names.size());

        //añadir elementos
        names.put("cris", "cris@gmail.es");
        names.put("fay", "fay@gmail.es");
        names.put("lilith", "lilith@gmail.es");
        System.out.println(names.size());
        System.out.println(names);

        //acceder a los elementos
        System.out.println(names.get("fay"));
        System.out.println(names.get("fayhuahua")); //no existe -> devuelve null

        //verificar elementos
        System.out.println(names.containsKey("fay"));
        System.out.println(names.containsKey("fayhuahua"));
        System.out.println(names.containsValue("fay@gmail.es"));
        System.out.println(names.containsValue("fayhuahua@gmail.es"));

        //eliminar elementos
        System.out.println(names.remove("cris"));
        System.out.println(names);

        //limpiar hashmap
        names.clear();
        System.out.println(names);

        //otras operaciones
        names.put("lilith", "lilith@gmail.es");
        names.put("lilith", "lilith@gmail.es");
        System.out.println(names);
        names.put("lilith", "lilith1@gmail.es"); //si una clave ya existe, le actualiza el valor
        System.out.println(names);

        names.replace("fay", "fayhuahua@gmail.es"); //reemplaza el valor si existe
        System.out.println(names);

        names.putIfAbsent("fay", "fayhuahua@gmail.es"); //inserta clave-valor si no existe
        System.out.println(names);

        System.out.println(names.isEmpty()); //comprobar si está vacío o no el hash
        System.out.println(names.keySet()); //devuelve solo la lista de las claves
        System.out.println(names.values()); //devuelve solo la lista de los valores
    }
}
