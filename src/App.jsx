import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import WhyChooseUs from "./Components/GetStarted";
import Footer from "./Components/Footer";
import SubscriptionCard from "./Components/Subscription";
import CoworkingSections from './Components/Benifits';
import Awards from "./Components/GetStarted";
function App() {
  return (
    <>
      <Hero />
      <Guide />
      <Properties />
      <SubscriptionCard/>
      <CoworkingSections/>
      
       <WhyChooseUs />
      <Footer />
    </>
  );
}

export default App;
