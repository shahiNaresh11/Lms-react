import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
function Footer() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();

    return (
        <>
            <footer className="relative left-0 bottom-0 h-[10vh] py-5 flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20">
                <section className='text-lg'>
                    copyright {year} | All rights Reaserved

                </section>
                <section className='flex items-center justify-center gap-5 text-2xl text-white '></section>


            </footer>


        </>
    )

}
export default Footer;