import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

// Base User class
abstract class User {
    protected String name;
    protected String email;

    public User(String name, String email) {
        this.name = name;
        this.email = email;
    }

    public abstract void displayDashboard();
}

// Admin class
class Admin extends User {
    public Admin(String name, String email) {
        super(name, email);
    }

    @Override
    public void displayDashboard() {
        System.out.println("Admin Dashboard");
        // Admin functionalities
        System.out.println("1. User Management");
        System.out.println("2. Course Management");
        System.out.println("3. Performance Analytics");
        System.out.println("4. System Settings");
        System.out.println("5. System Activity Monitoring");
    }
}

// Instructor class
class Instructor extends User {
    public Instructor(String name, String email) {
        super(name, email);
    }

    @Override
    public void displayDashboard() {
        System.out.println("Instructor Dashboard");
        // Instructor functionalities
        System.out.println("1. Course Management");
        System.out.println("2. Assignment Grading");
        System.out.println("3. Student Performance");
        System.out.println("4. Course Enrollment Stats");
        System.out.println("5. Feedback Summary");
    }
}

// Student class
class Student extends User {
    public Student(String name, String email) {
        super(name, email);
    }

    @Override
    public void displayDashboard() {
        System.out.println("Student Dashboard");
        // Student functionalities
        System.out.println("1. Course Enrollment");
        System.out.println("2. Material Access");
        System.out.println("3. Assignment Submission");
        System.out.println("4. Progress Tracking");
        System.out.println("5. Feedback and Grades");
    }
}

// LMS class to run the application
public class LMS {
    private List<User> users = new ArrayList<>();

    public void addUser (User user) {
        users.add(user);
        System.out.println("User  added: " + user.name);
    }

    public void displayUser Dashboards() {
        for (User  user : users) {
            user.displayDashboard();
            System.out.println();
        }
    }

    public static void main(String[] args) {
        LMS lms = new LMS();
        Scanner scanner = new Scanner(System.in);

        // Sample users
        lms.addUser (new Admin("Alice", "alice@example.com"));
        lms.addUser (new Instructor("Bob", "bob@example.com"));
        lms.addUser (new Student("Charlie", "charlie@example.com"));

        // Display dashboards
        lms.displayUser Dashboards();

        scanner.close();
    }
}
