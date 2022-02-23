import React from "react";
import Description from "./Description";

const Question = ({ question, answer }) => {
    const [showAnswers, setShowAnswers] = React.useState(false);
    const onClick = () => setShowAnswers(!showAnswers);

  return (
    <div className="border-b">
        <div className="flex justify-between gap-x-8 mx-auto cursor-pointer" onClick={onClick}>
            <h2 className="font-Montserrat font-semibold text-dark-gray text-lg text-left leading-normal mb-2 lg:text-2xl lg:mb-6">{question}</h2>
            { showAnswers ? 
                <h2 className="font-Montserrat text-brand-green text-4xl text-left leading-normal mb-2 p-2 lg:mb-6">-</h2> 
                : <h2 className="font-Montserrat text-brand-green text-4xl text-left leading-normal mb-2 p-2 lg:mb-6">+</h2>
            }
        </div>
        
        { showAnswers ? <Description text={answer} /> : null }
        
    </div>
  );
};

export default Question;
