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
                <title>Snapwheels, India&#39;s largest motorbike rentals </title>
                <meta name="description"  key="desc" content="Snapwheels is the India's best motorbikes rental service provides wide range of bikes for Rent." />
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

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