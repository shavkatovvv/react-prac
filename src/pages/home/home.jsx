import React from "react";
import { Header } from "../../layout/header";
import { Banner } from "../../banner/banner";
import { Cards } from "../../components/card/card";
import { Tab } from "../../components/tab/tab";

import { Footer } from "../../layout/footer/foot";

export const Home = () => {
    return (
        <div>
            <Header />

            <Banner />

            <Cards />

            <Tab />

            <Footer />
        </div>
    );
};
