'use client'
import Title from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link"
import { CircleUser, GraduationCap } from "lucide-react";
import { useSession } from "next-auth/react";
import ButtonLogout from "../logout-button";
import TooltipComponent from "../tooltip";

export default function Header() {
 const session = useSession();

 return (
  <>
    {session.status == "authenticated" && (
        <div className="w-full h-[60px] flex items-center justify-center mb-12 pt-5">
          <div className="w-[1280px] flex items-center justify-between">
            <Link href="/"><Title /></Link>
            <div className="flex items-center gap-10">
              <div className="flex items-center justify-center gap-4">
                {session?.data?.user?.role === "admin" && 
                  <div className="flex gap-4"> 
                    <TooltipComponent href={`/usuarios`} icon={<CircleUser/>} label={"Lista de usuários"} />
                    <TooltipComponent href={`/`} icon={<GraduationCap />} label={"Turmas"} />
                  </div>
                }
                <ButtonLogout />
              </div>
              <div className="flex items-center justify-center gap-3">
                {session?.data?.user?.name}
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      )
    }
  </>
 );
}
