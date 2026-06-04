import { Layout } from "@/components/layout/Layout"
import { Hero } from "@/components/sections/Hero"
import { About } from "@/components/sections/About"
import { Skills } from "@/components/sections/Skills"
import { Projects } from "@/components/sections/Projects"
import { Certifications } from "@/components/sections/Certifications"
import { Contact } from "@/components/sections/Contact"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://thaminduweerasinghe-portfolio.vercel.app"

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Thamindu Weerasinghe",
    url: siteUrl,
    image: `${siteUrl}/images/profile.jpg`,
    jobTitle: "Data Science Undergraduate and Full Stack Developer",
    description:
      "Official portfolio of Thamindu Weerasinghe, a Data Science undergraduate and full stack developer.",
    sameAs: [
      "https://github.com/nWeerasinghe",
      "https://linkedin.com/in/thamindu-nWeerasinghe",
    ],
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Sri Lanka Institute of Information Technology",
    },
    knowsAbout: [
      "Data Science",
      "Full Stack Development",
      "React",
      "Next.js",
      "Node.js",
      "Power BI",
      "Data Analytics",
      "Machine Learning",
    ],
    email: "mailto:nadeejatw@gmail.com",
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
      </Layout>
    </>
  )
}
