import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const baseUrl = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Reimbursement Platform",
    category: "Enterprise Internal Tool — Intuit",
    tools: "React.js, GraphQL, TypeScript, Role-Based Access, Admin Dashboard",
    description:
      "An internal expense reimbursement platform for Intuit employees. Built role-based portals for employees, managers, and admins with draft saving, approval workflows, and document upload capabilities.",
    image: `${baseUrl}images/reimbursement_platform.png`,
  },
  {
    title: "Travel & Lifestyle App",
    category: "Micro-Frontend Web App — American Express",
    tools: "React.js, TypeScript, Redux, One App (Micro-Frontend), Jest",
    description:
      "Web applications for American Express Travel & Lifestyle Services, built on a micro-frontend architecture. Delivered performance optimizations and modular, scalable feature development.",
    image: `${baseUrl}images/travel_lifestyle_app.png`,
  },
  {
    title: "EdTech Learning Platform",
    category: "Education Technology — Agodly Infotech",
    tools: "React.js, Next.js, TypeScript, Tailwind CSS, REST APIs",
    description:
      "Full-featured EdTech platform with dashboards, CRUD modules, and user-specific learning flows. Designed responsive, component-driven UI with backend API integrations.",
    image: `${baseUrl}images/edtech_platform.png`,
  },
  {
    title: "FinTech Dashboard",
    category: "Financial Technology — Agodly Infotech",
    tools: "React.js, TypeScript, Jest, GitHub Actions, CI/CD",
    description:
      "Financial services dashboard featuring real-time data visualization, user-specific features, and robust test coverage with automated deployment pipelines via GitHub Actions.",
    image: `${baseUrl}images/fintech_dashboard.png`,
  },
  {
    title: "Design System & Component Library",
    category: "Frontend Infrastructure",
    tools: "React.js, TypeScript, Storybook, CSS Modules, Tailwind CSS",
    description:
      "Reusable component library and design system built to standardize UI across multiple products. Focused on accessibility, performance, and developer experience with comprehensive documentation.",
    image: `${baseUrl}images/design_system.png`,
    github: null,
    live: null,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools &amp; Stack</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
