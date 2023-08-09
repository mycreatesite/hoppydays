import { ReactNode } from 'react';
import Header from '@/components/layouts/Header'
import Footer from '@/components/layouts/Footer'

type Props = {
  children?: ReactNode;
};

const Layout = ({children}: Props) => {
  return (
    <>
      <Header/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}  
export default Layout