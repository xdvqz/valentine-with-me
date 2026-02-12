import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Welcome from "./components/welcome.jsx";
import ThankYou from "./components/thankyou.jsx";
import DatePicker from "./components/datepicker.jsx";
import DateLocationPicker from "./components/datelocationpicker.jsx";
import RestaurantPicker from "./components/restaurantpicker.jsx";
import FinalPage from "./components/finalpage.jsx";
import FlowerPetals from "./components/flowerpetals.jsx";

export default function App() {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [showPetals, setShowPetals] = useState(false);
  const [accepted, setAccepted] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinalSubmit = () => {
    if (!date || !location || !restaurant) return;

    setShowPetals(true);
    setTimeout(() => {
      setStep(5);
      setShowPetals(false);
    }, 3000);
  };

  const reset = () => {
    setStep(0);
    setDate("");
    setLocation("");
    setRestaurant("");
    setShowPetals(false);
    setAccepted(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      {showPetals && <FlowerPetals />}
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-xl bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-transparent pointer-events-none" />
        <AnimatePresence mode="wait">
          {step === 0 && (
            <Welcome
              onNext={nextStep}
              setAccepted={setAccepted}
              accepted={accepted}
              disabled={!accepted}
            />
          )}
          {step === 1 && <ThankYou onNext={nextStep} />}
          {step === 2 && (
            <DatePicker
              onNext={nextStep}
              onPrev={prevStep}
              setDate={setDate}
              date={date}
              disabled={!date}
            />
          )}
          {step === 3 && (
            <DateLocationPicker
              onNext={nextStep}
              onPrev={prevStep}
              setLocation={setLocation}
              location={location}
              disabled={!location}
            />
          )}
          {step === 4 && (
            <RestaurantPicker
              onNext={handleFinalSubmit}
              onPrev={prevStep}
              setRestaurant={setRestaurant}
              restaurant={restaurant}
              disabled={!restaurant}
            />
          )}
          {step === 5 && date && location && restaurant && (
            <FinalPage
              date={date}
              location={location}
              restaurant={restaurant}
              onReset={reset}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
