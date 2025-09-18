package basic.c00_helloworld;

public class HelloWorldExercises { //esto genera la clase
    public static void main(String[] args) { //metodo main para poder arrancar el programa
//1. Imprime un mensaje que diga tu nombre en lugar de "¡Hola Mundo!
        System.out.println("crisketo"); //ejercicio 1
//2. Imprime dos líneas: "Hola" y luego "Mundo" con un solo println.
        System.out.println("hola\nmundo"); //ejercicio 2
//3. Añade un comentario sobre lo que hace cada línea del programa.

//4. Crea un comentario en varias líneas.
        /*
         * este
         * comentario
         * tiene varias lineas
         */
//5. Imprime tu edad, tu color favorito y tu ciudad.
        int edad = 27;
        String color = "negro";
        String ciudad = "valencia";
        System.out.println("Edad: " + edad + ", Color: " + color + ", Ciudad: " + ciudad);
//6. Explora los diferentes System.XXX.println(); más allá de "out".
        /*
        1. System.out (salida estándar)
            Qué es: El flujo de salida estándar, normalmente la consola.
            Uso típico: System.out.println("Hola mundo")
            Cuándo usarlo: Cuando quieres mostrar información normal al usuario.
        2. System.err (salida de errores)
            Qué es: El flujo de salida de errores.
            Diferencia con out: Aunque en la mayoría de consolas parece lo mismo, se envía por un canal distinto. Esto permite separar mensajes normales de mensajes de error.
            Uso típico:
                System.err.println("Error: archivo no encontrado");
            Cuándo usarlo: Cuando quieres mostrar advertencias o errores sin mezclarlos con la salida normal (útil si otra aplicación está leyendo la salida estándar).
        3. System.in (entrada estándar)
            Qué es: El flujo de entrada, normalmente el teclado.
            No se usa con println, sino para leer datos.
            Uso típico (con Scanner):
                Scanner sc = new Scanner(System.in);
                System.out.print("Escribe tu nombre: ");
                String nombre = sc.nextLine();
            Cuándo usarlo: Para recibir datos desde la consola.
         */

//7. Utiliza varios println para imprimir una frase.
        System.out.println("una");
        System.out.println("frase");
//8. Imprime un diseño ASCII (por ejemplo, una cara feliz usando símbolos).
        System.out.println("  O   O  ");
        System.out.println("    ^    ");
        System.out.println("  \\___/  ");
//9. Intenta ejecutar el programa sin el metodo main y observa el error.
        /*
         * NOTA: Si eliminas el metodo main, obtendras un error.
         * El metodo main es el punto de entrada de cualquier aplicacion Java.
         */
//10. Intenta cambiar el nombre del archivo a uno diferente del de la clase y compílalo. ¿Qué pasa?
     /*
     NOTA: En Java, el nombre del archivo debe coincidir exactamente con el nombre de la clase publica.
     Si cambias el nombre del archivo, obtendras un error de compilacion.
      */
    }
}