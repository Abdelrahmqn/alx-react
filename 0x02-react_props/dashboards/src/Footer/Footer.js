
import './Footer.css';


function Footer() {
  return (
      <footer className='App-footer'>
      <hr class="solid"></hr>
        <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
      </footer>
  );
}

export default Footer;
