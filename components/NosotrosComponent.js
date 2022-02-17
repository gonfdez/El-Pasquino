const NosotrosComponent = () => {
    return (
        <>
        <div className="container">
            <h3>Equipo</h3>
            <div className="s">
                <b>Comité editorial (Artículos)</b><br/>
                Daniel González Barros
                <br/>
                Bosco Izuzquiza Vázquez
                <br/>
                Juanjo Romero Martínez
            </div>
            <div className="s">
                <b>Comité editorial (Multimedia)</b><br/>
                Íñigo Izuzquiza Vázquez
                <br/>
                William Alexander Ruf Cabezas
            </div>
            <div className="s">
                <b>Equipo de desarrollo web</b><br/>
                Gonzalo Fernández Suárez
            </div>

        </div>
        <style jsx>{`
            h3 {
                font-weight: bold;
                font-size: 30pt;
                margin-bottom: 30px;
            }
            .container {
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                text-align: center;
            }
            .s {
                margin-top: 30px;
                line-height : 30px;
            }
        `}</style>
        </>
    );
}

export default NosotrosComponent;