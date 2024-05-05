'use client'
import ClassList from "@/components/class-list";
import Mural from "@/components/mural";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() { 

  return (
    <div className="container flex flex-col justify-center items-center gap-10 mb-6">
      <Link href="/cadastro/turma"> <Button> Cadastrar Nova Turma </Button> </Link>
      <div className="flex">
        <ClassList />
        <Mural />
      </div>
    </div>
  );
}
