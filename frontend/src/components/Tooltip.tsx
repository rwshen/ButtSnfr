import React, { ReactNode, useState } from 'react';

export function Tooltip({ content, children }: {content: string, children: ReactNode}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div 
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
      style={{ position: 'relative' }}
    >
      {children}
      {showTooltip && (
        <div style={{ position: 'absolute', top: '100%', left: 0, background: 'purple', color: 'white', padding: '5px' }}>
          {content}
        </div>
      )}
    </div>
  );
}