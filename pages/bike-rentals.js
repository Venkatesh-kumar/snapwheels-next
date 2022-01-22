
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Duke from "../Images/Duke_200.png"
import {FaPiggyBank} from "react-icons/fa"
import Android from "../Images/android.png"
import model from "../Images/model.png"
import { Button } from "react-materialize";
import Faq from "react-faq-component"
import apple from "../Images/apple.png"
import { useEffect, useState } from 'react'
import SS1 from "../Images/GetStarted_edit.jpg"
import SS2 from "../Images/Home_edit.jpg"
import SS3 from "../Images/Map_edit.jpg"
import SS4 from "../Images/Order_sum1_edit.jpg"
import SS5 from "../Images/Order_sum2_edit.jpg"
import SS6 from "../Images/Profile_edit.jpg"
import SS7 from "../Images/Support_edit.jpg"
import {FcOnlineSupport} from "react-icons/fc";
import $ from 'jquery';


const data = {
  title: "Frequently asked questions",
  rows: [
      {
          title: "What documents are needed to book a vehicle?",
          content: `1. Original/Digilocker Driving License( For verification) <br />
          2.College ID / Employment Proof<br/>
          3.Any government issued ID need to be submitted at the pickup location for the booking period.`,
      },
      {
          title: "Is fuel included in the tariff?",
          content:
              "No. The tariff doesn’t include fuel. Customers should return the vehicle with similar level of tank-fill they received during the time of pick-up.",
      },
      {
          title: "Can I cancel my booking?",
          content: `You can cancel the booking, however the cancellation charges will be levied. Check T&C for more details. `,
      },
      {
          title: "What is the minimum or maximum rental period?",
          content: `Even though you can reserve a vehicle for one hour, a minimum tariff for 6 hrs will be applicable. The maximum booking duration is 6 months after which the rentals can be renewed.`,
      },
      {
          title: "Will I get complimentary helmet?",
          content: `Due to COVID-19 pandemic, we avoid providing helmets to customers. We suggest customers to bring their own helmets. `,
      },
      {
          title: "Is it possible to extend the ride beyond the booking horizon?",
          content: `It is possible to extend the booking using our app and website. Extension will be only possible if vehicle is available for the slected timings. `,
      },
  ],
};

const stylesfaq = {
  titleTextColor: "#000",
  rowTitleColor: "#009387",
};

const config = {
   animate: true,
  arrowIcon: "v",
  tabFocus: true
};

if (typeof window !== 'undefined') {
    window.$ = $;
    window.jQuery = $;
    require('materialize-css');
}


