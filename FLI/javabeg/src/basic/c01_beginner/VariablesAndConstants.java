package basic.c01_beginner;

public class VariablesAndConstants {
    public static void main(String[] args) {
        //variables
        String name = "cris";
        int age = 27;
        System.out.println("me llamo "+name+" y tengo "+age+" años.");
        var inLove = true;
        //inLove = 23; var autoasigna el tipo cuando se crea, luego no se puede modificar (como de normal)

        //constantes
        final String MY_EMAIL = "crisilto@dev.es";
        System.out.println(MY_EMAIL);
    }
}
