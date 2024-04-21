import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";


const Mural = () => {

    const data = [
        {
          id: 1,
          title: 'Aviso - Trabalho',
          turma: 202,
        },
        {
          id: 2,
          title: 'Prova DIA 10',
          turma: 303,
        }
    ]

    return (
        <div className="flex flex-col w-full h-full min-w-[300px]">
          <h2 className="text-3xl pb-5"> Mural </h2>
          <div className="flex flex-col gap-4">
            {data.map(data => (
              <>
                <div className="flex w-full gap-3 justify-between items-center" key={data.id}>
                  <div className="flex">
                    <Avatar className="mr-5" >
                      <AvatarImage src="https://img.freepik.com/premium-vector/green-folder-with-checklist-isolated-vector-white-background_349999-919.jpg"/>
                    </Avatar>
                    <div className="flex flex-col">  
                      <p className="text-left"> {data.title} </p>
                      <p className="text-slate-500 text-sm"> Turma {data.turma} </p>
                    </div>
                  </div>
                  <div>
                    <Link href="/"> <ChevronRight className="bg-primaryPurple rounded-2xl text-white"/> </Link>
                  </div>
                </div>
                <Separator />
              </>
            ))}
          </div>
        </div>
    )
}

export default Mural;