package basic.c08_oop;

public class Device {
    String name;

    public Device(String name){
        this.name = name;
        System.out.println("Device created");
    }
}

class Phone extends Device{
    public Phone(String name) {
        super(name);
        System.out.println("Phone ready");
    }
}