'use client'
import { signOut } from "next-auth/react";
import { Button } from "../ui/button";
import { useRouter } from 'next/navigation';


const ButtonLogout = () => {
    const route = useRouter();

    async function logout() {
        await signOut({
            redirect:false,
        })
        route.push('/auth')
        route.refresh()
    }

    return (
        <Button onClick={logout} className="w-full">
            Logout
        </Button>
    )

}

export default ButtonLogout;