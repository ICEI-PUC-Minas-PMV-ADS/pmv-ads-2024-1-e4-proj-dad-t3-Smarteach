import ClassList from "@/components/class-list";
import Mural from "@/components/mural";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() { 
  const session = await getServerSession();

  if (!session){
    redirect('/login')
  }
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-10">
      <h1 className="text-2xl"> Turmas </h1>
      <div className="flex">
        <ClassList />
        <Mural />
      </div>
    </div>
  );
}
