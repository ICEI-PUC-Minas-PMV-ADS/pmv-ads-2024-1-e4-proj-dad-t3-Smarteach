import ClassList from "@/components/class-list";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() { 
  const session = await getServerSession();

  if (!session){
    redirect('/login')
  }
  
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-2xl"> Turmas </h1>
      <ClassList />
    </div>
  );
}
