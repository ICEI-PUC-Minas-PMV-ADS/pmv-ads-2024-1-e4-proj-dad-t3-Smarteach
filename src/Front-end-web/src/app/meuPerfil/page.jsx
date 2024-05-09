'use client'
import { useSession } from "next-auth/react";
import React from 'react';
import Link from "next/link"
import { Pen } from 'lucide-react';
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Detalhes from './../detalhes/turma/[id]/page';

export default function UserProfile() {
  const session = useSession();

  let profileType;
  switch (session?.data?.user?.role) {
    case "professor":
      profileType = "Professor(a)";
      break;
    case "aluno":
      profileType = "Aluno(a)";
      break;
    case "admin":
      profileType = "Administrador(a)";
      break;
    default:
      profileType = "Tipo de Perfil Indefinido";
      break;
  }

  return (

    <div className="container pb-10 flex flex-col justify-center items-center gap-12">
        <div className="flex w-[500px] h-[200px] justify-center items-center gap-10 border-4 border-border rounded-xl">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div>
            <h2><strong>Nome:</strong> {session?.data?.user?.name}</h2>
            <h3><strong>Tipo de Perfil:</strong> {profileType}</h3>
            <p><strong>Email:</strong> {session?.data?.user?.email}</p>
            <Link href={`/usuarios`} className='flex justify-between items-center w-full text-blue-500'>
                      Mais detalhes
            </Link>
          </div>
        </div>
    </div>
  );
}
