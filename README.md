LMS Dashboard
This repository contains a Learning Management System (LMS) Dashboard that allows the management of users with different roles (Admin, Instructor, Student). The project demonstrates user-specific dashboards and interactive features for adding and managing users.

Project Structure
index.html
The main HTML file that structures the LMS Dashboard. It includes sections for adding users and displaying user-specific dashboards.

styles.css
Provides styling for the project, including form design, dashboard appearance, and overall layout.

script.js
Implements the functionality of the LMS Dashboard. This includes classes for different user roles, dynamic creation of dashboards, and form handling for adding users.

Features
Role-Based Dashboards

Admin: User Management, Course Management, Performance Analytics, System Settings, and Activity Monitoring.
Instructor: Course Management, Assignment Grading, Student Performance, Enrollment Stats, and Feedback Summary.
Student: Course Enrollment, Material Access, Assignment Submission, Progress Tracking, and Feedback/Grades.
Interactive User Management

Add users with a specific role and view their corresponding dashboards dynamically.
Responsive Design

Styled with CSS to ensure a clean and modern look across devices.
How to Run
Clone this repository:
bash
Copy code
git clone [repository_url]
Open the index.html file in your preferred web browser.
Alternatively, serve the project using a local server (e.g., Python's HTTP server):
bash
Copy code
python3 -m http.server
Usage
Open the LMS Dashboard in a browser.
Use the "Add User" form to input:
Name
Email
Role (Admin, Instructor, Student)
Click "Add User" to generate a personalized dashboard for the new user, displayed under the "User Dashboards" section.
