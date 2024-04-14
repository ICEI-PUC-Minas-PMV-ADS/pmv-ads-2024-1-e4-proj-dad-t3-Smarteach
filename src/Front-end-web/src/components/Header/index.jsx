import Title from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getServerSession } from "next-auth";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import ButtonLogout from "../button-logout";
import Link from "next/link"
import { ChevronDown } from "lucide-react";

export default async function Header() {
  const session = await getServerSession();

 return (
  <>
    {session && (
        <div className="w-full h-[60px] flex items-center justify-center mb-12 pt-5">
          <div className="w-[1280px] flex items-center justify-between">
            <Link href="/"><Title /></Link>
            <div className="flex items-center gap-4">
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex justify-center items-center gap-3">
                    <ChevronDown />
                    {session?.user?.name}
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>Configurações </DropdownMenuItem>
                  <DropdownMenuItem><Link href="/alunos"> Alunos </Link></DropdownMenuItem>
                  <DropdownMenuItem> <Link href="/"> Turmas </Link></DropdownMenuItem>
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
