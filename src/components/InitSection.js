import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../components/Header';
import Navbar from '../components/navbar';
import Body from '../components/Body'

const InitSection = ({handleLogout}) => {
    
    return (
        
        <div className="InitSection">
            <Navbar handleLogout={handleLogout} />
            <Header />
            <Body />
        </div>
        
    )
}

export default InitSection;