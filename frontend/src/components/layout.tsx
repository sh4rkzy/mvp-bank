import type { ReactNode } from "react";
import { Fragment } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <Fragment>
            <header>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                    </ul>
                </nav>

                {children}
            </header>
        </Fragment>
    )

}