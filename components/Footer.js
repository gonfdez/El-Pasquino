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
        <span className="d">Proyecto nacido en Madrid, España.</span>
    </div>
    <style jsx>{`
    h4 {
        font-weight: bold;
    }
    .footerContainer {
        margin: 0px;
        padding: 0px 20px 0px 20px;
        width: 100%;
        position: relative;
        bottom: 0;
        height: 10vh;
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
        margin-bottom: 10px;
        justify-content: center;
    }
    img {
        width: 25px;
        fill: black;
        margin-left: 20px;
    }

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) { 
    .footerContainer {
        padding: 0px 100px 0px 100px;  
    }
}
`}</style>
    </>
    );
}


export default Footer;

// let css = `
//     h4 {
//         font-weight: bold;
//     }
//     .footerContainer {
//         margin: 0px;
//         padding: 0px 20px 0px 20px;
//         width: 100%;
//         position: relative;
//         bottom: 0;
//         height: 10vh;
//     }
//     .cols {
//         margin: 0px 10px 0px 10px;
//         display: flex;
//         justify-content: space-between;
//         align-items: center;
//     }
//     .col2 {
//         display:flex;
//         justify-content: space-between;
//         margin: 2px;
//     }
//     .d {
//         font-size: 8pt;
//         display: flex;
//         margin-top: 10px;
//         margin-bottom: 10px;
//         justify-content: center;
//     }
//     img {
//         width: 25px;
//         fill: black;
//         margin-left: 20px;
//     }

// /* Large devices (laptops/desktops, 992px and up) */
// @media only screen and (min-width: 992px) { 
//     .footerContainer {
//         padding: 0px 100px 0px 100px;  
//     }
// }
// `;


