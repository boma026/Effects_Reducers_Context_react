import { ReactNode } from "react"

type ExampleAreaProps = {
    title: string,
    children: ReactNode
}

export const ExampleArea = ({title, children}: ExampleAreaProps) => {
    return (
        <div className="w-screen bg-amber-200 flex flex-col items-center">
            <h1 className="text-3xl font-bold">{title}</h1>
            <div className="mb-12">{children}</div>
        </div>
    )
}