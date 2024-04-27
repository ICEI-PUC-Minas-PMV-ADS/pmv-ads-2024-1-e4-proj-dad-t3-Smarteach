'use client'
import { getClassProfile } from "@/services/turmas-services";

const Mural = ({params}) => {
    const {classProfileData} = getClassProfile(params.id)

    return (
      <div className="container flex flex-col justify-center items-center">
        {classProfileData?.timeline && Object.keys(classProfileData?.timeline).map(year => {
          const months = Object.keys(classProfileData?.timeline[year]);
          if (months.length === 0) return null; // Evita renderização de div vazia
          return (
            <div key={year} className="flex flex-col justify-center items-center gap-10">
              {months.map(month => {
                const days = Object.keys(classProfileData?.timeline[year][month]);
                if (days.length === 0) return null; // Evita renderização de div vazia
                return (
                  <div key={month}>
                    {days.map(day => {
                      const hours = Object.keys(classProfileData?.timeline[year][month][day]);
                      if (hours.length === 0) return null; // Evita renderização de div vazia
                      return (
                        <div key={day}>
                          {hours.map(hour => {
                            const task = classProfileData?.timeline[year][month][day][hour];
                            if (!task) return null; // Evita renderização de div vazia
                            return (
                              <div key={hour}>
                                <h5>{day} {month} {year} - {hour} </h5>
                                <div>
                                  <p>Nome: {task.name}</p>
                                  <p>Assunto: {task.subject}</p>
                                  <p>Email do Professor: {task.teacher_email}</p>
                                  <p>Recorrência: {task.recorrencia}</p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
}

export default Mural;