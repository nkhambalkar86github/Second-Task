import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavigationBar = () => {
    return (
        <div className="container p-3" style={{ backgroundColor: 'black' }}>

            <div className='row p-2'>

                <div className='col'>
                    {/* <img className="rounded-3" src='./logosaas.png' alt='...' style={{border:'1px solid',boxShadow:'1px 1px 5px 1px'}} ></img>&nbsp;&nbsp;<span style={{fontFamily:"Inter",color:'#FFFFFF'}}>made by</span>&nbsp;&nbsp;<img src='./Vector.png' alt='...'></img>&nbsp;&nbsp;<img src='./Vector2.png' alt='...'></img> */}
                    <p>
                        <img className="rounded-3 me-2" src="./logosaas.png" style={{border:'1px solid',boxShadow:'1px 1px 5px 1px'}} />
                        <span className="me-2 d-none d-md-inline" style={{fontFamily:"Inter",color:'#FFFFFF'}}>made by</span>
                        <img src="./Vector.png" className="me-2 d-none d-md-inline" />
                        <span className="d-none d-md-inline" style={{fontFamily:"DM Sans",fontWeight:"bold",color:'#FFFFFF'}}>Framer</span>
                    </p>
                </div>

                <div className='col ' style={{ display: 'contents' }}>
                    <Navbar expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: 'lightgray' }} />
                        <Navbar.Collapse id="basic-navbar-nav ">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home" color='#8E8E8E' style={{ fontSize: '18px' }}></Nav.Link>&nbsp;&nbsp;&nbsp;
                                <Nav.Link href="#about" color='#8E8E8E' style={{ fontSize: '18px' }}></Nav.Link>&nbsp;&nbsp;&nbsp;
                                <Nav.Link href="#services" color='#8E8E8E' style={{ fontSize: '18px' }}></Nav.Link>&nbsp;&nbsp;&nbsp;
                                <button className='rounded-3' style={{ fontFamily: "Inter", fontWeight: '500', width: '120px', height: '39px', border: 'none', padding: '15px, 20px, 15px, 20px' }}>Get for free</button>

                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

            </div>

        </div>
    )
}

export default NavigationBar;