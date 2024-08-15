import { Fragment, useState, useEffect } from "react";
import { Button } from "../ui/button";
import { useTheme } from "./theme-provider";
import { Sun, MoonStar } from "lucide-react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(theme);

    useEffect(() => {
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            setCurrentTheme(systemTheme);
        }
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setTheme(newTheme);
        setCurrentTheme(newTheme);
    };
    return (
        <Fragment>
            <div>
                <Button
                    size="icon"
                    className="mt-auto rounded-lg"
                    aria-label="Help"
                    onClick={toggleTheme}>
                    {currentTheme === "light" ? <MoonStar className="size-5" /> : <Sun className="size-5" />}
                </Button>
            </div>
        </Fragment>
    );
}
