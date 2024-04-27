'use client'
import { signOut } from "next-auth/react";
import { useRouter } from 'next/navigation';
import { LogOut } from "lucide-react";


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
        <LogOut onClick={logout} className="w-full cursor-pointer" />
    )

}

export default ButtonLogout;