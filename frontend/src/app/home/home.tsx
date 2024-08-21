import { Fragment } from "react";
import { Layout } from "@/components/layout";
import {
	BalanceGeneral,
	type AccountProfile,
} from "./components/balance.component";
import { TableTransactions } from "./components/historic-transaction.component";
import type { ProfileUser } from "@/components/header/header.component";
import { MoneyService } from "./components/send-money.component";
import {
	Card,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function HomePage() {
	const profile: ProfileUser = {
		name: "Kaue Campos",
		mail: "kaueoliveirac11@gmail.com",
		avatarUrl: "https://avatars.githubusercontent.com/u/55817342?v=4",
	};

	const account: AccountProfile = {
		currency: "BRL",
		balance: "1000",
		profileType: "Personal",
	};

	return (
		<Fragment>
			<Layout>
				<div>
					<main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
						<div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
							<div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
								<Card className="sm:col-span-2">
									<CardHeader className="pb-3">
										<CardTitle>
											Hello, <strong>{profile.name}</strong>
										</CardTitle>
										<CardDescription className="text-balance max-w-lg leading-relaxed">
											Here you can manage your account, send money, and track
											your transactions.
										</CardDescription>
									</CardHeader>
									<CardFooter>
										<Button>Create new contact!</Button>
									</CardFooter>
								</Card>
								<div className="sm:col-span-2">
									<BalanceGeneral
										currency={account?.currency}
										balance={account?.balance}
										profileType={account?.profileType}
									/>
								</div>
							</div>
							<TableTransactions />
						</div>
						<div>
							<MoneyService />
						</div>
					</main>
				</div>
			</Layout>
		</Fragment>
	);
}
