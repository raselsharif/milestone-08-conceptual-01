import Nav from './Nav';
import Footer from './Footer';
import { Outlet, useNavigation } from 'react-router-dom';
import LoadingSpinner from '../Pages/LoadingSpinner/LoadingSpinner';

const Home = () => {
    const navigation = useNavigation();

    return (
        <section className=''>
            <div className='container mx-auto'>
                <Nav></Nav>
            </div>

            {
                navigation.state === 'loading' ? <LoadingSpinner /> :
                    <section className='flex flex-col min-h-screen mt-10'>
                        <div className='flex-grow'>
                            < Outlet ></ Outlet>
                        </div >
                        <div className=' '>
                            <Footer></Footer>
                        </div>
                    </section>
            }

        </section >
    );
};

export default Home;