package basic.c10_extras;

import java.util.Scanner;

public class Extras {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        System.out.println("introduce tu nombre");
        var name = scanner.nextLine();
        System.out.println("introduce tu edad");
        var age = scanner.nextInt();
        System.out.println("nombre: "+name+", edad: "+age);
    }
}
