import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import StudentsList from "@/components/StudentsList"

export default async function Home() { 
  const session = await getServerSession();

  if (!session){
    redirect('/login')
  }
  
  return (
    <div className="flex flex-col">
      <h1> Homepage </h1>
        <StudentsList />
    </div>
  );
}
