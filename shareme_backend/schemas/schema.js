// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import user from './user'
import comment from './comment'
import save from './save'
import postedBy from './postedBy'
import pin from './pin'
// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    user,
    save,
    postedBy,
    comment,
    pin 
  ]),
})
