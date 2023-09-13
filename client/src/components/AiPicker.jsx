import React from 'react';
import CustomButton from './CustomButton';

const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
   return (
      <div className="aipicker-container">
         <textarea
            className="aipicker-textarena"
            placeholder="ask Ai..."
            rows={5}
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
         />
         <div className="flex flex-wrap- gap-3">
            {generatingImg ? (
               <CustomButton
                  type="outline"
                  title="asking Ai ..."
                  customStyle="text-xs"
                  handleClick={() => handleSubmit('logo')}
               />
            ) : (
               <CustomButton
                  type="filled"
                  title="AI full"
                  customStyle="text-xs"
                  handleClick={() => handleSubmit('full')}
               />
            )}
         </div>
      </div>
   );
};

export default AiPicker;
