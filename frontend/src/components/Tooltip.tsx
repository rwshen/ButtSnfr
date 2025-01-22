import React, { ReactNode, useState } from 'react';

export function Tooltip({ content, children }: {content: string, children: ReactNode}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      className='relative'
    >
      {children}
      {showTooltip && (
        <div className='absolute left-0 bg-yellow-400 text-white p-1 rounded-md'>
          {content}
        </div>
      )}
    </div>
  );
}