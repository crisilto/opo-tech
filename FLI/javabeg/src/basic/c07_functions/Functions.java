package basic.c07_functions;

import java.util.ArrayList;
import java.util.Arrays;

public class Functions {
    public static void main(String[] args) {
        for (int i = 0; i < 5; i++) {
            sendEmail();
        }

        //...
        sendEmail();

        sendEmailToUser("fay@gmail.es");
        sendEmailToUser("cris@gmail.es", "cris");

        var users = new ArrayList<>(Arrays.asList("cris", "fay"));
        sendEmailToUser(users);

        var state = sendEmailWithState("fay@gmail.es");
        System.out.println(state);
        System.out.println(sendEmailWithState(""));
    }

    //funciones sin retorno

    public static void sendEmail(){
        System.out.println("email enviado");
    }

    public static void sendEmailToUser(String email){
        System.out.println("email enviado a " + email);
    }

    //sobrecarga -> mismo nombre de función pero con un contenido diferente
    //la sobrecarga no funciona si se cambia el tipo de dato que retorna
    public static void sendEmailToUser(String email, String name){
        System.out.println("email enviado a " + name + " ("+email+")");
    }

    public static void sendEmailToUser(ArrayList<String> emails){
        for (String email : emails){
            sendEmailToUser(email);
        }
    }

    //funciones con retorno
    public static boolean sendEmailWithState(String email){
        if(email.isEmpty()){
            return false;
        }
        System.out.println("email enviado a "+email);
        return true;
    }
}
