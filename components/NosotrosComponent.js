const NosotrosComponent = () => {
    return (
        <>
        <div className="container">
            <h3>Equipo</h3>
            <div className="s">
                <b>Fundador y director de prensa</b>
                <br/>William Alexander Ruf
            </div>{/* imagenes circulares de lis miembros del proyecto */}
            <div className="s">
                <b>Equipo de desarrollo web</b>
                <br/>Gonzalo Fernández Suárez
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
                margin-top: 10px;
            }
        `}</style>
        </>
    );
}

export default NosotrosComponent;