import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Welcome from "./components/Welcome";
import ThankYou from "./components/ThankYou";
import DatePicker from "./components/DatePicker";
import DateLocationPicker from "./components/DateLocationPicker";
import RestaurantPicker from "./components/RestaurantPicker";
import FinalPage from "./components/FinalPage";
import FlowerPetals from "./components/FlowerPetals";

export default function App() {
  const [step, setStep] = useState(0);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState(null);
  const [restaurant, setRestaurant] = useState(null);
  const [showPetals, setShowPetals] = useState(false);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleFinalSubmit = () => {
    setShowPetals(true);
    setTimeout(() => {
      setStep(5);
      setShowPetals(false);
    }, 3000);
  };

  const reset = () => {
    setStep(0);
    setDate("");
    setLocation(null);
    setRestaurant(null);
    setShowPetals(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex items-center justify-center p-4 sm:p-6 md:p-8">
      {showPetals && <FlowerPetals />}
      <div className="w-full max-w-[95%] sm:max-w-[85%] md:max-w-xl bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-transparent pointer-events-none" />
        <AnimatePresence mode="wait">
          {step === 0 && <Welcome onNext={nextStep} />}
          {step === 1 && <ThankYou onNext={nextStep} />}
          {step === 2 && (
            <DatePicker onNext={nextStep} onPrev={prevStep} setDate={setDate} />
          )}
          {step === 3 && (
            <DateLocationPicker
              onNext={nextStep}
              onPrev={prevStep}
              setLocation={setLocation}
            />
          )}
          {step === 4 && (
            <RestaurantPicker
              onNext={handleFinalSubmit}
              onPrev={prevStep}
              setRestaurant={setRestaurant}
            />
          )}
          {step === 5 && (
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
