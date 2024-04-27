'use client'
import { getStudentsList } from "@/services/alunos-services";
import { getProfessorList } from "@/services/professor-services";
import { getAdminList } from "@/services/admin-services";
import { DataTable } from "./data-table";

const Alunos = () => { 
    const {studentList} = getStudentsList();
    const {professorList} = getProfessorList();
    const {adminList} = getAdminList();

    return (
        <div className="container w-screen flex flex-col gap-10">
            <div className="flex flex-col">  
                <p className="text-3xl font-bold text-primaryColor"> ADMINISTRADORES </p>
                <DataTable data={adminList}/>
            </div>
            <div className="flex flex-col">
                <p className="text-3xl font-bold text-primaryColor"> Professores </p>
                <DataTable data={professorList}/>

            </div>
            <div className="flex flex-col">
                <p className="text-3xl font-bold text-primaryColor"> Alunos </p>
                <DataTable data={studentList}/>
            </div>
        </div>
    )
}

export default Alunos;