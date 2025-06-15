import { HeaderExercicio } from "@/components/HeaderExercicio";
import { UserProvider } from "@/context/UserContext";

export default function contextExercicio () {
    return (
        <div className="container mx-auto">
            <UserProvider>
                <HeaderExercicio />
            </UserProvider>
        </div>
    )
}