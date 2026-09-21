import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { teamMember } from './teamMember'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, teamMember],
}
