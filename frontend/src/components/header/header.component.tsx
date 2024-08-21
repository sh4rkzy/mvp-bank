import { Fragment } from "react/jsx-runtime";
import {
    Avatar,
    AvatarImage,
} from "@/components/ui/avatar"
import ThemeSwitcher from "../themes/theme-switch";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuItem
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Separator } from "@/components/ui/separator"

export type ProfileUser = {
    name: string;
    mail: string;
    profileType?: number;
    avatarUrl: string | undefined;
}

export function HeaderComponent() {

    const profile: ProfileUser = {
        name: 'Kaue Campos',
        mail: 'kaueoliveirac11@gmail.com',
        avatarUrl: 'https://avatars.githubusercontent.com/u/55817342?v=4'
    }

    return (
        <Fragment>
            <div className="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 px-4 sm:gap-x-6 sm:px-6 lg:px-8">
                <div className="flex flex-1 gap-x-4 justify-end lg:gap-x-6">
                    <div className="flex items-center gap-x-4 lg:gap-x-6">
                        <ThemeSwitcher />
                        <Separator orientation="vertical" />
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <div className="flex items-center">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        className="overflow-hidden rounded-md"
                                    >
                                        <Avatar>
                                            <AvatarImage
                                                src={profile?.avatarUrl 
                                                    ? profile?.avatarUrl
                                                    : `https://ui-avatars.com/api/?name=${profile?.name}O&background=random&color=random`
                                                }
                                            />
                                        </Avatar>
                                    </Button>
                                    <div className="flex flex-col cursor-pointer">
                                        <span className="ml-2 text-sm">{profile?.name}</span>
                                        <span className="ml-2 text-[0.70rem]">{profile?.mail}</span>
                                    </div>
                                </div>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                align="center"
                                className="w-56 mt-3"

                            >
                                <DropdownMenuLabel>Your Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Settings</DropdownMenuItem>
                                <DropdownMenuItem>Support</DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Logout</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}