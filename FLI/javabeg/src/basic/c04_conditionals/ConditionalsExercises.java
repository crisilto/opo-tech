package basic.c04_conditionals;

public class ConditionalsExercises {
    public static void main(String[] args) {
        // 1. Establece la edad de un usuario y muestra si puede votar (mayor o igual a
        // 18).
        int age = 16;
        int neededAge = 18;
        boolean canVote = age >= neededAge;
        if(canVote){
            System.out.println("puede votar");
        }else{
            System.out.println("no puede votar");
        }

        // 2. Declara dos numeros y muestra cual es mayor, o si son iguales.
        int n1 = 13;
        int n2 = 6;
        if(n1 > n2){
            System.out.println(n1+" es mayor que "+n2);
        }else if(n1 < n2){
            System.out.println(n2+" es mayor que "+n1);
        }else{
            System.out.println("son iguales");
        }

        // 3. Dado un numero, verifica si es positivo, negativo o cero.
        int n = -1;
        if(n > 0){
            System.out.println(n+" es positivo");
        } else if (n < 0) {
            System.out.println(n+" es negativo");
        }else{
            System.out.println(n+" es cero");
        }

        // 4. Crea un programa que diga si un numero es par o impar.
        int numero = 7;
        if(numero % 2 == 0){
            System.out.println(numero+" es par");
        }else{
            System.out.println(numero+" es impar");
        }

        // 5. Verifica si un numero esta en el rango de 1 a 100.
        if(numero >= 1 && numero <= 100){
            System.out.println(numero+" esta entre 1 y 100");
        }else{
            System.out.println(numero+" no está entre 1 y 100");
        }

        // 6. Declara una variable con el dia de la semana (1-7) y muestra su nombre con
        // switch.
        int dia = 1;
        switch (dia){
            case 1:
                System.out.println("lunes");
                break;
            case 2:
                System.out.println("martes");
                break;
            case 3:
                System.out.println("miercoles");
                break;
            case 4:
                System.out.println("jueves");
                break;
            case 5:
                System.out.println("viernes");
                break;
            case 6:
                System.out.println("sabado");
                break;
            case 7:
                System.out.println("domingo");
                break;
            default:
                System.out.println("tiene que ser un numero entre el 1 y el 7");
        }

        // 7. Simula un sistema de notas: muestra "Sobresaliente", "Aprobado" o
        // "Suspenso" segun la nota (0-100).
        int nota = 88;
        if(nota >= 90 && nota <= 100){
            System.out.println("sobresaliente");
        }else if(nota >=50 && nota < 90){
            System.out.println("aprobado");
        } else if (nota <50 && nota >= 0) {
            System.out.println("suspenso");
        }else{
            System.out.println("nota invalida");
        }

        // 8. Escribe un programa que determine si puedes entrar al cine: debes tener al
        // menos 15 años o ir acompañado.
        int cinemaAge = 10;
        boolean isAccompanied = true;
        if(cinemaAge > 15 || isAccompanied){
            System.out.println("puede entrar al cine");
        }else{
            System.out.println("no puede entrar al cine");
        }

        // 9. Crea un programa que diga si una letra es vocal o consonante.
        char letra = 'c';
        char letraMin = Character.toLowerCase(letra);
        if(letraMin == 'a' || letraMin == 'e' || letraMin == 'i' || letraMin == 'o' || letraMin == 'u'){
            System.out.println("la letra "+letra+" es una vocal");
        } else if (Character.isLetter(letraMin)) {
            System.out.println("la letra "+letra+" es una consonante");
        }else{
            System.out.println("la letra "+letra+" no es una letra valida");
        }

        // 10. Usa tres variables a, b, c y muestra cual es el mayor de las tres.
        int a = 66;
        int b = 88;
        int c = -42;

        if (a >= b && a >= c) {
            System.out.println("El mayor es 'a' con valor: " + a);
        } else if (b >= a && b >= c) {
            System.out.println("El mayor es 'b' con valor: " + b);
        } else {
            System.out.println("El mayor es 'c' con valor: " + c);
        }
    }
}
