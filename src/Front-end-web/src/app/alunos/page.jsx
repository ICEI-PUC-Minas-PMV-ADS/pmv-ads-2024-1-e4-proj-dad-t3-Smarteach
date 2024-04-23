'use client'
import { Button } from "@/components/ui/button";
import { DataTable } from "./data-table";


const Alunos = () => { 

    return (
        <div className="w-screen h-screen flex justify-center">
            <DataTable />
            <Button href="/registrar"> Criar Aluno </Button>
        </div>
    )
}

export default Alunos;