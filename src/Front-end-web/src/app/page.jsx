'use client'
import ClassList from "@/components/class-list";
import Mural from "@/components/mural";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Home() { 
const session = useSession();
  return (
    <div className="container w-full h-full flex flex-col justify-center items-center gap-10 mb-10">
      {session?.data?.user?.role === "admin" && 
        <div className="container flex flex-col justify-center items-center gap-10 mb-6">
          <Link href="/cadastro/turma"> <Button> Cadastrar Nova Turma </Button> </Link>
        </div>
      }
        <div className="flex">
          <ClassList />
          <Mural />
        </div>
    </div>
  );
}
