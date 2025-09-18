package basic.c01_beginner;

public class BeginnerExercises {
    public static void main(String[] args) {
        // 1. Declara una variable de tipo String y asignale tu nombre.
        String name = "cris";
        System.out.println("mi nombre es "+name);

        // 2. Crea una variable de tipo int y asignale tu edad.
        int age = 27;
        System.out.println("tengo "+age+" años");

        // 3. Crea una variable double con tu altura en metros.
        double height = 1.68;
        System.out.println("mido "+height+" metros");

        // 4. Declara una variable de tipo boolean que indique si te gusta programar.
        boolean likeProgramming = true;
        System.out.println("¿me gusta programar? "+likeProgramming);

        // 5. Declara una constante con tu email.
        final String MY_EMAIL = "cris@dev.es";

        // 6. Crea una variable de tipo char y guardale tu inicial.
        char myInitial = 'c';
        System.out.println("mi nombre empieza por "+myInitial);

        // 7. Declara una variable de tipo String con tu localidad, y a continuacion
        // cambia su valor y vuelve a imprimirla.
        String myLocality = "burjasot";
        System.out.println("vivo en "+myLocality);
        myLocality = "burjassot";
        System.out.println("bueno, se escribe "+myLocality);

        // 8. Crea una variable int llamada a, otra b, e imprime la suma de ambas.
        int a = 7;
        int b = 6;
        System.out.println("la suma de "+a+" y "+b+" es= "+(a+b));

        // 9. Imprime el tipo de dos variables creadas anteriormente.
        var typeA = ((Object)a).getClass().getSimpleName();
        var typeB = ((Object)b).getClass().getSimpleName();
        System.out.println("el tipo de variable de a es: "+typeA);
        System.out.println("el tipo de variable de b es: "+typeB);

        // 10. Intenta declarar una variable sin inicializarla y luego asignale un valor
        // antes de imprimirla.
        String herName;
        herName = "fay";
        System.out.println(herName);
    }
}
