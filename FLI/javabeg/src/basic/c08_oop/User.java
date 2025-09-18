package basic.c08_oop;

import java.util.Objects;

public class User {
    private String username;
    private String password;

    public User(String username, String password){
        this.username = username;
        this.password = password;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public boolean checkPassword(String inputPassword){
        return Objects.equals(inputPassword, password);
    }

    // Getter opcional
    public String getUsername() {
        return username;
    }
}