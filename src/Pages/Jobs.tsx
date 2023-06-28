import { useParams } from "react-router-dom"

export function Jobs() {
    const { name } = useParams()
    console.log(name)
    return (
        <>
            <div className="h-screen bg-zinc-800 p-10">
                <h1 className="text-zinc-50">Welcome to route Jobs {name}</h1>
            </div>
        </>
    )
}