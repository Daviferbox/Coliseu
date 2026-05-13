import { createContext, useState, type ReactNode } from "react";


type AuthContextType = {
    id: string;
    setId: (i:string) => void;
    nome: string;
    setNome: (n:string) => void;
    apelido: string;
    setApelido: (ap:string) => void;
    email: string;
    setEmail: (e:string) => void;
    senha: string;
    setSenha: (s:string) => void;
    avatar: string;
    setAvatar: (av:string) => void;
    logado: boolean;
    setLogado:(l:boolean) => void;
}

export const UsuarioLogadoContext = createContext<AuthContextType | null>(null);

export const UsuarioLogadoProvider = ({ children }: {children: ReactNode}) => {

    const [id, setId] = useState('');
    const [nome, setNome] = useState('');
    const [apelido, setApelido] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [avatar, setAvatar] = useState('');
    const [logado, setLogado] = useState(false);


    return(
        <UsuarioLogadoContext.Provider value={
            {
                id, setId,
                nome, setNome,
                apelido, setApelido,
                email, setEmail,
                senha, setSenha,
                avatar, setAvatar,
                logado, setLogado
            }
        }>
            {children}
        </UsuarioLogadoContext.Provider>

    )
}