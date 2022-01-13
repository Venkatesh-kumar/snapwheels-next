
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Duke from "../Images/Duke_200.png"
import {FaPiggyBank,FaHeadset} from "react-icons/fa"
import Android from "../Images/android.png"
import Delivery from "../Images/delivery.jpg"
import model from "../Images/model.png"
import { Button } from "react-materialize";
import Faq from "react-faq-component"
import apple from "../Images/apple.png"

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


export default function Home() {
  return (
    <div >
     
      <main>
            
            <section className={styles.bikeSearchContainer}>
                <div className="row container bikeSearchInnerContainer">
                    <div className="col s12 m12 l6 bannerBikeImage" >
                        <Image src={model} width={450} height={300}></Image>
                    </div>
                    <div className="col s12 m12 l6 bikeSearchTextContainer" >
                        <h1 className="white-text">Rent bikes from Snapwheels for a comfortable and hassle free ride! </h1>
                        <h5 className="white-text">Wide range of bikes and scooties available for Hourly, Daily, Weekly and Monthly basis rent.</h5>
                    </div>
                </div>
            
            </section>
            <h3 className="center bigHeader yellow">Why riders love Snapwheels?</h3>
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
                                <h3 className="center" style={{color:"#009387"}}>Well Maintained</h3>
                                <br />
                                <h5 className="left">All Snapwheels bikes are maintained so well you will feel like you are riding brand new!</h5>
                                <h5 className="left">Regular checkups and inspections will be done by our in-house mechanics.</h5>
                               </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.iconLeftContainer}>
                <div className={styles.iconTextContainer}>
                    <div className="row container">
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#009387"}}>Wallet friendly</h3>
                                <br />
                                <h5 className="left">Wide range of bikes are provided at best prices. Select your favourite ride without any compromise!</h5>
                                <h5 className="left">You can save more by using our latest offers. Visit offers section to know more.</h5>
                               </div>
                        </div>
                        <div className="col s12 l6 m6 center">
                            <div >
                                <FaPiggyBank size={160} className={styles.displayImages}  color="#009387"></FaPiggyBank>
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
                                <FaHeadset size={160} className={styles.displayImages}  color="#000"></FaHeadset>
                            </div>
                        </div>
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#009387"}}>Road-side assistance</h3>
                                <br />
                                <h5 className="left">We provide 24x7 helpline and dedicated team for roadside assistance.</h5>
                                <h5 className="left">We got you covered even on the roads so that your adventure will never halt.</h5>
                               </div>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section className={styles.iconLeftContainer}>
                <div className={styles.iconTextContainer}>
                    <div className="row container">
                        <div className="col s12 l6 m6 left ">
                            <div data-aos="fade-up">
                                <h3 className="center" style={{color:"#009387"}}>Home delivery</h3>
                                <br />
                                <h5 className="left">We deliver the bike you love straight to your home with just one click</h5>
                                <h5 className="left">We deliver bike on-time right at your doorstep so that your adventure will start from exactly where you want.</h5>
                               </div>
                        </div>
                        <div className="col s12 l6 m6 center">
                             <div >
                                <Image src={Delivery} alt="Snapwheels" className={styles.displayImages} height="300" width="350"></Image>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className={styles.appDownload}>
                <div className="row container">
                <h2 className="center white-text" style={{marginBottom:100}}>Snapwheels Mobile App</h2>
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
                            <h5 className="center black-text downloadBoxText">Sorry, we are not available in App store yet. Our team is continously working to make it happen soon!</h5>
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
                .bikeSearchInnerContainer{
                  padding-top: 100px;
                  padding-bottom: 150px;
                }
                .bannerBikeImage{
                  margin-top: 50px;
                  margin-bottom: 50px;
                }
                .bikeSearchTextContainer{
                    height: 500px;
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
