// Job Experience Data
const jobs = [
    {
        title: "Full Stack Software Developer",
        company: "SKYTRAC Systems",
        period: "Jul 2022 - Present",
        summary: "Built scalable SaaS platforms for real-time flight tracking and communications, collaborating with embedded engineers to meet customer needs while optimizing performance and ensuring system reliability.",
        responsibilities: [
            "Developed SaaS platforms for real-time communications and flight tracking, leveraging microservices to deliver scalable and reliable systems.",
            "Collaborated on software design and development through code reviews, design reviews, and authoring requirements based on customer needs.",
            "Worked with QA to design test strategies, provide system expertise for accurate execution, and assist with testing as required.",
            "Developed end-to-end REST APIs and integrated them with AWS cloud services to efficiently deliver user-requested data in a clear, organized format.",
            "Developed services for high-traffic applications using AWS MSK to stream data between frontend and backend, improving processing speed by 30% while keeping data accurate and in order.",
            "Built a CI/CD virtual machine for GitLab to run pipelines remotely, using scripts to manage and maintain container images in AWS ECR for a smooth and reliable deployment workflow.",
            "Optimized JavaScript libraries, reducing code size and improving UI performance by 10% through faster loading and rendering of interface components.",
            "Architected distributed systems leveraging Redis, RabbitMQ, and AWS EC2, ensuring smooth collaboration between legacy and new systems while boosting reliability and performance.",
            "Implemented automated monitoring with Grafana and Prometheus, providing real-time alerts for production issues and enabling fast incident resolution."
        ]
    },
    {
        title: "Research Assistant - Software Engineer",
        company: "Payment Evolution",
        period: "Jan 2021 - Aug 2022",
        summary: "Maintained and optimized .NET applications, collaborated with cross-functional teams to deliver web solutions, and developed automated HR assistants and full-stack prototypes to improve efficiency and demonstrate product value.",
        responsibilities: [
            "Maintained .NET applications using C# and MVC framework with SQL and MongoDB, ensuring system stability and smooth product performance.",
            "Optimized Enterprise software code and NuGet frameworks to improve application reliability and efficiency resulting in an improved User Experience.",
            "Worked with cross-functional teams to develop and integrate a web application using .NET and C#, meeting client requirements and improving project workflow.",
            "Developed HR assistants using Prolog and Microsoft Bot Framework to automate onboarding and termination queries, leveraging web scraping and provincial/federal guidelines, and trained team members to use the system effectively, improving HR efficiency and accuracy.",
            "Developed a full-stack prototype using Vue.js (UI) and Django (REST API backend) that showcased product value and contributed to securing client funding."
        ]
    },
    {
        title: "Research Assistant - Back End Developer",
        company: "Carleton Immersive Media Studio (CIMS)",
        period: "Jan 2022 - Jun 2022",
        summary: "Optimized Unreal Engine performance with C++, managed databases and Docker configurations, implemented interactive UI features, collaborated on 3D asset streaming, and maintained technical documentation to support efficient development workflows.",
        responsibilities: [
            "Used C++ to optimize Unreal Engine performance, reducing Blueprint overhead and improving application efficiency and responsiveness.",
            "Created a PostgreSQL database server to manage data for server and client access, enabling fast retrieval and rendering of assets via Unreal Engine API calls.",
            "Implemented UI functionalities in Unreal Engine using Blueprints, improving object interactivity while integrating seamlessly with backend systems.",
            "Set up Docker images and configurations compatible with the latest Caddy architecture, ensuring reliable server operation and efficient client-server communication.",
            "Worked with architects to design 3D models and stream them in Unreal Engine, allowing users to navigate assets interactively.",
            "Authored and maintained technical documentation for backend systems, Unreal Engine integrations, and workflows to support team clarity, maintainability, and knowledge transfer."
        ]
    }
];

// Certifications Data
const certifications = [
    {
        title: "Architecting Solutions on AWS",
        logo: "images/aws.png",
        link: "https://www.coursera.org/account/accomplishments/verify/2RVDJD5FQ6KS"
    },
    {
        title: "AWS Cloud Technical Essentials",
        logo: "images/aws.png",
        link: "https://www.coursera.org/account/accomplishments/records/2DCY5335SMXQ"
    }
];

