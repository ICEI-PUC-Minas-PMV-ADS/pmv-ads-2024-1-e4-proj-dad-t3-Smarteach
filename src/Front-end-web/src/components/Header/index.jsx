import Title from "../Title";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getServerSession } from "next-auth";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ButtonLogout from "../ButtonLogout";

export default async function Header() {
  const session = await getServerSession();

 return (
  <>
    {session && (
        <div className="w-full h-[60px] bg-zinc-800 flex items-center justify-center shadow-2xl">
          <div className="w-[1280px] flex items-center justify-between">
            <Title />
            <div className="flex items-center gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent >
                  <DropdownMenuLabel>Olá, {session?.user?.name}</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Configurações</DropdownMenuItem>
                  <DropdownMenuItem>Turmas</DropdownMenuItem>
                  <DropdownMenuItem>Alunos</DropdownMenuItem>
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
