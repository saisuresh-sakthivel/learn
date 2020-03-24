import javax.swing.JOptionPane;
import java.util.TimerTask;
import java.util.Timer;
import java.util.Date;

/*public class MyTimer extends TimerTask {
  public void run(){
	  System.out.println("working at fixed rate");
  }
  public static void main(String []args){
	    TimerTask timerTask = new MyTimer();
        //running timer task as daemon thread
        Timer timer = new Timer(true);
        timer.scheduleAtFixedRate(timerTask, 500, 10*1000);
		System.out.println("TimerTask started");
  }

}*/

public class MyTimer {
    static Timer timer = new Timer();
    static int seconds = 0;

    public static void main(String[] agrs) {

        MyTimer();

    }
    public static void infoBox(String infoMessage, String titleBar)
    {
        JOptionPane.showMessageDialog(null, infoMessage, titleBar, JOptionPane.INFORMATION_MESSAGE);
    }
	
    public static void MyTimer() {
        TimerTask task;
        task = new TimerTask() {
            @Override
            public void run() { 
				Date date = new Date();
				infoBox("Drink Water","Alert");
			}
        };
        timer.schedule(task, 0, 30*60*1000);
    }
}