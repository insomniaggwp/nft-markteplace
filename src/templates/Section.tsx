import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <div
      className={`flex-1 gap-8 md:px-[115px] md:py-[80px] p-8 w-full ${className}`}
    >
      {children}
    </div>
  );
};

export default Section;
