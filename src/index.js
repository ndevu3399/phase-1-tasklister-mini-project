document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = document.getElementById("new-task-description");
    const prioritySelect = document.getElementById("task-priority");
    const taskText = taskInput.value.trim();
    const priority = prioritySelect.value;

    if (taskText !== "") {
      const taskItem = document.createElement("li");
      taskItem.textContent = taskText;
      
      // Set priority color
      switch (priority) {
        case "high":
          taskItem.style.color = "red";
          break;
        case "medium":
          taskItem.style.color = "orange";
          break;
        case "low":
          taskItem.style.color = "green";
          break;
      }

      // Add delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "X";
      deleteBtn.style.marginLeft = "10px";
      deleteBtn.style.cursor = "pointer";

      deleteBtn.addEventListener("click", () => {
        taskItem.remove();
      });

      taskItem.appendChild(deleteBtn);
      taskList.appendChild(taskItem);

      // Clear input
      taskInput.value = "";
    }
  });
});
