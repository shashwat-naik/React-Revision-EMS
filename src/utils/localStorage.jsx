const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Fix login bug",
        taskDescription: "Resolve the login issue reported by QA team.",
        taskDate: "2025-09-18",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Prepare weekly report",
        taskDescription: "Summarize project progress and blockers.",
        taskDate: "2025-09-19",
        category: "Documentation",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Update dependencies",
        taskDescription: "Upgrade npm packages to latest versions.",
        taskDate: "2025-09-20",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Design landing page",
        taskDescription: "Create mockups for the new product landing page.",
        taskDate: "2025-09-15",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Fix CSS issues",
        taskDescription: "Resolve alignment problems in mobile view.",
        taskDate: "2025-09-17",
        category: "UI/UX",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
      {
        taskTitle: "Client demo",
        taskDescription: "Prepare and present demo for the client.",
        taskDate: "2025-09-19",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Database migration",
        taskDescription: "Migrate DB schema to new server.",
        taskDate: "2025-09-16",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Optimize queries",
        taskDescription: "Improve performance of slow SQL queries.",
        taskDate: "2025-09-18",
        category: "Database",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Backup setup",
        taskDescription: "Automate daily database backup.",
        taskDate: "2025-09-20",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Write API tests",
        taskDescription: "Create unit and integration tests for APIs.",
        taskDate: "2025-09-17",
        category: "Testing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Debug payment issue",
        taskDescription: "Investigate failed transactions in live mode.",
        taskDate: "2025-09-18",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
      },
      {
        taskTitle: "Code review",
        taskDescription: "Review PRs from teammates.",
        taskDate: "2025-09-19",
        category: "Code Review",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Set up CI/CD pipeline",
        taskDescription: "Implement GitHub Actions for deployment.",
        taskDate: "2025-09-15",
        category: "DevOps",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Monitor logs",
        taskDescription: "Check error logs and alert on failures.",
        taskDate: "2025-09-16",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
      },
      {
        taskTitle: "Security audit",
        taskDescription: "Run vulnerability scan on app.",
        taskDate: "2025-09-18",
        category: "Security",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
};
