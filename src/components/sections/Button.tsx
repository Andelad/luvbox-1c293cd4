import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({ 
  children, 
  onClick, 
  className = '', 
  disabled = false, 
  type = 'button' 
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`luvmap-button ${className}`}
    >
      <div className="luvmap-button-border" />
      <div className="luvmap-button-content">
        <div className="luvmap-button-inner">
          <div className="luvmap-button-text">
            {children}
          </div>
        </div>
      </div>
    </button>
  );
}