import {
	GraphQLInputObjectType,
	GraphQLObjectType,
	GraphQLString,
	type GraphQLFieldConfig,
	GraphQLInt,
} from "graphql";
import { AccountRepository } from "../../infrastructure/database/repository/account/account-repository";
import {
	AccountProfile,
	type CreateAccount,
} from "../../infrastructure/interfaces/account";

const accountRepository = new AccountRepository();

const AccountType = new GraphQLObjectType({
	name: "Account",
	fields: {
		id: { type: GraphQLString },
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		balance: { type: GraphQLInt },
	},
});

const AccountInputType = new GraphQLInputObjectType({
	name: "AccountInput",
	fields: {
		name: { type: GraphQLString },
		email: { type: GraphQLString },
		balance: { type: GraphQLInt },
	},
});

export const CreateAccountService: GraphQLFieldConfig<
	void,
	{ account: CreateAccount }
> = {
	type: AccountType,
	args: {
		account: { type: AccountInputType },
	},
	resolve: async (_, { account }) => {
		const accountCreated = await accountRepository.createAccount(
			account as CreateAccount,
		);
		return accountCreated;
	},
};
