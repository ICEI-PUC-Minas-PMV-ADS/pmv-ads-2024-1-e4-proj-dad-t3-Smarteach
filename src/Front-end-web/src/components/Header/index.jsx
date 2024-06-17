"use client";
import Title from "../logo";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link"
import { CircleUser, GraduationCap, LogOut } from "lucide-react";
import { useSession } from "next-auth/react";
import ButtonLogout from "../logout-button";
import TooltipComponent from "../tooltip";
import { Button } from "@/components/ui/button";

export default function Header() {
  const session = useSession();

  return (
    <>
      {session.status == "authenticated" && (
        <div className="w-full h-[60px] flex items-center justify-center mb-12 pt-5">
          <div className="w-[1280px] flex items-center justify-between">
            <Link href="/">
              <Title />
            </Link>
            <div>
              {session?.data?.user?.role === "admin" &&
                <div className="flex justify-center">
                  <Link href="/cadastro/turma" >
                    <Button>Cadastrar Nova Turma</Button>
                  </Link>
                </div>
              }
            </div>
            <div className="flex items-center gap-10">
              <div className="flex items-center justify-center gap-4">
              <TooltipComponent href={`/meuPerfil`} icon={<CircleUser/>} label={"Meu perfil"} />
                {session?.data?.user?.role === "admin" && 
                  <div className="flex gap-4">
                    <TooltipComponent href={`/usuarios`} icon={<GraduationCap />} label={"Usuários"} />
                  </div>
                }
                <ButtonLogout/>
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
      )}
    </>
  );
}
