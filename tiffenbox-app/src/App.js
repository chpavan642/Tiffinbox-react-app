import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TiffinGrid from "./components/TiffinGrid";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import CommunitySection from "./components/CommunitySection";
import LocationSection from "./components/LocationSection";
import OrderOnline from "./components/OrderOnline";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <TiffinGrid />
        <OrderOnline />
        <Testimonials />
        <CommunitySection/>
        <LocationSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
