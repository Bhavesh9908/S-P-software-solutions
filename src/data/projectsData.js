export const projectsData = [
  {
    id: 1,
    title: "Industrial Device Automation System",
    image: "/assets/images/projects/industrial-automation.jpg",
    problem: "Manual TTO data entry was time-consuming and error-prone, requiring multiple operators to manage devices individually.",
    solution: "Developed a centralized control system that accepts CSV uploads, automatically sends Telnet commands to devices, logs all activity, and provides role-based access control.",
    stack: ["Python", "Flask", "Socket Programming", "PostgreSQL", "React"],
    demo: "https://demo.techsolutions.com/industrial"
  },
  {
    id: 2,
    title: "Fashion E-Commerce Platform",
    image: "/assets/images/projects/ecommerce.jpg",
    problem: "Local boutique needed an online presence to compete with larger retailers and reach more customers.",
    solution: "Built a full-featured MERN stack eCommerce platform with product search/filter, secure checkout, admin dashboard, and inventory management.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Redux", "Stripe"],
    demo: "https://ecomerce-deploy-final-1.onrender.com"
  },
  {
    id: 3,
    title: "Virtual Try-On AI Tool",
    image: "/assets/images/projects/virtual-tryon.jpg",
    problem: "Online shoppers hesitant to buy clothes without trying them on, leading to high return rates.",
    solution: "Developed a GAN-based virtual try-on system that allows users to upload photos and see how garments would look on them in real-time.",
    stack: ["Python", "PyTorch", "OpenCV", "React Native", "Flask"],
    demo: "https://drive.google.com/file/d/1NHjoIVrftlvgI6qGsQUoSHmtohL48Fbg/view?usp=sharing"
  },
  {
    id: 4,
    title: "Food Classification Mobile App",
    image: "/assets/images/projects/food-classifier.jpg",
    problem: "Diet tracking apps required manual food logging which was tedious and often inaccurate.",
    solution: "Created a mobile app that uses computer vision to identify food from photos and automatically log nutritional information.",
    stack: ["React Native", "TensorFlow Lite", "Flask", "Firebase"],
    demo: "https://demo.techsolutions.com/food-app"
  },
  {
    id: 5,
    title: "Real-time Manufacturing Dashboard",
    image: "/assets/images/projects/manufacturing-dashboard.jpg",
    problem: "Factory managers lacked visibility into production metrics and equipment status in real-time.",
    solution: "Developed a dashboard that aggregates data from IoT sensors and displays KPIs, alerts, and trends with 1-second refresh rates.",
    stack: ["Node.js", "WebSockets", "D3.js", "MongoDB", "React"],
    demo: "https://demo.techsolutions.com/manufacturing"
  },
  {
    id: 6,
    title: "Healthcare Appointment System",
    image: "/assets/images/projects/healthcare-app.jpg",
    problem: "Medical clinics struggling with phone-based appointment scheduling leading to long wait times and no-shows.",
    solution: "Built a web and mobile app for patients to book, reschedule, and receive reminders for appointments, integrated with clinic calendars.",
    stack: ["React", "React Native", "Node.js", "MongoDB", "Twilio API"],
    github: "https://github.com/example/healthcare-app",
    demo: "https://demo.techsolutions.com/healthcare"
  }
];