class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  displayDashboard() {
    return "Default Dashboard";
  }
}
class Admin extends User {
  displayDashboard() {
    return `
      <h3>Admin Dashboard</h3>
      <ul>
        <li>User Management</li>
        <li>Course Management</li>
        <li>Performance Analytics</li>
        <li>System Settings</li>
        <li>System Activity Monitoring</li>
      </ul>
    `;
  }
}
class Instructor extends User {
  displayDashboard() {
    return `
      <h3>Instructor Dashboard</h3>
      <ul>
        <li>Course Management</li>
        <li>Assignment Grading</li>
        <li>Student Performance</li>
        <li>Course Enrollment Stats</li>
        <li>Feedback Summary</li>
      </ul>
    `;
  }
}
class Student extends User {
  displayDashboard() {
    return `
      <h3>Student Dashboard</h3>
      <ul>
        <li>Course Enrollment</li>
        <li>Material Access</li>
        <li>Assignment Submission</li>
        <li>Progress Tracking</li>
        <li>Feedback and Grades</li>
      </ul>
    `;
  }
}
class LMS {
  constructor() {
    this.users = [];
  }

  addUser(user) {
    this.users.push(user);
    this.updateDashboards();
  }

  updateDashboards() {
    const container = document.getElementById("dashboard-container");
    container.innerHTML = ""; // Clear previous content

    this.users.forEach((user) => {
      const dashboard = document.createElement("div");
      dashboard.className = "dashboard";
      dashboard.innerHTML = `
        <h2>${user.name} (${user.email})</h2>
        ${user.displayDashboard()}
      `;
      container.appendChild(dashboard);
    });
  }
}
const lms = new LMS();

document.getElementById("add-user-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const role = document.getElementById("role").value;

  let user;
  if (role === "Admin") {
    user = new Admin(name, email);
  } else if (role === "Instructor") {
    user = new Instructor(name, email);
  } else if (role === "Student") {
    user = new Student(name, email);
  }

  lms.addUser(user);

  // Clear form inputs
  document.getElementById("add-user-form").reset();
});
