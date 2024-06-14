"use client"
import RatingComponent from '@/components/__home_components/RatingComponent';
import LocationMap from '@/components/bathroom-reno-components/LocationMap/LocationMap';
import ContactUs from '@/components/bathroom-reno-components/contactUs/ContactUs';
import AboutKitchenRemodeling from '@/components/kitchen-remodeling-components/AboutKitchenRemodeling/AboutKitchenRemodeling';
import ChooseUs from '@/components/kitchen-remodeling-components/ChooseUs/ChooseUs';
import FaqSection from '@/components/kitchen-remodeling-components/FaqSection/FaqSection';
import HireUs from '@/components/kitchen-remodeling-components/HireUs/HireUs';
import KitchenRemodelingHero from '@/components/kitchen-remodeling-components/KitchenRemodelingHero/KitchenRemodelingHero';
import ProjectGallery from '@/components/kitchen-remodeling-components/ProjectGallery/ProjectGallery';
import ReadyToWork from '@/components/kitchen-remodeling-components/ReadyToWork/ReadyToWork';
import Review from '@/components/kitchen-remodeling-components/Review/Review';
import WorkingProcess from '@/components/kitchen-remodeling-components/WorkingProcess/WorkingProcess';


const KitchenRemodeling = () => {
    return (
        <main>

            {/* =============== KitchenRemodelingHero  Section================= */}
            <KitchenRemodelingHero/>
            
            {/* =============== RatingComponent  Section================= */}
            <RatingComponent />
            {/* =============== AboutKitchenRemodeling  Section================= */}
            <AboutKitchenRemodeling/>
            {/* =============== WorkingProcess  Section================= */}
            <WorkingProcess/>

            {/* =============== Review  Section================= */}
            <Review/>
            {/* =============== ChooseUs  Section================= */}
            <ChooseUs/>
            {/* =============== ProjectGallery  Section================= */}
            <ProjectGallery/>
            {/* =============== ReadyToWork  Section================= */}
            <ReadyToWork/>
        
            {/* =============== HireUs  Section================= */}
            <HireUs/>

            {/* =============== FaqSection  Section================= */}
            <FaqSection/>
            {/* =============== LocationMap  Section================= */}
            <LocationMap/>
            {/* =============== ContactUs  Section================= */}
            <ContactUs/>
            
        </main>
    );
};

export default KitchenRemodeling;