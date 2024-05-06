'use client'
import { getClassProfile } from "@/services/turmas-services";
import React, { useState } from 'react';

const Mural = ({ params }) => {
  const { classProfileData } = getClassProfile(params.id);

  return (
    <div className="container flex flex-col justify-center items-center">
      <div className="w-full bg-primaryColor p-5 rounded-xl flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white"> Turma {classProfileData?.number}</h1>
      </div>

      {/* Renderização dos dados do mural */}
      {classProfileData?.timeline && Object.keys(classProfileData?.timeline).map(year => {
        const months = Object.keys(classProfileData?.timeline[year]);
        if (months.length === 0) return null;
        return (
          <div key={year} className="flex flex-row justify-center items-center gap-10 h-full w-full mt-4 mb-10">
            {months.map(month => {
              const days = Object.keys(classProfileData?.timeline[year][month]);
              if (days.length === 0) return null;
              return (
                <div key={month}>
                  {days.map(day => {
                    const hours = Object.keys(classProfileData?.timeline[year][month][day]);
                    if (hours.length === 0) return null;
                    return (
                      <div key={day}>
                        {hours.map(hour => {
                          const task = classProfileData?.timeline[year][month][day][hour];
                          if (!task) return null;
                          return (
                            <div key={hour}>
                              <div className="bg-gray-200 px-10 py-5 rounded-xl shadow-xl mt-10">
                                <ul>
                                  <li className="flex">
                                      <div className="flex-auto">
                                        <div className="flex justify-between">
                                          <p className="text-2xl font-semibold text-gray-900 h-30 mt-2 ">{task.name} de {task.subject}</p>
                                          <p className="flex text-m text-gray-900 mt-4">{day}/{month} <br /> {hour}</p>
                                        </div>
                                        <p className="truncate text-x leading-5 text-gray-500 "><strong>Email:</strong> {task.teacher_email}</p>
                                        <img className="flex justify-center items-center mt-5" src="https://img.global.news.samsung.com/br/wp-content/uploads/2018/01/flip-samsung.png"></img>
                                      </div>
                                  </li>
                                </ul>
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
