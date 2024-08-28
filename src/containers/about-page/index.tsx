"use client";

import { Banner } from "@/components/banner";
import { NavigationBar } from "@/components/navigation-bar";
import React from "react";
import { Footer } from "@/components/footer";
import { BlankSection } from "./blank-section";
import { WhatIsTivora } from "./what-is-tivora";
import { OutBeliefSystem } from "./our-belief-system";
import { Spacer } from "@/components/styled-components";
import { HeroSection } from "./hero-section";

export const AboutPageContainer = () => {
	return (
		<div>
			<Banner />
			<NavigationBar />
			<HeroSection />
			<WhatIsTivora />
			<OutBeliefSystem />
			<BlankSection />
            <Spacer />
			<Footer />
		</div>
	);
};
