import PageHead from '@/components/Common/PageHead'
import Layout from '@/components/Layout/Layout'
import About from '@/components/About/About'
import Team from '@/components/Team/Team'
import Projects from '@/components/Projects/Projects'
import Hackathons from '@/components/Hackathons/Hackathons'

export default function Home() {
  return (
    <>
      <PageHead title={'2BB'} />
      <Layout>
        <div className="scroll-smooth">
          <About />
          <Team />
          <Projects />
          <Hackathons />
        </div>
      </Layout>
    </>
  )
}
