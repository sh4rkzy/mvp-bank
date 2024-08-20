import { GraphQLObjectType } from "graphql";
import { CreateAccountService } from "../modules/account/account";

export const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: {
        createAccount: CreateAccountService,
    },
});
