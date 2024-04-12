
const Footer = () => {
    return (
        <div className="container p-2" style={{ backgroundColor: 'black',borderTop:'1px solid'}}>

            <div className="row ">
                <div className="col-lg-6 col-md-5 col-sm-12  "style={{textAlign:'center'}}>
                    <p className="pl-3" style={{color:"#808080"}}>@ 2024 Your Company, Inc. All rights reserved</p>

                </div>

                <div className="col-lg-6 col-md-5 col-sm-12 "style={{textAlign:'center'}}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="./Socials.png" alt="social" />&nbsp;&nbsp;&nbsp;&nbsp;<img src="./Socials1.png"  alt="social"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./Socials2.png"  alt="social"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./Socials3.png" alt="social" />&nbsp;&nbsp;&nbsp;&nbsp;<img src="./Socials4.png"  alt="social"/>&nbsp;&nbsp;&nbsp;&nbsp;<img src="./Socials5.png"  alt="social"/>

                </div>
            </div>

        </div>
    )
}

export default Footer;