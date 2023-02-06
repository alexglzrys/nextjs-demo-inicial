import Link from 'next/link'
import { useRouter } from 'next/router';
import { CSSProperties, FC } from 'react';

// Establecer el tipo de información del objeto (Propiedades de CSS)
const style: CSSProperties = {
    color: '#0070f3',
}

// Crear una intefaz para declarar como luce la información de las propiedades pasadas a este componente
interface Props {
    text: string;
    href: string;
}

// ActiveLink es un Functional Component de React que recibe Props que lucen como la interfaz Props
export const ActiveLink: FC<Props> = ({text, href}) => {

    // Obtener información de la ruta actual
    const { asPath } = useRouter();

    // Aplicar estilo CSS solo si la ruta coincide con la actual
    // Otra forma de hacerlo: https://stackoverflow.com/questions/53262263/target-active-link-when-the-route-is-active-in-next-js
    
    return <Link href={href} style={asPath == href ? style : undefined }>{text}</Link>
}