import '../styles/DetailPortofolio.css';
import { useParams } from 'react-router-dom';
import { portfolioList } from '../data/dataPortfolio';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function DetailPortofolio() {
    const { id } = useParams();
    const data = portfolioList.find((item) => item.id === id);

    if (!data) {
        return <p>Data not found</p>; // Handling jika data tidak ditemukan
    }

    return (
        <>
            <Navbar />
            <section id="detail-portofolio">
                <div className="wrapper">
                    <h1>{data.title}</h1>
                    <img src={data.image} alt="Portfolio" />
                    <p className="description"><b>Description:</b> {data.description}</p>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default DetailPortofolio;
