

const EverythingComp = () => {
    return (
        <div className="container p-4  align-items-center" style={{ backgroundColor: 'black' }}>
            <div className="text-center pt-5 pb-4">
                <h1 className="mb-3" style={{ color: "#FFFFFF"}}>Everything you need</h1>
                <p style={{ color: '#FFFFFF' }}>Enjoy customizable lists, team work tools, and smart <br /> tracking all in one place. Set tasks, get reminders, and<br /> see your progress simply and quickly.</p>
            </div>

            <div className="row " style={{textAlign:'-webkit-center'}}>

                <div className="col-lg-4 col-sm-12 mb-4">
                    <div className="card rounded-3" style={{width:"80%",background:'#0D0D0D',border:'2px solid'}}>
                        <div className="card-body">
                            <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                            < h6 className="card-subtitle m-2 " style={{color:'#FFFFFF',fontWeight:'bold'}}>Integration ecosystem</ h6>
                            <p className="card-text" style={{color:'#FFFFFF'}}>Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place.</p>
                           
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 mb-4">
                    <div className="card rounded-3" style={{width:"80%",background:'#0D0D0D',border:'2px solid'}}>
                        <div className="card-body">
                            <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                            < h6 className="card-subtitle m-2 " style={{color:'#FFFFFF',fontWeight:'bold'}}>Goal setting and tracking</ h6>
                            <p className="card-text" style={{color:'#FFFFFF'}}>Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.</p>
                           
                        </div>
                    </div>
                    </div>

                    <div className="col-lg-4 col-sm-12 mb-4">
                    <div className="card rounded-3" style={{width:"80%",background:'#0D0D0D',border:'2px solid'}}>
                        <div className="card-body">
                            <img className="mb-4" src="./Frame 21.png" alt="..."></img>
                            < h6 className="card-subtitle m-2 " style={{color:'#FFFFFF',fontWeight:'bold'}}>Secure data encryption</ h6>
                            <p className="card-text" style={{color:'#FFFFFF'}}>With end-to-end encryption, your data is securely stored and protected from unauthorized access.</p>
                           
                        </div>
                    </div>
                    </div>

            </div>
        </div>
    )
}

export default EverythingComp;