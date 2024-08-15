import { Line, Circle } from "rc-progress";

export const PercentageCircular = () => {
    // Hacer una llamada a la api para recopilar informacion de cantidad de lecciones completadas
    const percentage = 39;
  
    return (
      <div className="mt-4">
        <Circle percent={percentage} strokeWidth={15} strokeColor="#300A6F" className="h-6 w-7" trailColor="#575757" trailWidth={10} />
      </div>
    );
  };