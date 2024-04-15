import './Header.css';

const Header = () => {
    return (
        <div className="container  gradient-background" >

            <div className='row '>
                <div className='col ' style={{ textAlign: 'center' }}>
                    <p className='pt-2' style={{ fontFamily: "DM Sans" }}>
                        <span className=' me-2 d-none d-md-inline'>This page is included in a free SaaS Website Kit.</span>
                        <span >View the complete Kit <img src='./Icons.png' alt='...'></img></span>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Header;