export default function Home() {

    const [screenshotimage, setscreenshotimage] = useState(null);
    useEffect(() => {
        $('.carousel').carousel({
            numVisible:7,
            shift:50,
            padding:50
          });
        
      $('.slider').slider({full_width:true,height:600});
    }, [])

    useEffect(() => {
        let index = 0;
      setInterval(() => {
          if(index<7)
          {
            switch (index) {
                case 0:
                    setscreenshotimage(SS1);
                break;
                case 1:
                    setscreenshotimage(SS2);
                break;
                case 2:
                    setscreenshotimage(SS3);
                break;
                case 3:
                    setscreenshotimage(SS4);
                break;
                case 4:
                    setscreenshotimage(SS5);
                break;
                case 5:
                    setscreenshotimage(SS6);
                break;
                case 6:
                    setscreenshotimage(SS7);
                break;
                default:
                break;
            }
            index = index+1;
          }
          else
          {
           index = 0;
          }
          
      }, 3000);
    }, []);
    
  return (
    <div >
     
      <main>
            
            <section>
                <div className="bannercontainer">
                    <div className={styles.bgimage} >
                        {/* <Image src={banner} layout='fill' objectFit='contain'></Image> */}
                    </div>
                    {/* <div className="col s12 m12 l6 bikeSearchTextContainer" >
                        <h1 className="white-text">Rent bikes from Snapwheels for a comfortable and hassle free ride! </h1>
                        <h5 className="white-text">Wide range of bikes and scooties available for Hourly, Daily, Weekly and Monthly basis rent.</h5>
                    </div> */}
                </div>
            
            </section>
            
            <h3 className="center bigHeader">Why riders love Snapwheels?</h3>
            <section className={styles.iconLeftContainer}>
                <div className={styles.iconTextContainer}>
                    <div className="row container">
                        <div className="col s12 l6 m6 center">
                            <div >
                                <Image src={Duke} alt="Snapwheels" className={styles.displayImages} height="200" width="350"></Image>
                            </div>
                        </div>
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#009387",fontWeight:'bold'}}>Well Maintained</h3>
                                <br />
                                <h5 className="left">All Snapwheels bikes are maintained so well you will feel like you are riding brand new!</h5>
                                <h5 className="left">Regular checkups and inspections will be done by our in-house mechanics.</h5>
                               </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.iconLeftContainer}>
                <div className={styles.iconTextContainer} style={{backgroundColor:"#009387",paddingTop:50,paddingBottom:50}}>
                    <div className="row container" >
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#fff",fontWeight:'bold'}}>Wallet friendly</h3>
                                <br />
                                <h5 className="left">Wide range of bikes are provided at best prices. Select your favourite ride without any compromise!</h5>
                                <h5 className="left">You can save more by using our latest offers. Visit offers section to know more.</h5>
                               </div>
                        </div>
                        <div className="col s12 l6 m6 center">
                            <div >
                                <FaPiggyBank size={160} className={styles.displayImages}  color="#000"></FaPiggyBank>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.iconLeftContainer}>
                <div className={styles.iconTextContainer}>
                    <div className="row container">
                        <div className="col s12 l6 m6 center">
                            <div >
                                {/* <i className="material-icons center" style={{fontSize:160}}>headset_mic</i> */}
                                <FcOnlineSupport size={160} className={styles.displayImages}  color="#009387"></FcOnlineSupport>
                            </div>
                        </div>
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#009387",fontWeight:'bold'}}>Road-side assistance</h3>
                                <br />
                                <h5 className="left">We provide 24x7 helpline and dedicated team for roadside assistance.</h5>
                                <h5 className="left">We got you covered even on the roads so that your adventure will never halt.</h5>
                               </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.iconLeftContainer}>
                <div className={styles.iconTextContainer}  style={{backgroundColor:"#009387",paddingTop:50,paddingBottom:50}}>
                    <div className="row container">
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#fff",fontWeight:'bold'}}>Home delivery</h3>
                                <br />
                                <h5 className="left">We deliver the bike you love straight to your home with just one click</h5>
                                <h5 className="left">We deliver bike on-time right at your doorstep so that your adventure will start from exactly where you want.</h5>
                               </div>
                        </div>
                        <div className="col s12 l6 m6 center">
                             <div >
                                <Image src={model} alt="Snapwheels" className={styles.displayImages} height="200" width="350"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container center' style={{marginBottom:50}}>
                <h3 className='center' style={{fontWeight:'bold',marginBottom:50}}>Simple, accessible, easy to use mobile app</h3>
                 <div >
                     {screenshotimage !== null? <Image src={screenshotimage} alt="Snapwheels" className={styles.screenshot} height="500" width="250"></Image>:null}
                     <p style={{fontSize:18,fontWeight:'bold',color:'#008397'}}>Download the App and start your adventure today!</p>
                 </div>
            </section>
            <section className={styles.howContainer}>
                <div className='row'>
                    <div className='col s12 m12 l6 center'>
                        <Image src={model} height={300} width={450}></Image>
                    </div>
                    <div className='col s12 m12 l6'>
                        <h1 className={styles.howitworks}>How it works?</h1>
                        <p className={styles.howhelpertext}>1. Select and book your bike through app.</p>
                        <p className={styles.howhelpertext}>2. Navigate to the pickup location to collect your bike.</p>
                        <p className={styles.howhelpertext}>3. Enjoy your adventurous trip with smooth and hassle free ride.</p>
                        <p className={styles.howhelpertext}>4. Return the bike at drop location to end the ride.</p>
                        <Button className="btn large downloadButton" onClick={()=>window.open('https://play.google.com/store/apps/details?id=com.snapwheels','_blank' )}>BOOK A RIDE</Button>
                    </div>
                </div>
            </section>
            <section className={styles.appDownload}>
                <div className="row container">
                <h2 className="center white-text" style={{marginBottom:100,fontWeight:'bold'}}>Snapwheels Mobile App</h2>
                    <div className="col s12 l6 m6 center ">
                        <div >
                            <Image src={Android} alt="Snapwheels" height="200" width="250"></Image>
                            <h5 className="center white-text downloadBoxText">Easy access on mobile app. Install our android mobile app to get exciting offers and amazing features.</h5>
                            <Button className="btn large downloadButton" onClick={()=>window.open(
                                    'https://play.google.com/store/apps/details?id=com.snapwheels','_blank' )}>DOWNLOAD ANDROID APP</Button>
                        </div>
                    </div>
                    <div className="col s12 l6 m6 center">
                        <div className={styles.downloadBox}>
                            <Image src={apple} alt="Snapwheels" height="150" width="150"></Image>
                            <h5 className="center black-text downloadBoxText">Sorry, we are not available in App store yet. Our team is continuously working to make it happen soon!</h5>
                            <Button className="btn large downloadButton">DOWNLOAD IOS APP</Button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className={styles.FAQContainer}>
                    <Faq
                        data={data}
                        styles={stylesfaq}
                        config={config}
                    />
                </div>
            </section>
            <style jsx>
              {`
                .bannercontainer{
                    max-width:100%;
                    margin: 0 auto;
                    padding-bottom: 50px;
                }
                .bigHeader{
                    background-color: #009387;
                    padding:10px;
                    color:white;
                    font-weight:bold
                }
                .downloadBoxText{
                  margin-top: 50px;
                  margin-bottom: 50px;
                }
              `}
            </style>
        </main>

     
    </div>
  )
}
