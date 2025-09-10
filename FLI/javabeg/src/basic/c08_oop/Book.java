package basic.c08_oop;

public class Book {
    private String title;
    String author;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
    }

    public String getTitle(){
        return title;
    }

    public void showInfo() {
        System.out.println("Libro: '" + title + "' por " + author);
    }
}
