import { Database } from "../../mongodb";
import type {
	CreateAccount,
	AccountProfile,
} from "../../../interfaces/account";

export class AccountRepository {
	private database: Database;

	constructor(private readonly collectionName: string = "accounts") {
		this.database = new Database();
	}

	async createAccount(account: CreateAccount) {
		const collection = await this.database
			.db("bank")
			.collection(this.collectionName)
			.insertOne(account);
		return collection.insertedId.toHexString();
	}

	async getAccountProfile(profileType: AccountProfile) {}
}
