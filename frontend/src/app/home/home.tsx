import { Fragment } from "react";
import { Layout } from "@/components/layout";
import { BalanceGeneral, type AccountProfile } from "./components/balance.component";
import type { ProfileUser } from "@/components/header/header.component";
import { Coins } from "lucide-react";

export function HomePage() {

    const profile: ProfileUser = {
        name: 'Kaue Campos',
        mail: 'kaueoliveirac11@gmail.com',
        avatarUrl: 'https://avatars.githubusercontent.com/u/55817342?v=4'
    }

    const account: AccountProfile = {
        currency: 'BRL',
        balance: '1000',
        profileType: 'Personal',
    }

    return (
        <Fragment>
            <Layout>
                <div className="flex flex-col">
                    <h1 className="text-3xl">Dashboard</h1>
                    <span className="text-base mt-1">Hello, <strong>{profile?.name} </strong></span>
                    <div className="">
                        <div className="grid grid-cols-5 gap-9">
                            <div className="col-span-4">
                                <BalanceGeneral
                                    currency={account?.currency}
                                    balance={account?.balance}
                                    profileType={account?.profileType}
                                />
                            </div>
                            <div className="col-span-1">
                                <BalanceGeneral
                                    currency={account?.currency}
                                    balance={account?.balance}
                                    profileType={account?.profileType}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}