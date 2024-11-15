import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Auth({ children }: LayoutProps) {
  return <div>{children}</div>;
}
