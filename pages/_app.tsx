import '../styles/globals.css'
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement } from 'react';

// Todos los componentes de página de NextJS pasan por este componente
// * Especialmente útil para declarar estilos y contextos que deben estar disponibles de forma global en la aplicacion

// Definir el tipo de dato del componente pasado
type NextPageWithLayout = NextPage & {
    // y opcionalmente puede tener una función getLayout que espera una página del tipo ReactElement y retorna un JSX.Element
    getLayout?: (page: ReactElement) => JSX.Element
}

// Definir las props para este componente
type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
    // Utilizar el layout definido a nivel de página si está definido (Multiples Layouts)
    const getLayout = Component.getLayout || ((page) => page);

    // return <Component {...pageProps} />
    
    return getLayout(<Component {...pageProps} />)
}
