"use client";

import React from "react";
import styled from "styled-components";
import Image from "next/image";
import HeroBgImage from "@/assets/icons/about-us-hero-bg.svg";

export const HeroSection = () => {
	return (
		<Wrapper>
			<Image
				src={HeroBgImage}
				alt="about us hero background"
			/>
		</Wrapper>
	);
};

const Wrapper = styled.div`
    width: 100%;
    
    img {
        width: 100%;
        height: 100%;
    }
`;
