import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="h-screen bg-zinc-800 p-10">
            <nav className="flex flex-col gap-5">
                <Link className="text-zinc-50" to={"/"}>Home</Link>
                <Link className="text-zinc-50" to={"/names"}>Names</Link>
                <Link className="text-zinc-50" to={"/jobs/ss"}>Jobs</Link>
            </nav>
        </div>
    )
}