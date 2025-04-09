import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
export function List({ children }: Props) {
  return <section className="space-y-3">{children}</section>;
}
