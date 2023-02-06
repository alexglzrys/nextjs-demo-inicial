import Link from 'next/link'
import { useRouter } from 'next/router';

const style = {
    color: '#0070f3',
}

export const ActiveLink = ({text, href}) => {

    // Obtener información de la ruta actual
    const { asPath } = useRouter();

    // Aplicar estilo CSS solo si la ruta coincide con la actual
    // Otra forma de hacerlo: https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
    
    return <Link href={href} style={asPath == href ? style : null }>{text}</Link>
}