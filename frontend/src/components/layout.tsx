import {
    LifeBuoy,
    PiggyBank,
    LayoutPanelLeftIcon
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
    TooltipProvider
} from "@/components/ui/tooltip"
import { HeaderComponent } from "./header/header.component"
const navigations = [
    { id: 1, name: 'Dashboard', link: '/', icon: LayoutPanelLeftIcon },
]

export function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="min-h-screen w-full pl-[53px]">
            <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
                <div className="border-b p-2">
                    <Button variant="outline" size="icon" aria-label="Home">
                        <PiggyBank className="size-7 " />
                    </Button>
                </div>
                <TooltipProvider>
                    <nav className="grid gap-1 p-2">
                        {navigations.map((nav) => (
                            <Tooltip key={nav.id}>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        className="rounded-lg"
                                        aria-label={nav.name}
                                    >
                                        <nav.icon className="size-5" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right" sideOffset={5}>
                                    {nav.name}
                                </TooltipContent>
                            </Tooltip>
                        ))}
                    </nav>
                    <nav className="mt-auto grid gap-1 p-2">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="mt-auto rounded-lg"
                                    aria-label="Help"
                                >
                                    <LifeBuoy className="size-5" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right" sideOffset={5}>
                                Help
                            </TooltipContent>
                        </Tooltip>
                    </nav>
                </TooltipProvider>
            </aside>
            <HeaderComponent />
            <main className="flex mt-2 flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
                {children}
            </main>
        </div>
    )
}
