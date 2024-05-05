'use client'
import { getStudentsList } from "@/services/alunos-services";
import { getProfessorList } from "@/services/professor-services";
import { getAdminList } from "@/services/admin-services";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Alunos = () => { 
    const {studentList} = getStudentsList();
    const {professorList} = getProfessorList();
    const {adminList} = getAdminList();

    return (
        <div className="container w-screen flex flex-col gap-10">
            <div className="flex flex-col">  
                <div className="flex w-full justify-between items-center">
                    <p className="text-3xl font-bold text-primaryColor"> ADMINISTRADORES </p>
                    <Link href="/cadastro/admin"> <Button> Cadastrar Administrador </Button> </Link>
                </div>
                <DataTable data={adminList} userType={"admin"}/>
            </div>
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="text-3xl font-bold text-primaryColor"> PROFESSORES </p>
                    <Link href="/cadastro/professor"> <Button> Cadastrar Professor </Button> </Link>
                </div>
                <DataTable data={professorList} userType={"professor"}/>

            </div>
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="text-3xl font-bold text-primaryColor"> ALUNOS </p>
                    <Link href="/cadastro/aluno"> <Button> Cadastrar Alunos </Button> </Link>
                </div>
                <DataTable data={studentList} userType={"aluno"}/>
            </div>
        </div>
    )
}

export default Alunos;