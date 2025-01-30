// Gerekli React-Bootstrap bileşenlerini ve Bootstrap CSS dosyasını içe aktarıyoruz.
import Container from 'react-bootstrap/Container'; // Navbar içeriklerini hizalamak için kullanılan kapsayıcı.
import Nav from 'react-bootstrap/Nav'; // Navbar içindeki bağlantılar (linkler) için.
import Navbar from 'react-bootstrap/Navbar'; // Temel Navbar yapısı için.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap'in temel CSS dosyası.
import NavDropdown from 'react-bootstrap/NavDropdown'; // Dropdown menü bileşeni.

// BasicExample adında bir fonksiyon bileşeni tanımlıyoruz.
function BasicExample() {
  return (
    // Navbar bileşeni, temel gezinme çubuğunu temsil eder.
    <Navbar expand="lg" className="bg-primary">
      {/* Container bileşeni, içerikleri hizalamak için kullanılır */}
      <Container>
        {/* Navbar.Brand: Sol üstteki markayı temsil eder */}
        <Navbar.Brand href="/" className="text-white">Home</Navbar.Brand>
        
        {/* Navbar.Toggle: Küçük ekranlarda menüyü açma-kapama düğmesi */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        {/* Navbar.Collapse: Menü öğelerini kapsar, küçük ekranlarda açılıp kapanabilir */}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Nav: Menü bağlantılarını (linkleri) gruplamak için kullanılan bileşen */}
          <Nav className="me-auto">
            {/* Nav.Link: Her bir bağlantıyı temsil eder */}
            <Nav.Link href="/char" className="text-white">Characters</Nav.Link>
            <Nav.Link href="/login" className="text-white">Login</Nav.Link>
            
            
            {/* NavDropdown: Sezon özetleri için açılır menü */}
            <NavDropdown expand="lg" title="Season Summary" className="text-white">
              {/* Her bir dropdown öğesi için bağlantılar */}
              <NavDropdown.Item href="/s1">Season 1</NavDropdown.Item>
              <NavDropdown.Item href="/s2">
                Season 2
              </NavDropdown.Item>
              <NavDropdown.Item href="/s3">Season 3</NavDropdown.Item>
              
              {/* Dropdown'daki bir ayrıcı çizgi */}
              <NavDropdown.Divider />
              
              <NavDropdown.Item href="/s4">
                Season 4
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// Bileşeni dışa aktarıyoruz, böylece başka dosyalarda kullanılabilir.
export default BasicExample;
