package basic.c03_strings;

public class Strings {
    public static void main(String[] args) {

        //cadena de texto
        String name = "cristina";
        String surname = new String("silvestre"); //redundante

        //operaciones basicas

        //concatenar
        System.out.println(name+" "+surname);

        //longitud
        System.out.println(name.length());

        //obtener caracter
        char inicial = name.charAt(0);
        System.out.println(inicial);
        char ultima = name.charAt(name.length()-1);
        System.out.println(ultima);

        //subcadena (cristina)
        System.out.println(name.substring(2)); //istina
        System.out.println(name.substring(1,3)); //ri

        //mayusc y minusc
        System.out.println(name.toUpperCase());
        System.out.println(name.toLowerCase());

        //comprobar si contiene
        System.out.println("Hola, Java".contains("HOLA"));
        System.out.println("Hola, Java".toUpperCase().contains("HOLA"));

        //comparacion
        System.out.println(name.equals("cristina"));
        System.out.println(name.equals("CRIStina"));
        System.out.println(name.toUpperCase().equals("CRISTINA"));
        System.out.println(name.equalsIgnoreCase("crisTiNa"));

        // == vs equals
        var a = "cris";
        var b = "cris";
        var c = new String("cris");

        System.out.println(a == b);
        System.out.println(a == c);
        System.out.println(a.equals(c));

        //trim
        System.out.println(" Hola, me llamo Cris ".trim()); //limpia espacio al principio y final

        //replace
        System.out.println(" Hola, me llamo Cris ".replace(" ", ""));
        System.out.println(" Hola, me llamo Cris ".replace("Cris", "Crisketo").trim());

        //format
        var age = 27;
        System.out.println(String.format("Hola me llamo %s. Tengo %d años", name, age));
    }
}
