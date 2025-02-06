import { useState } from "react";
export const AnimatedComponent = () => {
    const [isAnimating, setIsAnimating] = useState(false);
  
    return (
      <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-semibold text-green-800">Animasjonskomponent</h2>
        <div
          className={`mt-4 w-24 h-24 bg-green-700 text-white flex items-center justify-center rounded-lg transition-transform duration-500 ${isAnimating ? "rotate-180 scale-110" : ""}`}
          onClick={() => setIsAnimating(!isAnimating)}
        >
          Klikk for animasjon
        </div>
      </div>
    );
  };
export default AnimatedComponent;