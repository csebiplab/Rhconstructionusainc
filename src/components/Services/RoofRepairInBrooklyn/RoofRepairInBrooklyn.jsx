"use client"
import React from 'react';
import RoofRepairInBrooklynBanner from './RoofRepairInBrooklynBanner/RoofRepairInBrooklynBanner';
import RatingComponent from '@/components/__home_components/RatingComponent';
import AboutOur from './AboutOur/AboutOur';

const RoofRepairInBrooklyn = () => {
    return (
        <div>
            <section>
                <RoofRepairInBrooklynBanner/>
            </section>

            <section className="bg___color">
                <RatingComponent />
            </section>

            <section>
                <AboutOur />
            </section>
        </div>
    );
};

export default RoofRepairInBrooklyn;