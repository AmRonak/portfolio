import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Engineering Lead</h4>
                <h5>Persistent Systems Ltd &mdash; Client: Intuit, Ahmedabad</h5>
              </div>
              <h3>Sep 2025 &ndash; Present</h3>
            </div>
            <div className="career-right">
              <p>
                Leading frontend architecture for an enterprise-grade reimbursement
                platform serving thousands of Intuit employees. Designed and shipped
                three role-based portals — Employee, Manager, and Admin — with approval
                workflows, document uploads, and draft management. Drive engineering
                quality through code reviews, mentoring, and enforcing best practices
                across the team.
              </p>
              <div className="career-tech-tags">
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>GraphQL</span>
                <span>Redux Toolkit</span>
                <span>Tailwind CSS</span>
                <span>Jest</span>
                <span>CI/CD</span>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ReactJS Developer</h4>
                <h5>Awign Enterprises Pvt. Ltd. Deployed at Infosys, Client: American Express</h5>
              </div>
              <h3>May 2022 &ndash; Aug 2025</h3>
            </div>
            <div className="career-right">
              <p>
                Built micro-frontend applications for American Express Travel &amp;
                Lifestyle Services using One-App architecture. Delivered measurable
                performance improvements through component-level optimizations and
                modular, scalable feature development. Maintained high code quality
                through automated testing, pull request reviews, and cross-functional
                Agile collaboration across global teams.
              </p>
              <div className="career-tech-tags">
                <span>React.js</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Redux</span>
                <span>Micro-Frontend (One App)</span>
                <span>Jest</span>
                <span>RTL</span>
                <span>CI/CD</span>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>ReactJS Developer</h4>
                <h5>Agodly Infotech, Ahmedabad</h5>
              </div>
              <h3>Mar 2019 &ndash; Apr 2022</h3>
            </div>
            <div className="career-right">
              <p>
                Shipped full-stack features across EdTech and FinTech products — from
                interactive learning dashboards to financial data visualizations. Built
                reusable component libraries, integrated REST APIs, and owned CI/CD
                pipelines via GitHub Actions. Laid the foundation of a design system
                that reduced UI inconsistency across multiple products.
              </p>
              <div className="career-tech-tags">
                <span>React.js</span>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Node.js</span>
                <span>Tailwind CSS</span>
                <span>GitHub Actions</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
