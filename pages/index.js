import {useEffect} from 'react'
import Router from 'next/router';
import logo from "../Images/snapwheels_logo.png"
import Image from 'next/image';
const index = () => {

    useEffect(() => {
      setTimeout(() => {
          Router.push('/bike-rentals')
      }, 2000);
    }, [])

    return (
        <div className='mainContainer'>
            <Image src={logo} alt='Snapwheels logo' height={150} width={250} />

            <style jsx>
                {`
                    .mainContainer{
                        min-height: 100vh;
                        padding: 4rem 0;
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                `}
            </style>
        </div>
    )
}

export default index
