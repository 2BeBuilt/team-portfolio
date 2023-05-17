import { Stack, Heading, SimpleGrid } from '@chakra-ui/react'
import { projects } from '@/utils/constants/projects'

import Project from './Project'

export default function Projects(props: { id: string }) {
  return (
    <Stack
      id={props.id}
      pt={36}
      spacing={12}
      align={'center'}
      justify={'center'}
    >
      <Heading>Projects</Heading>
      <SimpleGrid spacing={12} columns={{ base: 1, md: 3 }}>
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </SimpleGrid>
    </Stack>
  )
}
