document.addEventListener("DOMContentLoaded", () => {
  const users = [];
  const courses = [];

  const userForm = document.getElementById("user-form");
  const userList = document.getElementById("user-list");

  const courseForm = document.getElementById("course-form");
  const courseList = document.getElementById("course-list");

  // Add User
  userForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const role = document.getElementById("role").value;

    const user = { name, email, role };
    users.push(user);

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${name} (${role})</span>
      <button class="delete">Delete</button>
    `;
    userList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () => {
      const index = users.indexOf(user);
      users.splice(index, 1);
      li.remove();
    });

    userForm.reset();
  });

  // Add Course
  courseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const courseName = document.getElementById("course-name").value;

    courses.push(courseName);

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${courseName}</span>
      <button class="delete">Delete</button>
    `;
    courseList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () => {
      const index = courses.indexOf(courseName);
      courses.splice(index, 1);
      li.remove();
    });

    courseForm.reset();
  });
});
