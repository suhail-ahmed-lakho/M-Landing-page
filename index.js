
    
      const cards = document.querySelectorAll(".expertise-card");

      const observerOptions = {
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate__animated",
              "animate__fadeInUp"
            );
          }
        });
      }, observerOptions);

      cards.forEach((card) => {
        observer.observe(card);
      });

      // Add floating stars animation
      function createStars() {
        const heroSection = document.querySelector(".hero-section");
        for (let i = 0; i < 20; i++) {
          const star = document.createElement("div");
          star.className = "star";
          star.innerHTML = "✦";
          star.style.left = `${Math.random() * 100}%`;
          star.style.top = `${Math.random() * 100}%`;
          star.style.fontSize = `${Math.random() * 20 + 10}px`;
          star.style.animation = `floating ${
            Math.random() * 3 + 2
          }s ease-in-out infinite`;
          heroSection.appendChild(star);
        }
      }

      createStars();
      function showDetails(projectId) {
    const projects = {
        1: {
            title: "Hotel Website with Cooking & Delivery Services",
            description: "A comprehensive hotel website featuring online ordering and delivery services.",
            technologies: ["HTML", "CSS", "JavaScript", "Responsive Design"]
        },
        2: {
            title: "Complete Reviews",
            description: "Digital review platform with modern UI/UX design.",
            technologies: ["UI/UX Design", "Prototyping", "User Research"]
        },
        3: {
            title: "School Management App",
            description: "Comprehensive school management system for tracking student activities.",
            technologies: ["Mobile Design", "UX Research", "Prototyping"]
        },
        4: {
            title: "Health & Fitness App",
            description: "Fitness tracking application with intuitive interface.",
            technologies: ["Mobile Design", "UI/UX", "Interaction Design"]
        }
    };

    const project = projects[projectId];
    alert(`${project.title}\n\n${project.description}\n\nTechnologies: ${project.technologies.join(", ")}`);
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        const navHeight = document.querySelector('.navbar').offsetHeight;
        const targetPosition = section.offsetTop - navHeight;
        
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section, div.profile');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - navHeight - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
   