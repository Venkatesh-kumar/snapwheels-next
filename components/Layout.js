import styles from "../styles/Layout.module.css";
import Navbar from "./Navbar";
import Fotter from "./Fotter";
import Head from "next/head";

export default function Layout({children}){
    return(
        <>
        <Navbar />
        <div>
            <Head>

                <meta name="theme-color" content="#009387"/>
                <meta name="msvalidate.01" content="F6DE7074B46F9AD4D0FA9A2775CB1232" />
                
                <meta property="og:title" content="Rent bikes in Bangalore and 40+ other cities!"/>
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.snapwheels.online/bike-rentals" />
                <meta property="og:image" content="https://www.snapwheels.online/_next/static/media/model.f4eb9f3d.png" />
                <meta property="og:description" content="Get a well maintained bike from the most trusted bike rentals in India! " />
                <meta property="og:image:width" content="1200px" />
                <meta property="og:image:height" content="630px" />
               
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@ImSnapwheels"/>
                <meta name="twitter:title" content="Rent bikes in Bangalore and 40+ other cities!" />
                <meta name="twitter:description" content="Get a well maintained bike from the most trusted bike rentals in India!" />
                <meta name="twitter:image:src" content="https://www.snapwheels.online/_next/static/media/model.f4eb9f3d.png" />
                
                <title>Rent a Bike at Bangalore | Snapwheels</title>
                <meta name="description" content="Self ride bikes on rent at Bangalore, 2 wheeler rent packages including Royal Enfields, Hayabusa, Jawa, Bajaj Dominar and BMW from Snapwheels. Book now." />
                <meta name="keywords" content="rent a bike at bangalore, bike rental service at bangalore,bike rental bangalore, bike rental near me, bike rental mysore, bike rental, bike rental in goa, bike rentals in mysore, bike rentals in gokarna, bike rentals in pondicherry, bike rent, bike rentals, bikes for rent, bike rent in bangalore, bike rent in goa, bike rent in mysore, bike rent in pondicherry, bike rent in gokarna, bike rent app, bike rent app in bangalore, bike rent at goa, bike rent at bangalore, bike rent at chennai, bike rent at hampi, bike rent at gokarna, bike rent at mysore " />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3" />
                <meta charset="utf-8" /> 
                <meta name="turbolinks-cache-control" content="no-cache" />
                <meta name="robots" content="noydir" />
                <meta name="robots" content="noodp" />
                <link rel="canonical" href="https://www.snapwheels.online/bike-rentals" />
                <link rel="manifest" href="/manifest.json" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="dns-prefetch" href="https://www.google.com" />
                <link rel="dns-prefetch" href="https://googleads.g.doubleclick.net" />
                <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
                <link rel="dns-prefetch" href="https://www.googleadservices.com" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="dns-prefetch" href="https://stats.g.doubleclick.net" />
                <link rel="dns-prefetch" href="https://d3vp2rl7047vsp.cloudfront.net" />
                <link rel="dns-prefetch" href="https://img.youtube.com" />

                <title>Snapwheels, India&#39;s largest motorbike rentals </title>
                <meta name="description"  key="desc" content="Snapwheels is the India's best motorbikes rental service provides wide range of bikes for Rent." />
                <link rel="icon" href="/favicon.ico" />
                
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                <link type="text/css" rel="stylesheet" href="css/materialize.min.css"  media="screen,projection"/>
            </Head>
            <main >
                {children}
            </main>
        </div>
        <Fotter />
        </>
    )
};