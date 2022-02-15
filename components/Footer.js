import Divider from "./Divider";

const Footer = () => {
return (
    <>
    <Divider/>
    <div className="footerContainer">
        <div className="cols">
            <div className="col1">
            <h4 className="logo">
                El Pasquino
            </h4>
            </div>
            <div className="col2">
                <a href="mailto:revista@elpasquino.org"> revista@elpasquino.org</a>
                 <img src="/twitter.svg" alt="Twitter" /> {/*Enlace a twitter de el pasquino */}
            </div> 
        </div>
        <span className="d">Proyecto nacido en Madrid</span>
    </div>
    <style jsx>{`
        h4 {
            font-weight: bold;
        }
        .footerContainer {
            margin: 0px;
            padding: 10px;
            width: 100%;
            position: relative;
            bottom: 0;
        }
        .cols {
            margin: 0px 10px 0px 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .col2 {
            display:flex;
            justify-content: space-between;
            margin: 2px;
        }
        .d {
            font-size: 8pt;
            display: flex;
            margin-top: 10px;
            justify-content: center;
        }
        img {
            width: 25px;
            fill: black;
            margin-left: 20px;
        }
    `}</style>
    </>
    );
}

export default Footer;