// Dynamic Skills Data
const skills = {
    "Programming Languages": [
        "Python", "C++", "JavaScript", "Java", "TypeScript", "SQL", "NoSQL", "Shell Scripts"
    ],
    "DevOps & Tools": [
        "Kubernetes", "Apache Kafka", "AWS", "Docker", "GitLab CI/CD", "Redis", "RabbitMQ", "Linux"
    ],
    "Quality Assurance": [
        "Unit Testing", "Integration Testing", "API Testing", "Performance Testing", "Monitoring"
    ],
    "Soft Skills": [
        "System Design", "Team Collaboration", "Project Management", "Technical Communication", "Problem Solving", "Agile/Scrum"
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // ==================== Dark mode toggle (optional) ====================
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    } else {
        // Default to light mode if toggle not present
        document.body.classList.remove('dark-mode');
    }

    // ==================== Mobile menu toggle ====================
    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('show');
        });
    }

    // ==================== Job Experience ====================
    const experienceContainer = document.getElementById('experience-container');

    if (experienceContainer && typeof jobs !== 'undefined') {
        jobs.forEach(job => {
            const jobDiv = document.createElement('div');
            jobDiv.classList.add('job', 'scroll-reveal');

            // Job title
            const jobTitle = document.createElement('h3');
            jobTitle.textContent = job.title;
            jobDiv.appendChild(jobTitle);

            // Company + period
            const jobInfo = document.createElement('div');
            jobInfo.classList.add('job-info');
            const company = document.createElement('span');
            company.classList.add('company');
            company.textContent = job.company;
            const period = document.createElement('span');
            period.classList.add('period');
            period.textContent = job.period;
            jobInfo.appendChild(company);
            jobInfo.appendChild(document.createTextNode(' | '));
            jobInfo.appendChild(period);
            jobDiv.appendChild(jobInfo);

            // Summary
            const summary = document.createElement('p');
            summary.classList.add('job-summary');
            summary.textContent = job.summary; // Make sure jobs array has a "summary" property
            jobDiv.appendChild(summary);

            // Full details list
            const ul = document.createElement('ul');
            ul.classList.add('job-details');
            job.responsibilities.forEach(task => {
                const li = document.createElement('li');
                li.textContent = task;
                ul.appendChild(li);
            });
            jobDiv.appendChild(ul);

            // Toggle button
            const btn = document.createElement('button');
            btn.classList.add('job-toggle-btn');
            const img = document.createElement('img');
            img.src = 'images/plus.svg';
            img.alt = 'Toggle details';
            btn.appendChild(img);
            jobDiv.appendChild(btn);

            experienceContainer.appendChild(jobDiv);
        });

        // Toggle functionality
        document.querySelectorAll('.job').forEach(job => {
            const btnImg = job.querySelector('.job-toggle-btn img');
            const details = job.querySelector('.job-details');
            const summary = job.querySelector('.job-summary');

            job.addEventListener('click', (e) => {
                // Prevent triggering twice if clicking directly on the button
                if (e.target.tagName === 'IMG' || e.target.tagName === 'BUTTON') return;

                // Close other jobs
                document.querySelectorAll('.job-details.show').forEach(openDetails => {
                    if (openDetails !== details) {
                        openDetails.classList.remove('show');
                        openDetails.previousElementSibling.style.display = 'block';
                        const openBtn = openDetails.closest('.job').querySelector('.job-toggle-btn img');
                        openBtn.classList.remove('rotate');
                    }
                });

                // Toggle current job
                if (!details.classList.contains('show')) {
                    summary.style.display = 'none';
                    details.classList.add('show');
                    btnImg.classList.add('rotate');
                } else {
                    details.classList.remove('show');
                    summary.style.display = 'block';
                    btnImg.classList.remove('rotate');
                }
            });

            // Also toggle when clicking the icon itself
            job.querySelector('.job-toggle-btn').addEventListener('click', (e) => {
                e.stopPropagation(); // prevent double toggle
                job.click();
            });
        });
    }

    // ==================== Skills ====================
    const skillsContainer = document.getElementById('skills-container');

    if (skillsContainer && typeof skills !== 'undefined') {
        // Clear existing content to avoid duplicates
        skillsContainer.innerHTML = '';

        const categoryIcons = {
            "Programming Languages": "images/code.svg",
            "DevOps & Tools": "images/devops.svg",
            "QA": "images/qa.svg",
            "Soft Skills": "images/softskills.svg"
        };

        for (const category in skills) {
            const categoryDiv = document.createElement('div');
            categoryDiv.classList.add('skills-category', 'scroll-reveal');

            const categoryTitle = document.createElement('h3');

            // Add icon image
            if (categoryIcons[category]) {
                const iconImg = document.createElement('img');
                iconImg.src = categoryIcons[category];
                iconImg.alt = category;
                iconImg.classList.add('category-icon');
                categoryTitle.appendChild(iconImg);
            }

            // Add category text
            const textNode = document.createTextNode(` ${category}`);
            categoryTitle.appendChild(textNode);

            categoryDiv.appendChild(categoryTitle);

            const skillsGrid = document.createElement('div');
            skillsGrid.classList.add('skills-grid');

            skills[category].forEach(skill => {
                const skillBadge = document.createElement('span');
                skillBadge.classList.add('skill-badge');
                skillBadge.textContent = skill;
                skillsGrid.appendChild(skillBadge);
            });

            categoryDiv.appendChild(skillsGrid);
            skillsContainer.appendChild(categoryDiv);
        }
    }

    // ==================== Certifications ====================
    const certContainer = document.getElementById('certification-container');
    if (certContainer && typeof certifications !== 'undefined') {
        certifications.forEach(cert => {
            const card = document.createElement('a');
            card.href = cert.link || '#';
            card.target = '_blank';
            card.classList.add('cert-card', 'scroll-reveal');

            const logo = document.createElement('img');
            logo.src = cert.logo;
            logo.alt = cert.title;

            const name = document.createElement('span');
            name.textContent = cert.title;

            card.appendChild(logo);
            card.appendChild(name);

            certContainer.appendChild(card);
        });
    }

    // ==================== Navbar highlight ====================
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (pageYOffset >= sectionTop) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) link.classList.add('active');
        });
    });

    document.querySelectorAll('.contact-card[data-copy]').forEach(card => {
        card.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default link behavior if <a> used
            const textToCopy = card.getAttribute('data-copy');
            navigator.clipboard.writeText(textToCopy)
                .then(() => {
                    // Show temporary feedback
                    const textSpan = card.querySelector('.contact-text');
                    const originalText = textSpan.textContent;
                    textSpan.textContent = "Copied!";
                    setTimeout(() => {
                        textSpan.textContent = originalText;
                    }, 1500);
                })
                .catch(err => console.error("Failed to copy text:", err));
        });
    });

    // ==================== Footer year ====================
    const dateEl = document.getElementById('date');
    if (dateEl) dateEl.textContent = new Date().getFullYear();

    // ==================== Scroll reveal ====================
    const revealElements = document.querySelectorAll('.scroll-reveal');
    const revealOnScroll = () => {
        const windowBottom = window.innerHeight + window.scrollY;
        revealElements.forEach(el => {
            if (el.offsetTop < windowBottom - 50) el.classList.add('show');
        });
    };
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();
});
