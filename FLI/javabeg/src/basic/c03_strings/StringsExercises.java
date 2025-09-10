package basic.c03_strings;

public class StringsExercises {
    public static void main(String[] args) {

        // 1. Concatena dos cadenas de texto.
        String str1 = "hola";
        String str2 = "mundo";
        String str3 = str1+" "+str2;
        System.out.println(str3);

        // 2. Muestra la longitud de una cadena de texto.
        System.out.println(str1.length());

        // 3. Muestra el primer y ultimo carÃ¡cter de un string.
        System.out.println(str1.charAt(0));
        System.out.println(str1.charAt(str1.length()-1));

        // 4. Convierte a mayusculas y minusculas un string.
        System.out.println(str1.toUpperCase());
        System.out.println(str1.toLowerCase());

        // 5. Comprueba si una cadena de texto contiene una palabra concreta.
        System.out.println(str3.contains("MUNDO"));
        System.out.println(str3.toUpperCase().contains("MUNDO"));

        // 6. Formatea un string con un entero.
        String name = "crisketo";
        int age = 27;
        System.out.println(String.format("Me llamo %s y tengo %d años", name, age));
        System.out.printf("Usando printf: %s tiene %d años.", name, age);

        // 7. Elimina los espacios en blanco al principio y final de un string.
        System.out.println("  holaaaa  ".trim());

        // 8. Sustituye todos los espacios en blanco de un string por un guion (-)
        System.out.println("h o l a".replace(" ", "-"));

        // 9. Comprueba si dos strings son iguales.
        String string1 = "Java";
        String string2 = "Java";
        String string3 = new String("Java");
        String string4 = "java";

        System.out.println("string1.equals(string2): " + string1.equals(string2));
        System.out.println("string1.equals(string3): " + string1.equals(string3));
        System.out.println("string1.equals(string4): " + string1.equals(string4));
        System.out.println("string1.equalsIgnoreCase(string4): " + string1.equalsIgnoreCase(string4));

        // Diferencia entre == y equals
        System.out.println("string1 == string2: " + (string1 == string2));
        System.out.println("string1 == string3: " + (string1 == string3));

        // 10. Comprueba si dos strings tienen la misma longitud.
        String word1 = "fay";
        String word2 = "lys";
        String word3 = "cris";

        boolean sameLength1 = word1.length() == word2.length();
        boolean sameLength2 = word1.length() == word3.length();

        System.out.println("'" + word1 + "' y '" + word2 + "' tienen la misma longitud: " + sameLength1);
        System.out.println("'" + word1 + "' y '" + word3 + "' tienen la misma longitud: " + sameLength2);
        System.out.println("Longitud de '" + word1 + "': " + word1.length());
        System.out.println("Longitud de '" + word2 + "': " + word2.length());
        System.out.println("Longitud de '" + word3 + "': " + word3.length());
    }
}
