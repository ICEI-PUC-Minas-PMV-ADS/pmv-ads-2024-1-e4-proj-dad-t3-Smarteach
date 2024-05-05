import { verificaTarefaNoDia } from "./verificaTarefaNoDia";

export function obterTarefasDoDia(classProfileData, date) {
    const tarefas = [];
    const temTarefas = verificaTarefaNoDia(classProfileData, date);

    if (temTarefas) {
        const ano = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, '0');
        const dia = String(date.getDate()).padStart(2, '0');

        const dayData = classProfileData.timeline[ano]?.[mes]?.[dia];
        for (const hora in dayData) {
            const tarefaHora = dayData[hora];
            if (Object.keys(tarefaHora).length > 0) {
                const tarefaComData = {
                    dia,
                    mes,
                    ano,
                    hora,
                    ...tarefaHora
                };
                tarefas.push(tarefaComData);
            }
        }
    }

    return tarefas;
}
