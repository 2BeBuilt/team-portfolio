import { Heading, SimpleGrid } from '@chakra-ui/react'
import { projects } from '@/utils/constants/projects'

import Project from './Project'
import PagePart from '../Common/PagePart'

export default function Projects(props: { id: string }) {
  return (
    <PagePart id={props.id}>
      <Heading>Projects</Heading>
      <SimpleGrid spacing={24} columns={{ base: 1, md: 3 }}>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </SimpleGrid>
    </PagePart>
  )
}
