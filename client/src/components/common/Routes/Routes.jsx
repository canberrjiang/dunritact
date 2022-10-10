import {
    Routes,
    Route
} from "react-router-dom";
import Services from '../../Services/Services';
import Projects from '../../Projects/Projects';
import ContactUs from '../../ContactUs/ContactUs';
import NotFound from '../../NotFound/NotFound';
import Home from '../../Home/Home';
import ProjectGallery from "../../ProjectGallery/ProjectGallery";
import Developments from "../../Developments/Development";



function RoutesConfig() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/project-gallery" element={<ProjectGallery />} />
            <Route path="/developments" element={<Developments />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}

export default RoutesConfig