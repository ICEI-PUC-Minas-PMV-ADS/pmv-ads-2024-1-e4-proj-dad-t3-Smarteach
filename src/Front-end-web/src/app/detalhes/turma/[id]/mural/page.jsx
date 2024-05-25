'use client'
import { getClassProfile } from "@/services/turmas-services";
import React, { useState } from 'react';

const Mural = ({ params }) => {
  const { classProfileData } = getClassProfile(params.id);

  const leiaMais = (id) => {
    const pontos = document.getElementById(`pontos-${id}`);
    const maisTexto = document.getElementById(`mais-${id}`);
    const btnLeiaMais = document.getElementById(`btnLeiaMais-${id}`);

    if (pontos.style.display === "none") {
      pontos.style.display = "inline";
      maisTexto.style.display = "none";
      btnLeiaMais.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M19 9l-7 7-7-7"/></svg>';
    } else {
      pontos.style.display = "none";
      maisTexto.style.display = "inline";
      btnLeiaMais.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M5 15l7-7 7 7"/></svg>';
    }
  }

  return (
    <div className="container">
      <div className="bg-primaryColor p-4 rounded-xl">
        <h1 className="text-3xl font-bold text-white">Turma {classProfileData?.number}</h1>
      </div>
      <div className=" h-[1000px] flex">
        {classProfileData?.timeline && Object.keys(classProfileData.timeline).map(year => {
          const months = Object.keys(classProfileData.timeline[year]);
          if (months.length === 0) return null;
          return (
            <div key={year} className="flex justify-center container">
              {months.map(month => {
                const days = Object.keys(classProfileData.timeline[year][month]);
                if (days.length === 0) return null;
                return (
                  <div key={month}>
                    {days.map(day => {
                      const hours = Object.keys(classProfileData.timeline[year][month][day]);
                      if (hours.length === 0) return null;
                      return (
                        <div key={day}>
                          {hours.map(hour => {
                            const task = classProfileData.timeline[year][month][day][hour];
                            if (!task) return null;
                            const taskId = `${year}-${month}-${day}-${hour}`;
                            return (
                              <div key={hour} className="bg-gray-200 rounded-xl shadow-xl mt-5 mr-5 p-5">
                                <div className="flex bg-primaryColor rounded-xl justify-between px-8">
                                  <p className="text-2xl font-bold text-white mt-3">{task.name}</p>
                                  <p className="flex text-m text-white mt-2">{day}/{month} <br /> {hour}</p>
                                </div>
                                <div>
                                  <p className="flex text-2xl font-light text justify-center mt-3 text-gray-500">{task.subject}</p>
                                  <p className=""><span id={`pontos-${taskId}`}></span>
                                    <span id={`mais-${taskId}`} style={{ display: 'none' }}>
                                      <p className=" text-x leading-5 text-gray-500 mt-3 mb-3 px-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed sollicitudin ex.<br />
                                        Nam semper efficitur orci ac pellentesque. Nullam luctus euismod eros.<br />
                                        Duis mollis, ante in mollis elementum, sapien elit congue felis, nec commodo<br />
                                        velit risus sit amet quam. Quisque elementum orci non sagittis commodo.<br />
                                        In egestas ligula turpis, id scelerisque arcu pharetra et.<br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br /></p>
                                        <p className="text-x leading-5 text-gray-500 mt-3 mb-3 px-10"><strong>Email:</strong> {task.teacher_email}</p></span>
                                  </p>
                                </div>
                                <div className=" px-10">
                                  <img className="flex rounded-xl justify-center items-center mt-5 mb-3 " src="https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png" alt="Imagem de exemplo"></img>
                                </div>
                                <div className="flex justify-center items-center">
                                  <button onClick={() => leiaMais(taskId)} id={`btnLeiaMais-${taskId}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7" /></svg>
                                  </button>
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
    </div>
  );
}

export default Mural;
