import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginDrainHttpServer, ApolloServerPluginInlineTrace } from 'apollo-server-core';
import { Express } from 'express';
import schema from './schema';

export async function startApolloServer(server: any, app: Express) {

  const serverApollo = new ApolloServer({
    schema,
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer: server }),
      ApolloServerPluginInlineTrace()
    ],
  });
  await serverApollo.start();
  serverApollo.applyMiddleware({ app });
}
