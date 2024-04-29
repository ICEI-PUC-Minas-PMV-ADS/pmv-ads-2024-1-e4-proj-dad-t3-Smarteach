'use client'
import { getStudentsList } from "@/services/alunos-services";
import { getProfessorList } from "@/services/professor-services";
import { getAdminList } from "@/services/admin-services";
import { DataTable } from "./data-table";
import { Button } from "@/components/ui/button";

const Alunos = () => { 
    const {studentList} = getStudentsList();
    const {professorList} = getProfessorList();
    const {adminList} = getAdminList();

    return (
        <div className="container w-screen flex flex-col gap-10">
            <div className="flex flex-col">  
                <div className="flex w-full justify-between items-center">
                    <p className="text-3xl font-bold text-primaryColor"> ADMINISTRADORES </p>
                    <Button> Cadastrar Administrador </Button>
                </div>
                <DataTable data={adminList} userType={"admin"}/>
            </div>
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="text-3xl font-bold text-primaryColor"> PROFESSORES </p>
                    <Button> Cadastrar Professor </Button>
                </div>
                <DataTable data={professorList} userType={"professor"}/>

            </div>
            <div className="flex flex-col">
                <div className="flex w-full justify-between items-center">
                    <p className="text-3xl font-bold text-primaryColor"> ALUNOS </p>
                    <Button> Cadastrar Alunos </Button>
                </div>
                <DataTable data={studentList} userType={"aluno"}/>
            </div>
        </div>
    )
}

export default Alunos;