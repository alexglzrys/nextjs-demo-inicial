import '@/styles/globals.css'

// Todos los componentes de página de NextJS pasan por este componente
// * Especialmente útil para declarar estilos y contextos que deben estar disponibles de forma global en la aplicacion

export default function App({ Component, pageProps }) {
    // Utilizar el layout definido a nivel de página si está definido (Multiples Layouts)
    const getLayout = Component.getLayout || ((page) => page);

    // return <Component {...pageProps} />
    
    return getLayout(<Component {...pageProps} />)
}
