import { ApolloDriver } from "@nestjs/apollo";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";


@Module({
    imports: [
      GraphQLModule.forRoot({
        driver: ApolloDriver,
        playground: true,
        typePaths: ['./**/*.graphql'],
      }),
    ],
  })
  export class GraphqlModule {}
  