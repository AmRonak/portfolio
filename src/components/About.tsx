import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I craft fast, scalable, and visually refined web experiences — the kind
          that feel effortless to use and are built to last. With 6.5+ years of
          deep frontend expertise across React.js, Next.js, TypeScript, GraphQL,
          and Redux, I don't just write code — I engineer products that perform
          at scale and look exceptional doing it.
        </p>
        <p className="para" style={{ marginTop: "1rem", opacity: 0.8 }}>
          I've architected enterprise-grade platforms for global brands like{" "}
          <strong>Intuit</strong> and <strong>American Express</strong> — building
          role-based systems, micro-frontend architectures, and design systems
          used by thousands. I lead with ownership, obsess over clean architecture,
          and believe great UX is never an accident.
        </p>
      </div>
    </div>
  );
};

export default About;
