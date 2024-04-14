'use client'
import { getClassList } from "@/services/turmas.services";

const ClassList = () => {
    const {data} = getClassList();

    return (
        <>
            {data?.map(data => (
                <div>
                <p>Turma {data.number}</p>
                </div>
            ))}
        </>
    )
}

export default ClassList;