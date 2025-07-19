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
      className={`luvbox-button ${className}`}
    >
      <div className="luvbox-button-border" />
      <div className="luvbox-button-content">
        <div className="luvbox-button-inner">
          <div className="luvbox-button-text">
            {children}
          </div>
        </div>
      </div>
    </button>
  );
}