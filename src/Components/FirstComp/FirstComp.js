import './FirstComp.css';
const FirstComp = () => {
    return (

        <>
            <div className="container gradient-one"style={{position:'relative'}}>
                <div className="row">
                    <div className="col mb-4 text-center pt-4">

                        <div className='p-4 '>
                            <button className='rounded-3' style={{ backgroundColor: 'black', color: '#222222', width: '250px', height: '35px', border: '1px solid', padding: '15px, 20px, 15px, 20px' }}>Version 2.0 is here <span style={{ color: '#FFFFFF' }}>Read more</span><img src='./IconsWhite.png' alt='...'></img></button>
                        </div>

                        <div>
                            <img className='img-fluid' src='./cursor.png' alt='...' style={{ width: '18%', position: 'absolute', top: '335px', left: '60px' }}></img>
                            <h1 className='text-md-left' style={{ color: 'lightgrey', fontSize: '165px', fontWeight: 'bold' }}>One Task<br />
                                at a Time</h1>
                            <img className='img-fluid' src='./message.png' alt='...' style={{ width: '18%', position: 'absolute', top: '240px', right: '60px' }}></img>

                        </div>
                        <div className='m-4'>
                            <p style={{ color: '#FFFFFF', fontSize: '22px' }}>Celebrate the joy of accomplishment with an <br />app designed to track your progress, motivate<br /> your efforts, and celebrate your successes.</p>

                        </div>

                       
                    </div>
                </div>
            </div>


            <div className="container p-4 gradient-two" >
                <div className="row mb-4">
                    <div className="col" style={{ textAlign: 'center' }}>
                    <div className='mb-5'>
                            <button className='rounded-3 mb-5' style={{ width: '120px', height: '45px', border: 'none', padding: '15px, 20px, 15px, 20px' }}>Get for free</button>
                        </div>

                        <div className='mb-4'>
                            <p style={{ color: "#7A7A7A" }}>Trusted by the world’s most innovative teams</p>
                        </div>

                        <div className='mb-5'>
                            <img src="./acme.png" alt="acme" style={{ marginRight: '35px' }} /><img src="./quantum.png" alt="acme" style={{ marginRight: '35px' }} /> <img src="./echo.png" alt="acme" style={{ marginRight: '35px' }} /><img src="./celestia.png" alt="acme" style={{ marginRight: '35px' }} /> <img src="./pulse.png" alt="acme" style={{ marginRight: '35px' }} /> <img src="./apex.png" alt="acme" style={{ marginRight: '35px' }} />

                        </div>

                    </div>
                </div>



                <div className="text-center pt-5 pb-4">
                    <h1 className="mb-3" style={{ color: "#FFFFFF" }}>Everything you need</h1>
                    <p style={{ color: '#FFFFFF' }}>Enjoy customizable lists, team work tools, and smart <br /> tracking all in one place. Set tasks, get reminders, and<br /> see your progress simply and quickly.</p>
                </div>

                <div className="row " style={{ textAlign: '-webkit-center' }}>

                    <div className="col-lg-4 col-sm-12 mb-4">
                        <div className="card rounded-3" style={{ width: "80%", background: '#0D0D0D', border: '2px solid' }}>
                            <div className="card-body">
                                <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                                < h6 className="card-subtitle m-2 " style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Integration ecosystem</ h6>
                                <p className="card-text" style={{ color: '#FFFFFF' }}>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 mb-4">
                        <div className="card rounded-3" style={{ width: "80%", background: '#0D0D0D', border: '2px solid' }}>
                            <div className="card-body">
                                <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                                < h6 className="card-subtitle m-2 " style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Goal setting and tracking</ h6>
                                <p className="card-text" style={{ color: '#FFFFFF' }}>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>

                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 mb-4">
                        <div className="card rounded-3" style={{ width: "80%", background: '#0D0D0D', border: '2px solid' }}>
                            <div className="card-body">
                                <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                                < h6 className="card-subtitle m-2 " style={{ color: '#FFFFFF', fontWeight: 'bold' }}>Secure data encryption</ h6>
                                <p className="card-text" style={{ color: '#FFFFFF' }}>With end-to-end encryption, your data is securely stored and protected from unauthorized access.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>


    )
}

export default FirstComp;