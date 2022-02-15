import Divider from '../components/Divider';

const NavBar = () => {
    return (
        <>
        <div className='navContainer'>
            <nav>
                <h4 className="logo">
                    El Pasquino
                </h4>
                <div className="navMenu">
                    <span>
                        <a href="">
                            Nosotros
                        </a>
                    </span>
                </div> 
            </nav>
            <Divider/>
        </div>
        <style jsx>{`
            .navContainer {
                margin: 0px;
                padding: 0px;
                width: 100%;
                position: fixed;
                top: 0;
            }
            .logo {
                font-weight: bold;
                font-size: 14pt;
            }
            nav {
                margin: 0px;
                padding: 15px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                
            }
            .navMenu{
                justify-content: space-between;
            }
            

        `}</style>
        </>
    );
}
    

export default NavBar;

