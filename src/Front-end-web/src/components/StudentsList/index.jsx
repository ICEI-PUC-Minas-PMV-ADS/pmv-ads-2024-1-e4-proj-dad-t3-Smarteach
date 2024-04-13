'use client'
import useStudentsList from "@/services/alunos.services";

const StudentsList = () => {
    const {data} = useStudentsList();

    return (
        <>
            {data?.map( data => (
            <div key={data._id}>
                <p className="text-black"> nome: {data.name}</p>
                <p className="text-black"> email: {data.email}</p>
                <p className="text-black"> class_number: {data.class_number}</p>
            </div>
        ))}
        </>
    )
}

export default StudentsList;