import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from '../header/Header';


export const Layout = () => {

    return(
        <>
        <Suspense>
            <main>
            <Header/>
                <Outlet/>
                
            </main>
        </Suspense>
        </>
    )
}