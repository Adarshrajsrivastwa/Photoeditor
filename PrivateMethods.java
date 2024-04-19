import java.util.*;
interface Myinterface{
    default void print(){
        System.out.println("This is a default method");
    message();
    detail();
}
  private void message() {
      System.out.println("This is a private method");
  }
  private static void detail(){
      System.out.println("This is a private static method");
  }
}
class PrivateMethods implements Myinterface{
    public static void main(String args[]){
        PrivateMethods obj=new PrivateMethods();
        obj.print();
    }
}