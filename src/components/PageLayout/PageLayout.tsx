import React from 'react';

interface PageLayoutProps {
  children?: JSX.Element | JSX.Element[];
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="h-full py-[1.6rem] px-[2.4rem] bg-white">{children}</div>
  );
}
