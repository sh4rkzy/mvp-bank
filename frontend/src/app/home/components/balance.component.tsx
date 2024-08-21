import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Coins } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Progress } from "@/components/ui/progress";

export interface AccountProfile {
	currency: string;
	balance: string | undefined;
	profileType: string;
}

export function BalanceGeneral(data: AccountProfile) {
	const [showBalance, setShowBalance] = useState(false);
	const [loading, setLoading] = useState(true);
	const [skeletonLoading, setSkeletonLoading] = useState(true);

	const handleToggleShowBalance = () => {
		setShowBalance(!showBalance);
	};

	const datacurrency = () => {
		if (data?.currency === "USD") {
			const balanceNumber = Number.parseFloat(data?.balance ?? "0");
			return `$ ${balanceNumber.toLocaleString("en-US", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}`;
		}
		if (data?.currency === "ERL") {
			const balanceNumber = Number.parseFloat(data?.balance ?? "0");
			return `€ ${balanceNumber.toLocaleString("de-DE", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}`;
		}
		if (data?.currency === "BRL") {
			const balanceNumber = Number.parseFloat(data?.balance ?? "0");
			return `R$ ${balanceNumber.toLocaleString("pt-BR", {
				minimumFractionDigits: 2,
				maximumFractionDigits: 2,
			})}`;
		}
		return data?.balance;
	};

	useEffect(() => {
		// Show skeleton first
		setSkeletonLoading(true);
		// After 1 second, hide skeleton and show ****
		setTimeout(() => {
			setSkeletonLoading(false);
			setLoading(true);
		}, 1000);
	}, []);

	return (
		<Card>
			<CardHeader className="pb-2">
				<div className="flex items-center gap-2">
					<div className="absolute rounded-md bg-green-500 p-3">
						<Coins className="h-6 w-6 text-white" />
					</div>
					<CardDescription className="ml-16">My Wallet</CardDescription>
					<Button
						variant="ghost"
						onClick={handleToggleShowBalance}
						aria-label="Toggle balance visibility"
						className="ml-auto"
					>
						{showBalance ? (
							<EyeOff className="size-5 text-red-500" />
						) : (
							<Eye className="size-5 dark:text-gray-100" />
						)}
					</Button>
				</div>
				<CardTitle className="text-4xl">
					{skeletonLoading ? (
						<Skeleton className="w-[250px] h-7 roudend" />
					) : loading ? (
						showBalance ? (
							datacurrency()
						) : (
							<h1>******</h1>
						)
					) : (
						<Skeleton className="w-[250px] h-7 roudend" />
					)}
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="text-xs text-muted-foreground">+25% from last week</div>
			</CardContent>
			<CardFooter>
				<Progress value={25} aria-label="25% increase" />
			</CardFooter>
		</Card>
	);
}
