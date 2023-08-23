import headerStyles from "./styles/Header.module.css";
import experienceStyles from "./styles/Experiences.module.css";
import projectsStyles from "./styles/Projects.module.css";
import footerStyles from "./styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export default function Home() {
  return (
    <main style={{ overflowX: "hidden" }}>
      <header className={`relative ${headerStyles.header}`}>
        <nav className={`${headerStyles.navbar} relative z-20`}>
          <div className="container flex justify-between items-center tablet:flex-row flex-col">
            <h1 className={headerStyles.navbarLogo}>adamkeyes</h1>
            <div className={headerStyles.navbarIconCon}>
              {[
                "icon-github",
                "icon-frontend-mentor",
                "icon-linkedin",
                "icon-twitter",
              ].map((name, i) => (
                <div className={headerStyles.navbarIcon} key={i}>
                  <Image src={`/images/${name}.svg`} alt={name} fill />
                </div>
              ))}
            </div>
          </div>
        </nav>
        <div
          className={`${headerStyles.hero} container flex tablet:block flex-col items-center relative z-20`}
        >
          <h1
            className={`heading-xl ${headerStyles.heroTitle} text-center tablet:text-start`}
          >
            Nice to <span style={{ whiteSpace: "nowrap" }}>meet you!</span>{" "}
            I&apos;m{" "}
            <span className={headerStyles.heroDevName}>Adam Keyes</span>
          </h1>
          <p
            className={`${headerStyles.heroDesc} text-center tablet:text-start`}
          >
            Based in the UK, I’m a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <Link className="btn" href="#contact">
            contact me
          </Link>
        </div>
        <div className={`absolute ${headerStyles.heroDevImage}`}>
          <Image
            alt="developer"
            src="/images/image-profile-desktop.webp"
            fill
            style={{ objectFit: "cover", objectPosition: "left" }}
          />
        </div>
        <div className={headerStyles.heroSingleRing}>
          <Image
            src="/images/pattern-circle.svg"
            width={129}
            height={129}
            alt="ring"
          />
        </div>
        <div className={headerStyles.heroRings}>
          <Image
            src="/images/pattern-rings.svg"
            width={530}
            height={129}
            alt="ring"
          />
        </div>
      </header>
      <section className="relative">
        <div className={`container ${experienceStyles.experiences}`}>
          {[
            { tech: "HTML", years: 4 },
            { tech: "CSS", years: 4 },
            { tech: "Javascript", years: 4 },
            { tech: "Accessibility", years: 4 },
            { tech: "React", years: 3 },
            { tech: "Sass", years: 3 },
          ].map((experience, i) => (
            <div className={experienceStyles.experiencesItem} key={i}>
              <h2 className="heading-lg">{experience.tech}</h2>
              <p>{experience.years} Years Experience</p>
            </div>
          ))}
        </div>
        <div className={experienceStyles.experiencesRings}>
          <Image src="/images/pattern-rings.svg" alt="ring" fill />
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex justify-between items-center">
            <h1 className="heading-xl">Projects</h1>
            <a href="#contact" className="btn">
              contact me
            </a>
          </div>
          <div className={projectsStyles.projects}>
            {[
              { name: "design portfolio", techs: ["html", "css"] },
              { name: "e-learning landing page", techs: ["html", "css"] },
              { name: "todo web app", techs: ["html", "css", "javascript"] },
              {
                name: "entertainment web app",
                techs: ["html", "css", "javascript"],
              },
              { name: "memory game", techs: ["html", "css", "javascript"] },
              {
                name: "art gallery showcase",
                techs: ["html", "css", "javascript"],
              },
            ].map((project, i) => (
              <div key={i} className={projectsStyles.projectsProject}>
                <div className={projectsStyles.projectsProjectImage}>
                  <Image
                    src={`/images/thumbnail-project-${i + 1}-large.webp`}
                    alt="project"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                  <div className={projectsStyles.projectsProjectViewOverlay}>
                    <Link
                      className={`${projectsStyles.projectsProjectLink} btn`}
                      href="#"
                    >
                      view project
                    </Link>
                    <Link
                      className={`${projectsStyles.projectsProjectLink} btn`}
                      href="#"
                    >
                      view code
                    </Link>
                  </div>
                </div>
                <h3
                  className={`heading-md ${projectsStyles.projectsProjectTitle}`}
                >
                  {project.name}
                </h3>
                <div className={projectsStyles.projectsProjectTechs}>
                  {project.techs.map((tech, j) => (
                    <span key={j}>{tech}</span>
                  ))}
                </div>
                <div className={projectsStyles.projectsProjectView}>
                  <Link
                    className={`${projectsStyles.projectsProjectLink} btn`}
                    href="#"
                  >
                    view project
                  </Link>
                  <Link
                    className={`${projectsStyles.projectsProjectLink} btn`}
                    href="#"
                  >
                    view code
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <footer className={footerStyles.footer} id="contact">
        <div className="container">
          <section className={footerStyles.footerContact}>
            <div className={footerStyles.footerContactLeft}>
              <h1 className="heading-xl">Contact</h1>
              <p className={footerStyles.footerContactLeftDescription}>
                I would love to hear about your project and how I could help.
                Please fill in the form, and I’ll get back to you as soon as
                possible.
              </p>
            </div>
            <ContactForm className={footerStyles.footerContactForm} />
          </section>
          <div className={footerStyles.footerBottom}>
            <h2 className={footerStyles.footerBottomDevName}>adamkeyes</h2>
            <div className={footerStyles.footerBottomIconCon}>
              {['github', 'frontend-mentor', 'linkedin', 'twitter'].map((iconName, i) => (
                <Link className={footerStyles.footerBottomIcon} href="#" key={i}>
                  <Image src={`/images/icon-${iconName}.svg`} fill alt={iconName} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
