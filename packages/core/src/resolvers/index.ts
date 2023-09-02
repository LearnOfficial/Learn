import { IQueryResolvers } from "@learn/common/schemas"
import { coreInfoResolver } from "./core_info";
import { logIn, signUp } from "./user/user_resolver";

const resolvers: IQueryResolvers = {
	Query: {
		coreInfo: coreInfoResolver,
		logIn: logIn
	},
	Mutation: {
		signUp: signUp
	}
};

const apolloResolvers: any = resolvers;
export { apolloResolvers };