import { Line, Circle } from "rc-progress";

export const PercentageBar = () => {
    // Hacer una llamada a la api para recopilar informacion de cantidad de lecciones completadas
    const percentage = 50;
  
    return (
      <div className="mt-4">
        <Line percent={percentage} strokeWidth={1.3} strokeColor="#300A6F" className="-mb-1" trailColor="#575757" trailWidth={1.3}/>
        <span className="text-[15px]">{percentage}% completed</span>
      </div>
    );
  };