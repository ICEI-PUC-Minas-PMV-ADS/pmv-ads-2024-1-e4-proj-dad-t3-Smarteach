import Link from "next/link";
import { Avatar, AvatarImage } from "../ui/avatar";
import { ChevronRight } from "lucide-react";
import { Separator } from "../ui/separator";
import Image from "next/image";


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
        <div className="flex flex-col w-full justify-center items-center h-full min-w-[300px] gap-10">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl pb-5 text-primaryColor font-bold"> Mural </h2>
                
                <Link href="/">
                  <Image width={300} height={300} src={"https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"} className="bg-black shadow-2xl rounded-2xl w-[250px] h-[100px] object-cover"/>
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl pb-5 text-primaryColor font-bold"> Cronograma </h2>
                <Link href="/">
                  <Image width={300} height={300} src={"https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"} className="bg-black shadow-2xl rounded-2xl w-[250px] h-[100px] object-cover"/>
                </Link>
              </div>
        </div>
    )
}

export default Mural;