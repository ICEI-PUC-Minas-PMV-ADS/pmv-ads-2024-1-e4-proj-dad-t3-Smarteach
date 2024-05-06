'use client'
import { useSession } from "next-auth/react";
import React from 'react';
import ClassList from "@/components/class-list";
import Mural from "@/components/mural";
import { Avatar, AvatarImage } from "@/components/ui/avatar"

export default function UserProfile() {
  const session = useSession();

  return (
    <div className="container pb-10 flex flex-col justify-center items-center gap-12">
        <div className="flex w-[500px] h-[200px] justify-center items-center gap-10 border-4 border-border rounded-xl">
          <Avatar className="w-[100px] h-[100px]">
            <AvatarImage src="https://github.com/shadcn.png" />
          </Avatar>
          <div>
            <h2><strong>Nome:</strong> {session?.data?.user?.name}</h2>
            <h3><strong>Tipo de Perfil:</strong> Professor(a)</h3>
            <p><strong>Email:</strong> {session?.data?.user?.email}</p>
          </div>
        </div>
        <div className="flex w-full">
          <ClassList />
          <Mural />
        </div>
    </div>

  );
}