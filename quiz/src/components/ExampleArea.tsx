import { ReactNode } from "react"

type ExampleAreaProps = {
    title: string,
    children: ReactNode
}

export const ExampleArea = ({title, children}: ExampleAreaProps) => {
    return (
        <div className="w-screen h-screen bg-amber-200 flex flex-col items-center border-b-4">
            <h1 className="text-3xl font-bold mt-10">{title}</h1>
            <div className="mb-12">{children}</div>
        </div>
    )
}