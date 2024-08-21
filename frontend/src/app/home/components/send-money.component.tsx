import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

import {
	Send,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
export function MoneyService() {
	return (
		<Tabs defaultValue="send-money" className="w-full">
			<TabsList className="grid w-full grid-cols-2">
				<TabsTrigger value="send-money">Send</TabsTrigger>
				<TabsTrigger value="receive">Receive</TabsTrigger>
			</TabsList>
			<TabsContent value="send-money">
				<Card className="overflow-hidden">
					<CardHeader className="flex flex-row items-start bg-muted/50">
						<div className="grid gap-0.5">
							<CardTitle className="group flex items-center gap-2 text-lg">
								Send Money
							</CardTitle>
							<CardDescription>
								Send money to your friends and family.
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent className="p-6 text-sm">
                        <h1>w   qwui</h1>
                    </CardContent>
					<CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
						<Button
							variant="default"
							size="sm"
							className="flex items-center gap-1 text-sm "
						>
							<span className="text-white">Send</span>
							<Send className="h-4 w-4 text-white" />
						</Button>
					</CardFooter>
				</Card>
			</TabsContent>
			<TabsContent value="receive">
				<Card>
					<CardHeader className="flex flex-row items-start bg-muted/50">
						<div className="grid gap-0.5">
							<CardTitle className="group flex items-center gap-2 text-lg">
								Receive Money
							</CardTitle> 
							<CardDescription>
								Receive money from your friends and family.
							</CardDescription>
						</div>
					</CardHeader>
					<CardContent className="space-y-2">
                        <h1>    =</h1>
                    </CardContent>
					<CardFooter>
						<Button>Receive</Button>
					</CardFooter>
				</Card>
			</TabsContent>
		</Tabs>
	);
}
