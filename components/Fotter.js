import Link from "next/link";
import Styles from "../styles/Fotter.module.css";
import {FaFacebookSquare,FaTwitterSquare,FaHeart,FaInstagramSquare} from "react-icons/fa";
import Image from "next/image";
import logo from "../Images/snapwheels_logo.png"
const Fotter = () =>{
    return(
        <section className="ffooter">
            <footer className="page-footer">
                <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                    <h5 >SSL SECURED PAYMENT</h5>
                    <p className="grey-text text-lighten-4 ">Your information is secured by 256-bit SSL encryption.</p>
                    <br></br>
                    <p className="grey-text text-lighten-4">Follow us on</p>
                    <div>
                        
                    <a href="https://www.facebook.com/snapwheels.online" target="_blank"  rel="noreferrer" className="white-text"><FaFacebookSquare size={24} round={true}></FaFacebookSquare> &nbsp;</a>
                    <a href="https://twitter.com/ImSnapwheels" target="_blank" rel="noreferrer" className="white-text"><FaTwitterSquare size={24} round={true}></FaTwitterSquare>&nbsp;</a>
                    <a href="https://www.instagram.com/snapwheels/" target="_blank" rel="noreferrer" className="white-text"><FaInstagramSquare size={24} round={true}></FaInstagramSquare></a>
                    </div>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <br />
                        <ul>
                            <li><Link href="/termsandconditions" ><p className={Styles.footerLinkText}>Terms and Condition</p></Link></li>
                            <li><Link href="/privacypolicy"><p className={Styles.footerLinkText}>Privacy Policy</p></Link></li>
                            {/* <li><Link className="grey-text text-lighten-3" href="/refundpolicy">Refund Policy</Link></li> */}
                        
                        </ul>
                        <br />
                        <Image src={logo} alt="Snapwheels Logo" height={50} width={80}></Image>
                    </div>
                </div>
                </div>
                <div className="footer-copyright">
                <div className="container center">
                Made with &nbsp;<FaHeart size={16} color='#D82E2F' />&nbsp; by team Sanpwheels
                </div>
                </div>
            </footer>
            <style jsx>{`
                .page-footer{
                    background-color: #01caba;
                }
            `}</style>
        </section>
    )
}

export default Fotter