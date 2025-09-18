package basic.c10_extras;

import java.util.Random;
import java.util.Scanner;

public class ExtrasExercises {
    static String message = "mensaje global";
    static int nunber = 13;
    public static void main(String[] args) {
        // 1. Crea una variable de tipo String inicializada como null y verifica que no
        // estÃ© vacÃ­a antes de usarla.
        String myNull = null;
        if(myNull != null){
            System.out.println(myNull.toUpperCase());
        }else{
            System.out.println("la variable es null");
        }
        String myNotNull = "not null";
        if(myNotNull != null){
            System.out.println(myNotNull.toUpperCase());
        }else{
            System.out.println("la variable es null");
        }

        // 2. Escribe un programa que lea el nombre y edad del usuario usando Scanner.
        var scanner = new Scanner(System.in);
        System.out.println("nombre: ");
        var name = scanner.nextLine();
        System.out.println("edad: ");
        var age = scanner.nextInt();
        System.out.println("nombre: "+name+", edad: "+age);

        // 3. Declara una constante final llamada MAX_SCORE con valor 100 y muÃ©strala.
        final int MAX_SCORE = 100;
        System.out.println("constannte max score: "+MAX_SCORE);

        // 4. Crea una variable global message y otra local message dentro del mÃ©todo
        // main(). Muestra ambas.
        String message = "mensaje local";
        System.out.println(message);
        test();

        // 5. Usa import java.util.Scanner; para leer un nÃºmero y mostrar si es positivo
        // o negativo.
        System.out.println("introduce un num: ");
        var num = scanner.nextInt();
        if(num >= 0){
            System.out.println("el numero es positivo");
        }else{
            System.out.println("el numero es negativo");
        }

        // 6. Declara una variable static en una clase y accede a ella desde main() sin
        // crear un objeto.
        System.out.println(nunber);

        // 7. Importa java.util.Random y genera un nÃºmero aleatorio del 1 al 10.
        Random random = new Random();
        int randomNumber = random.nextInt(10)+1;
        System.out.println(randomNumber);

        // 8. Crea una clase con comentarios adecuados explicando cada secciÃ³n del
        // cÃ³digo.
        DocumentedClass documentedExample = new DocumentedClass();
        documentedExample.showInfo();

        // 9. Define una clase User con una constante APP_NAME, una variable global
        // username y una funciÃ³n que imprima ambas.
        User user = new User();
        user.setUsername("crisilto");
        user.displayInfo();

        // 10. Haz debug del cÃ³digo implementado haciendo uso de sus diferentes
        // herramientas.
        debugExample();

        scanner.close();
    }

    public static class User{
        public static final String APP_NAME = "MiApp Java";
        private String username;

        public User() {
            this.username = "usuario_default";
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getUsername() {
            return username;
        }

        public void displayInfo() {
            System.out.println("Aplicación: " + APP_NAME);
            System.out.println("Usuario: " + username);
        }
    }
    public static void test(){
        System.out.println(message);
    }

    public static class DocumentedClass {

        private String info;

        public DocumentedClass() {
            this.info = "Información de ejemplo";
        }

        public void showInfo() {
            System.out.println("Info desde clase documentada: " + info);
        }
    }

    public static void debugExample() {
        int a = 5;
        int b = 10;
        int result = a + b;

        // Puntos de debug típicos:
        System.out.println("Debug: a = " + a); // Verificar valor de a
        System.out.println("Debug: b = " + b); // Verificar valor de b
        System.out.println("Debug: resultado = " + result); // Verificar resultado

        // Para debug real, poner breakpoints en estas líneas
        if (result > 10) {
            System.out.println("El resultado es mayor que 10");
        }
    }
}
