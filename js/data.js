/**
 * Duddu Pragna Chelsiya - Portfolio Data Source
 * Sourced strictly from verified Resume and Technical Profile documents.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Duddu Pragna Chelsiya",
    badge: "Alliance University · BCA",
    tagline: "Building practical solutions through AI, data, and full-stack development, with a passion for learning, creating, and continuously improving.",
    email: "pragnachelsiyaduddu@gmail.com",
    collegeEmail: "pdudduBCA24@ced.alliance.edu.in",
    phone: "9032006411",
    displayPhone: "+91 9032006411",
    location: "Bangalore, India",
    photoUrl: "assets/images/profile.jpg",
    resumeUrl: "assets/Pragna-Chelsiya-Resume.pdf",
    summary: "BCA student at Alliance University, Bangalore with a strong foundation in software development, web technologies, databases, and Generative AI. Proficient in Python, Java, JavaScript, modern web stacks, and data analytics tools like Tableau and Power BI. Experienced in building AI-driven solutions and full-stack applications with an analytical mindset, eager to contribute practical, innovative solutions to high-impact software engineering teams."
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/PragnaChelsiya",
      icon: "github",
      label: "github.com/PragnaChelsiya"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/duddu-pragna-chelsiya-a24257333/",
      icon: "linkedin",
      label: "linkedin.com/in/duddu-pragna-chelsiya-a24257333"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/DPragnaChelsiya/",
      icon: "leetcode",
      label: "leetcode.com/u/DPragnaChelsiya"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/pragnachelsiyad1",
      icon: "hackerrank",
      label: "hackerrank.com/profile/pragnachelsiyad1"
    }
  ],

  highlights: [
    { label: "Degree", value: "BCA (UG)", detail: "Alliance University, Bangalore" },
    { label: "Graduation", value: "2024 – 2027", detail: "Current Score: 83.7%" },
    { label: "Focus Areas", value: "AI & Full-Stack", detail: "GenAI, React, Node.js, MongoDB" },
    { label: "Analytics", value: "Data & BI", detail: "Tableau, Power BI, SQL, Python" }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      icon: "code",
      skills: ["Java", "Python", "JavaScript"]
    },
    {
      category: "Web Development",
      icon: "layout",
      skills: ["React.js", "Node.js", "Express.js", "Spring Boot", "HTML5", "CSS3"]
    },
    {
      category: "Database Management",
      icon: "database",
      skills: ["SQL", "MySQL", "MongoDB"]
    },
    {
      category: "Data Analytics & BI",
      icon: "bar-chart-2",
      skills: ["Tableau", "Power BI", "Microsoft Excel", "Python for Analytics"]
    },
    {
      category: "Tools & Platforms",
      icon: "tool",
      skills: ["Git", "GitHub", "VS Code", "Netlify", "Render"]
    }
  ],

  projects: [
    {
      id: "trustcart",
      title: "TrustCart – Agentic AI",
      subtitle: "Agentic AI Shopping Assistant",
      category: "Generative AI",
      badge: "AI & GenAI",
      description: "An intelligent agentic shopping assistant that compares offers across multiple online stores and autonomously recommends the optimal purchase decision with complete transparency.",
      highlights: [
        "Built an AI shopping assistant that compares offers across multiple stores and recommends the best option.",
        "Implemented confidence scoring and an audit trail to make AI decisions transparent, explainable, and verifiable."
      ],
      technologies: ["Generative AI", "Agentic AI", "Python", "Decision Intelligence", "Data Parsing"],
      links: [
        {
          type: "github",
          label: "GitHub",
          url: "https://github.com/PragnaChelsiya/TrustCart-Agentic-AI"
        },
        {
          type: "demo",
          label: "Live Demo",
          url: "https://storied-peony-bc8570.netlify.app/"
        }
      ]
    },
    {
      id: "campus-cart",
      title: "Campus-Cart",
      subtitle: "Full Stack Campus E-Commerce Platform",
      category: "Full Stack Development",
      badge: "Full Stack Web",
      description: "A tailored campus-based e-commerce ecosystem built to streamline student-to-student and campus commerce with full transactional capabilities.",
      highlights: [
        "Developed a campus-based e-commerce platform using React.js, Node.js, Express.js, and MongoDB.",
        "Implemented secure authentication, dynamic cart management, real-time order tracking, and responsive UI.",
        "Deployed with scalable cloud infrastructure using Netlify and Render."
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Netlify", "Render"],
      links: [
        {
          type: "github",
          label: "GitHub",
          url: "https://github.com/PragnaChelsiya/campuscart"
        },
        {
          type: "demo",
          label: "Live Demo",
          url: "https://69da8573448827648cf2d5ac--campuscart-web.netlify.app/"
        }
      ]
    },
    {
      id: "genai-career-navigator",
      title: "GenAI Career Navigator",
      subtitle: "AI-Powered Career Guidance & Skill Gap Analysis",
      category: "Generative AI",
      badge: "AI & Full-Stack",
      description: "A web-based career guidance application designed to help students and aspiring professionals prepare for target careers by comparing current skills with role requirements, visualizing skill gaps using radar charts, and supporting personalized roadmaps.",
      highlights: [
        "Compares current skills with target role requirements and visualizes potential skill gaps using an interactive radar chart.",
        "Supports personalized learning roadmaps based on study time, experience level, and learning preferences."
      ],
      technologies: ["React", "JavaScript", "HTML", "CSS", "Vite", "Python", "FastAPI", "Groq", "Git", "GitHub", "Vercel", "Render"],
      links: [
        {
          type: "demo",
          label: "Live Demo",
          url: "https://gen-ai-career-navigator.vercel.app"
        },
        {
          type: "github",
          label: "GitHub",
          url: "https://github.com/sharvani801/GenAI-Career-Navigator"
        }
      ]
    },
    {
      id: "waterbody-restoration",
      title: "Community Waterbody Clean-Up & Restoration Drive",
      subtitle: "Data-Driven Sustainability Analytics",
      category: "Data Analytics",
      badge: "Analytics & Sustainability",
      description: "A data analytics and civic engagement initiative analyzing community survey metrics to address water pollution issues and environmental awareness.",
      highlights: [
        "Conducted community survey data analysis using Tableau Public to identify key water pollution trends and public awareness levels.",
        "Created interactive analytical dashboards for stakeholder engagement and community awareness campaigns."
      ],
      technologies: ["Tableau Public", "Data Analysis", "Data Visualization", "Community Surveys", "Sustainability"],
      links: [
        {
          type: "project",
          label: "View Project",
          url: "https://waterbodycleanupandrestoration.netlify.app/"
        }
      ]
    }
  ],

  experience: [
    {
      role: "Green Intern",
      organization: "1M1B Green Internship (AICTE + Salesforce + SEMI)",
      period: "Internship Project",
      location: "India",
      badge: "AICTE · Salesforce · SEMI",
      description: "Led analytical and civic sustainability initiatives aimed at water resource conservation and community health awareness.",
      points: [
        "Conducted a comprehensive Community Waterbody Clean-Up & Restoration Drive project.",
        "Executed stakeholder engagement drives, demographic & environmental surveys, and public awareness campaigns.",
        "Designed and published Tableau data dashboards to visualize water quality challenges and track restoration milestones."
      ],
      technologies: ["Tableau", "Data Analysis", "Stakeholder Engagement", "Survey Analytics", "Environmental Science"],
      certificateUrl: "https://drive.google.com/file/d/1_Al3yfcrmyGeRZEIYlAJpFIFc8inSKYZ/view?usp=drive_link"
    }
  ],

  certifications: [
    {
      title: "AI For Everyone",
      issuer: "DeepLearning.AI",
      category: "AI & ML",
      icon: "cpu",
      certificateUrl: "https://coursera.org/share/72174509fab4c999d46dd49510dd2802"
    },
    {
      title: "Fundamentals of Natural Language Processing (NLP)",
      issuer: "DeepLearning.AI",
      category: "AI & ML",
      icon: "message-square",
      certificateUrl: "https://coursera.org/share/ce705199458e6b3e729edb748d95495d"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Amazon",
      category: "Web Engineering",
      icon: "globe",
      certificateUrl: "https://coursera.org/share/9dabaa586a5b8d440aaadab0b30abf92"
    },
    {
      title: "Network Security",
      issuer: "Cisco",
      category: "Infrastructure & Security",
      icon: "shield",
      certificateUrl: "https://coursera.org/share/5ca6d3c3531baa8fe55a1ef64e45bb0c"
    },
    {
      title: "Data Analysis with Python",
      issuer: "IBM",
      category: "Data & Analytics",
      icon: "trending-up",
      certificateUrl: "https://coursera.org/share/9565b12c9fea7cecfa27d3f51826dd73"
    },
    {
      title: "Intro to Cloud Computing",
      issuer: "IBM",
      category: "Cloud Computing",
      icon: "cloud",
      certificateUrl: "https://coursera.org/share/d488300e2e26bb6af4a151cc2dface34"
    },
    {
      title: "Intro to Software Engineering",
      issuer: "IBM",
      category: "Software Engineering",
      icon: "code",
      certificateUrl: "https://coursera.org/share/1df454bb3cade2d06d94ec6b2ead5203"
    },
    {
      title: "Automation Developer Associate Training",
      issuer: "UiPath",
      category: "Process Automation",
      icon: "cpu",
      certificateUrl: "https://drive.google.com/file/d/1QueGcED1xLlWo_RlvDfl3o5baU24d5v2/view?usp=sharing"
    },
    {
      title: "1M1B Green Internship",
      issuer: "Salesforce",
      category: "Sustainability & Analytics",
      icon: "award",
      certificateUrl: "https://drive.google.com/file/d/1_Al3yfcrmyGeRZEIYlAJpFIFc8inSKYZ/view?usp=drive_link"
    }
  ],

  education: [
    {
      degree: "Bachelor of Computer Applications (UG)",
      institution: "Alliance University, Bangalore",
      period: "08/2024 – 06/2027 (Expected 2027)",
      score: "83.7%",
      scoreLabel: "Academic Performance",
      status: "In Progress",
      details: "Pursuing core computer applications, software development, data structures, database management systems, and modern AI technologies."
    },
    {
      degree: "12th Standard (Higher Secondary)",
      institution: "Sri Chaitanya Junior College, Bapatla",
      period: "2020 – 2022",
      score: "80%",
      scoreLabel: "Score",
      status: "Completed",
      details: "Higher secondary education with mathematics, physics, and science focus."
    },
    {
      degree: "10th Standard (Secondary School)",
      institution: "Sri Chaitanya School, Chirala",
      period: "2020",
      score: "98%",
      scoreLabel: "Score",
      status: "Completed",
      details: "Secondary school education with high academic distinction."
    }
  ],

  research: [
    {
      title: "Agile Development Model: Principles, Practices, and Modern Software Engineering Trends",
      type: "Research Publication / Paper",
      summary: "An in-depth study evaluating agile development frameworks, iterative delivery models, and modern industry methodologies for reliable software engineering.",
      topics: [
        "Agile Methodology",
        "Scrum Framework",
        "Kanban",
        "Sprint Planning",
        "Continuous Integration"
      ]
    }
  ]
};

// Ensure export for both browser script tag and modular environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PORTFOLIO_DATA;
}
