'use client'
import Title from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ButtonLogout from "../button-logout";
import Link from "next/link"
import { ChevronDown } from "lucide-react";
import { useSession } from "next-auth/react";

export default function Header() {
  const session = useSession();

 return (
  <>
    {session.status == "authenticated" && (
        <div className="w-full h-[60px] flex items-center justify-center mb-12 pt-5">
          <div className="w-[1280px] flex items-center justify-between">
            <Link href="/"><Title /></Link>
            <div className="flex items-center gap-4">
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center gap-3">
                    <ChevronDown />
                    {session?.data?.user?.name}
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Configurações </DropdownMenuItem>
                  {session?.data?.user?.role === "admin" && 
                    <> 
                      <DropdownMenuItem><Link href="/alunos"> Alunos </Link></DropdownMenuItem>
                      <DropdownMenuItem> <Link href="/"> Turmas </Link></DropdownMenuItem>
                    </>
                  }
                  <ButtonLogout />
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )
    }
  </>
 );
}
