package basic.c05_structures;

import java.util.*;

public class StructuresInit {
    public static void main(String[] args) {

        //array

        //forma directa
        int[]numbers = {1,2,3,4,5};
        //forma con new
        String[] names = new String[]{"cris", "fay", "lilith"};
        //los arrays siempre son mutables->puedes reasignar posiciones
        //names[0] = "nuevo", pero no puedes cambiar el tamaño

        //list

        //inmutable, lo mas simple y rápido
        List<String> list = List.of("cris", "fay", "linkin park"); //no se puede usar .add()
        //mutable->con java17 es la forma más limpia de tener una lista modificable
        List<String> listMut = new ArrayList<>(List.of("cris", "fay", "linkin park"));
        listMut.add("nuevo");

        //set

        //inmutable->no acepta duplicados, lanza error en compilación
        Set<String> set = Set.of("cris", "fay", "linkin park");
        //mutable
        Set<String> setMut = new HashSet<>(Set.of("cris", "fay", "linkin park"));
        setMut.add("nuevo");

        //map

        //inmutable
        Map<Integer, String> map = Map.of( //Map.of() solo soporta hasta 10 pares clave-valor
                1, "cris",
                2, "fay",
                3, "linkin park"
        );
        Map<Integer, String> bigMap = Map.ofEntries( //para más de 10
                Map.entry(1, "cris"),
                Map.entry(2, "fay"),
                Map.entry(3, "fay"),
                Map.entry(4, "fay"),
                Map.entry(5, "fay"),
                Map.entry(6, "fay"),
                Map.entry(7, "fay"),
                Map.entry(8, "fay"),
                Map.entry(9, "fay"),
                Map.entry(10, "fay"),
                Map.entry(11, "fay")
        );
        //mutable
        Map<Integer, String> mapMut = new HashMap<>(Map.of(
                1, "cris",
                2, "fay"
        ));
        mapMut.put(3, "nuevo");
    }
}
