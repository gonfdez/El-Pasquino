import Script from 'next/script'


const Hero = () => {
    return (
        <>
        <div className="hero">
            <img src="/ilustracionPasquino.jpg" alt="" />
            <span id='heroText'>
                Bienvenido a <b>El Pasquino</b><br/>
                Actualmente nos encontramos desarrollando nuestra revista digital.
            </span>
        

        </div>
        <style jsx>{`
            .hero {
                height: 100vh;
                width: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
            #heroText {
                transition: opacity 2s;
                justify-content: center;
                text-align: center;
                margin: 0px 20px 0px 20px;
            }
            img {
                width: 40%;
            }

        
        `}</style>
        <Script id="heroAnimation" strategy="lazyOnload">{`
            text0 = document.getElementById('heroText');
            c = 0;
            function animation() {
                if (text0.style.opacity == 0) {
                    text0.style.opacity = 100; 
                } 
                else {
                    text0.style.opacity = 0;  
                    setTimeout(function(){
                        if (c%2==0) {text0.innerHTML ="<b>¿Te interesa colaborar con nosotros?</b><br/>No dudes en escribirnos un correo con tus propuestas de artículos a:<br/><a href='mailto:revista@elpasquino.org'> revista@elpasquino.org</a>";}
                        else {text0.innerHTML ="Bienvenido a <b>El Pasquino</b><br/>Actualmente nos encontramos desarrollando nuestra revista digital.";}
                        c++;
                    }, 2001);
                }
            }
            window.setInterval(animation, 8000);

        `}</Script>
        </>
    );
} 



export default Hero;