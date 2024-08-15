import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { useState } from "react";
import { Eye, EyeOff } from 'lucide-react';
import { Button } from "@/components/ui/button";

export interface AccountProfile {
    currency: string;
    balance: string | undefined;
    profileType: string;

}

export function BalanceGeneral(data: AccountProfile) {
    const [showBalance, setShowBalance] = useState(false);

    const handleToggleShowBalance = () => {
        setShowBalance(!showBalance);
    };

    const datacurrency = () => {
        if (data?.currency === 'USD') {
            const balanceNumber = parseFloat(data?.balance ?? '0');
            return `$ ${balanceNumber.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        } else if (data?.currency === 'ERL') {
            const balanceNumber = parseFloat(data?.balance ?? '0');
            return `€ ${balanceNumber.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        } else if (data?.currency === 'BRL') {
            const balanceNumber = parseFloat(data?.balance ?? '0');
            return `R$ ${balanceNumber.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        }
        return data?.balance;
    }

    return (
        <div className="flex mt-4">
            <div className="items-center">
                <Card className="w-[20rem]">
                    <CardHeader>
                        <div className="flex flex-rous items-center justify-between ">
                            <CardDescription>
                                My Wallet

                            </CardDescription>
                            <Button
                                variant="ghost"
                                onClick={handleToggleShowBalance}
                                aria-label="Toggle balance visibility"
                            >
                                {showBalance ? <EyeOff className="size-5 text-red-500" /> : <Eye className="size-5" />}
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-rous items-center">

                            <h1 className="text-2xl font-bold">
                                {showBalance ? datacurrency() : <h1 className="font-light">*******</h1>}
                            </h1>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}