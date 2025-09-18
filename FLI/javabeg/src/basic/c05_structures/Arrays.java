package basic.c05_structures;

public class Arrays {
    public static void main(String[] args) {
        //declaracion y creacion
        int[] numbers = new int[3];
        System.out.println(numbers);

        String[] names = {"cris", "crisketo", "fay"};
        System.out.println(names);

        //acceso
        System.out.println(numbers[0]);
        System.out.println(names[0]);

        //modificacion
        numbers[0] = 1;
        numbers[1] = 10;
        
    }
}
