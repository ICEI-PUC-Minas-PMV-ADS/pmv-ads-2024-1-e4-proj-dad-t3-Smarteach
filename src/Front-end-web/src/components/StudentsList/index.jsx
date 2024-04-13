'use client'
import {getStudentsList} from "@/services/alunos.services";

const StudentsList = () => {
    const {data} = getStudentsList();

    return (
        <>
            {data?.length != 0 ? data?.map( data => (
            <div key={data._id}>
                <p className="text-black"> nome: {data.name}</p>
                <p className="text-black"> email: {data.email}</p>
                <p className="text-black"> class_number: {data.class_number}</p>
            </div>
        )) : <h1> Não há alunos cadastrados no sistema </h1>} 
        </>
    )
}

export default StudentsList;