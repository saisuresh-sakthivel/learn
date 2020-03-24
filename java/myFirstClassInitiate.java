import javax.swing.JOptionPane;
class MyClass{
	enum MyClassSize{SMALL, MEDIUM, LARGE}
	MyClassSize size;
}
public class MyFirstClassInitiate {
  public static void main(String []args){
     MyClass itemSize = new MyClass();
	 itemSize.size = MyClass.MyClassSize.LARGE;
	 System.out.println("Size : "+itemSize.size);
	 JOptionPane.showMessageDialog(null, "alert", "alert", JOptionPane.ERROR_MESSAGE);
  }
}