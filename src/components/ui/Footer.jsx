import '../../styles/components/ui/Footer.css'

export function Footer () {
  return (
    <footer>
      <div className='footer-info'>
        <div className='footer-logo'>
          <img src="SERINTEG.svg" alt="Logo de SERINTEG" />
          <p>SERINTEG</p>
        </div>
        <div className='footer-socials'>
          <h3>Nuestras redes</h3>
          <div className='logos-redes'>
            <a href='https://x.com/SerintegPeru' target='_blank' rel='noopener noreferrer' title='Síguenos en X'><img src="assets/images/redes/twitter.svg" alt="Icono de Twitter" /></a>
            <a href='https://www.facebook.com/serintegperu/' target='_blank' rel='noopener noreferrer' title='Síguenos en Facebook'><img src="assets/images/redes/facebook.svg" alt="Icono de Facebook" /></a>
            <a href='https://www.instagram.com/serinteg2022/' target='_blank' rel='noopener noreferrer' title='Síguenos en Instagram'><img src="assets/images/redes/instagram.svg" alt="Icono de Instagram" /></a>
            <a href='https://www.tiktok.com/@serintegperu' target='_blank' rel='noopener noreferrer' title='Síguenos en TikTok'><img src="assets/images/redes/tiktok.svg" alt="Icono de TikTok" /></a>
          </div>
        </div>
        <div className='footer-contacts'>
          <h3>Contáctanos</h3>
          <div className='contacts'>
            <div>
              <a href="https://maps.app.goo.gl/EyVKfZeXfcE8AB8T6" rel='noopener noreferrer' target='_blank'><img src="assets/images/contacto/ubication.svg" alt="Icono de ubicación" /></a>
              <p>Santa Rosa 946 Stand 32<br />Galería Santa Rosa - Surquillo</p>
            </div>
            <div>
              <img src="assets/images/contacto/mail.svg" alt="Icono de ubicación" />
              <p>jlizon@serintegeirl.com<br />corporativo@serintegeirl.com<br />ventas@serintegeirl.com</p>
            </div>
            <div>
              <img src="assets/images/contacto/mobile.svg" alt="Icono de ubicación" />
              <p>971 164 222<br />997 090 002</p>
            </div>
          </div>
        </div>
      </div>
      <div className='copyright'>
        <p>© 2024 SERINTEG E.I.R.L. - Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

