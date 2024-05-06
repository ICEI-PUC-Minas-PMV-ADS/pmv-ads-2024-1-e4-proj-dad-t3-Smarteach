export function verificaTarefaNoDia(classProfileData, data) {
  const ano = data?.getFullYear();
  const mes = String(data?.getMonth() + 1).padStart(2, '0');
  const dia = String(data?.getDate()).padStart(2, '0');
  
  if (!classProfileData || !classProfileData.timeline) {
    return false;
  }
  
  const yearData = classProfileData.timeline[ano];
  if (!yearData) {
    return false;
  }
  
  const monthData = yearData[mes];
  if (!monthData) {
    return false;
  }
  
  const dayData = monthData[dia];
  if (!dayData) {
    return false;
  }
  
  
  for (const hour in dayData) {
    if (Object.keys(dayData[hour]).length > 0) {
      return true;
    }
  }

  return false;
}
