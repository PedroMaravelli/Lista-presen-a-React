import './style.css'



export function Header(){
    return(
        <div>
            <header className='headerContain'>
                <h2>Listining</h2>
                <nav >
                    <a href=''>Inicio</a>
                    <div className='dividir'></div>
                    <a href=''>Voltar</a>
                </nav>

            </header>
        </div>
    )
}

