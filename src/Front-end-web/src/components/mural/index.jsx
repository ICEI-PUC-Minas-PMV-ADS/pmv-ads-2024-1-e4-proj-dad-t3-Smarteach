import Link from "next/link";
import Image from "next/image";


const MuralHome = () => {
    return (
        <div className="flex flex-col w-full justify-center items-center h-full min-w-[300px] gap-10">
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl pb-5 text-primaryColor font-bold"> Mural </h2>
                
                <Link href="/">
                  <Image width={300} alt="imagem" height={300} src={"https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"} className="bg-black shadow-2xl rounded-2xl w-[250px] h-[100px] object-cover"/>
                </Link>
              </div>
              <div className="flex flex-col justify-center items-center">
                <h2 className="text-3xl pb-5 text-primaryColor font-bold"> Cronograma </h2>
                <Link href="/">
                  <Image width={300} alt="imagem" height={300} src={"https://img.freepik.com/vetores-gratis/formulas-cientificas-na-lousa_23-2148494010.jpg"} className="bg-black shadow-2xl rounded-2xl w-[250px] h-[100px] object-cover"/>
                </Link>
              </div>
        </div>
    )
}

export default MuralHome;