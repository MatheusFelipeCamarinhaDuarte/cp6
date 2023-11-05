import Link from "next/link";


export default function Cabecalho() {
    return (
        <header className="bg-gray-800 text-white h-16">
            <nav className="flex flex-row justify-around">
                <Link className="link-cabecalho" href="/consumo/eletro-view">Eletrônicos</Link>
                <Link className="link-cabecalho" href="/produtos/produto/estaticas/tenis">TÊNIS</Link>
                <Link className="link-cabecalho" href="/produtos/produto/dinamicas/estranho/tenis-preto">TÊNIS PRETO</Link>
                <Link className="link-cabecalho" href="/produtos/produto/dinamicas/vestuario/camisa-xadrez">CAMISA-X</Link>
                <Link className="link-cabecalho" href="/consumo/user-view">Usuários</Link>
            </nav>
        </header>
    )
}
