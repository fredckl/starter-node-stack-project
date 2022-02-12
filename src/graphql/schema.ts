import * as R from 'ramda';
import fs from 'fs';
import { makeExecutableSchema } from '@graphql-tools/schema';

const paths = [
  '/type',
  '/input'
];

const typeDefs = (_schemaTypes: any) => {
  return R.map(R.prop('typeDefs'))(_schemaTypes);
};

// @ts-ignore
const resolvers = R.compose(
  R.mergeAll,
  R.reject(R.isNil),
  R.map(R.prop('resolvers'))
)

const schemaTypes = R.reduce((acc: any, dir: string) => {
  const fullDirectory = `${__dirname}${dir}`;
  const files = fs.readdirSync(fullDirectory);
  return [...acc, ...R.map(file => require(`${fullDirectory}/${file}`))(files)]
}, [])(paths)

export default makeExecutableSchema({
  // @ts-ignore
  typeDefs: typeDefs(schemaTypes),
  // @ts-ignore
  resolvers: resolvers(schemaTypes)
})
