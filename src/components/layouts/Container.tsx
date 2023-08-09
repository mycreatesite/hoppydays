import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  containerClass?: string;
};

const Container = ({children, containerClass}: Props) => {
  return (
    <div className={containerClass}>
      {children}
    </div>
  )
}  
export default Container