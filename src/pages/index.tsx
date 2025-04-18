import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Radio, RadioGroup } from "@heroui/radio";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";

// Define types for our form
type FormData = {
  name: string;
  bringingPartner: boolean | null;
  willDrink: boolean | null;
  selectedDrink: string | null;
};

// Drink options with accompanying items
const DRINK_OPTIONS = [
  {
    id: "whiskey",
    name: "Whiskey",
    image: "/whiskey.png",
    pairings: "Coca Cola",
  },
  {
    id: "vodka",
    name: "Vodka",
    image: "/vodka.png",
    pairings: "Fruits (oranges, lemons, berries)",
  },
  {
    id: "wine",
    name: "Wine",
    image: "/wine.png",
    pairings: "Cheese and meat platter",
  },
  {
    id: "champagne",
    name: "Champagne",
    image: "/champagne.png",
    pairings: "Strawberries and chocolates",
  },
  {
    id: "gin",
    name: "Gin",
    image: "/gin.png",
    pairings: "Tonic water and citrus garnishes",
  },
  {
    id: "rum",
    name: "Rum",
    image: "/rum.png",
    pairings: "Lime and mint for mojitos",
  },
];

const EngagementPartyForm: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    bringingPartner: null,
    willDrink: null,
    selectedDrink: null,
  });

  // Current step state
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [showDrinkError, setShowDrinkError] = useState<boolean>(false);
  const [formDirection, setFormDirection] = useState<number>(1); // 1 for forward, -1 for backward
  const formRef = useRef<HTMLDivElement>(null);

  // Update form data
  const updateFormData = (key: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  // Handle next step
  const handleNextStep = () => {
    if (currentStep === 2 && formData.willDrink === false) {
      setShowDrinkError(true);
      return;
    }

    setFormDirection(1);
    setCurrentStep((prev) => prev + 1);
  };

  // Handle previous step
  const handlePreviousStep = () => {
    setFormDirection(-1);
    setCurrentStep((prev) => prev - 1);
  };

  // Form steps
  const steps = [
    // Welcome Step
    <motion.div
      key="welcome"
      className="min-h-screen flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0, x: formDirection * 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -formDirection * 500 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl bg-gradient-to-br from-pink-100/80 to-purple-100/80 shadow-xl">
        <CardHeader className="flex flex-col items-center pb-0">
          <h1 className="font-tuesdayNightRegular text-6xl md:text-8xl mb-2 text-center text-pink-600">
            Welcome VIP!
          </h1>
        </CardHeader>
        <CardBody className="flex items-center justify-center">
          <p className="font-melodramaSemibold text-2xl md:text-3xl text-center">
            You've been specially selected to join us for our engagement
            celebration
          </p>
        </CardBody>
        <CardFooter className="flex justify-center pb-8">
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            radius="full"
            className="font-melodramaSemibold text-xl md:text-2xl py-6 px-12"
            onClick={handleNextStep}
            startContent={<span className="text-xl">🎉</span>}
          >
            Let's Begin
          </Button>
        </CardFooter>
      </Card>
    </motion.div>,

    // Name & Partner Step
    <motion.div
      key="namepartner"
      className="min-h-screen flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0, x: formDirection * 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -formDirection * 500 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-col items-center">
          <h2 className="font-tuesdayNightRegular text-5xl md:text-7xl text-center text-pink-600">
            Tell us about you
          </h2>
        </CardHeader>
        <CardBody className="gap-6">
          <div>
            <h3 className="font-melodramaSemibold text-2xl mb-2">
              What's your name?
            </h3>
            <Input
              size="lg"
              type="text"
              value={formData.name}
              onChange={(e) => updateFormData("name", e.target.value)}
              placeholder="Enter your name"
              radius="lg"
              classNames={{
                input: "text-3xl py-4 font-melodramaSemibold",
                inputWrapper:
                  "border-3 border-pink-300 data-[hover=true]:border-pink-400",
              }}
            />
          </div>

          <div>
            <h3 className="font-melodramaSemibold text-2xl mb-4">
              Will you bring a plus one?
            </h3>
            <RadioGroup
              orientation="horizontal"
              value={
                formData.bringingPartner === null
                  ? undefined
                  : formData.bringingPartner
                    ? "yes"
                    : "no"
              }
              onValueChange={(value) =>
                updateFormData("bringingPartner", value === "yes")
              }
            >
              <Radio
                value="yes"
                classNames={{
                  label: "text-xl font-melodramaSemibold",
                }}
              >
                Yes
              </Radio>
              <Radio
                value="no"
                classNames={{
                  label: "text-xl font-melodramaSemibold",
                }}
              >
                No
              </Radio>
            </RadioGroup>
          </div>
        </CardBody>
        <CardFooter className="justify-between">
          <Button
            size="lg"
            color="default"
            variant="flat"
            onClick={handlePreviousStep}
            className="font-melodramaSemibold"
          >
            Back
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            onClick={handleNextStep}
            isDisabled={!formData.name || formData.bringingPartner === null}
            className="font-melodramaSemibold"
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </motion.div>,

    // Will Drink Step
    <motion.div
      key="willdrink"
      className="min-h-screen flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0, x: formDirection * 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -formDirection * 500 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-col items-center">
          <h2 className="font-tuesdayNightRegular text-5xl md:text-7xl text-center text-pink-600">
            Important Question
          </h2>
        </CardHeader>
        <CardBody className="gap-6">
          <p className="font-melodramaSemibold text-3xl text-center">
            Will you be drinking?
          </p>

          <RadioGroup
            orientation="horizontal"
            value={
              formData.willDrink === null
                ? undefined
                : formData.willDrink
                  ? "yes"
                  : "no"
            }
            onValueChange={(value) => {
              updateFormData("willDrink", value === "yes");
              setShowDrinkError(false);
            }}
            classNames={{
              base: "justify-center gap-8",
            }}
          >
            <Radio
              value="yes"
              classNames={{
                base: "border-2 p-4 rounded-xl data-[selected=true]:border-pink-500 data-[selected=true]:bg-pink-100",
                label: "text-2xl font-melodramaSemibold",
              }}
            >
              Yes 🍸
            </Radio>
            <Radio
              value="no"
              classNames={{
                base: "border-2 p-4 rounded-xl data-[selected=true]:border-pink-500 data-[selected=true]:bg-pink-100",
                label: "text-2xl font-melodramaSemibold",
              }}
            >
              No 🚫
            </Radio>
          </RadioGroup>

          <AnimatePresence>
            {showDrinkError && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <Chip
                  color="danger"
                  variant="bordered"
                  classNames={{
                    base: "p-4",
                    content: "text-xl font-melodramaSemibold",
                  }}
                >
                  Wrong answer! You should definitely drink at our party! 🥂
                </Chip>
              </motion.div>
            )}
          </AnimatePresence>
        </CardBody>
        <CardFooter className="justify-between">
          <Button
            size="lg"
            color="default"
            variant="flat"
            onClick={handlePreviousStep}
            className="font-melodramaSemibold"
          >
            Back
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            onClick={handleNextStep}
            isDisabled={formData.willDrink === null}
            className="font-melodramaSemibold"
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </motion.div>,

    // Select Drink Step
    <motion.div
      key="selectdrink"
      className="min-h-screen flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0, x: formDirection * 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -formDirection * 500 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-4xl">
        <CardHeader className="flex flex-col items-center">
          <h2 className="font-tuesdayNightRegular text-5xl md:text-7xl text-center text-pink-600">
            Pick Your Poison
          </h2>
          <p className="font-melodramaSemibold text-2xl text-center mt-2">
            Select a bottle that you'll bring to the party
          </p>
        </CardHeader>
        <CardBody>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full">
            {DRINK_OPTIONS.map((drink) => (
              <motion.div
                key={drink.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Card
                  isPressable
                  isHoverable
                  // variant="bordered"
                  onClick={() => updateFormData("selectedDrink", drink.id)}
                  className={`${
                    formData.selectedDrink === drink.id
                      ? "border-4 border-pink-500 bg-pink-50"
                      : ""
                  }`}
                >
                  <CardBody className="p-0 overflow-hidden">
                    <div className="aspect-square bg-gradient-to-b from-pink-100/50 to-purple-100/50 flex items-center justify-center p-4">
                      <Image
                        src={drink.image}
                        alt={drink.name}
                        className="h-32 w-auto object-contain"
                        // onError={(e) => {
                        //   // Fallback if image fails to load
                        //   (e.target as HTMLImageElement).src =
                        //     "https://via.placeholder.com/150?text=" +
                        //     drink.name;
                        // }}
                      />
                    </div>
                  </CardBody>
                  <CardFooter className="text-center justify-center bg-white">
                    <span className="font-melodramaSemibold text-xl">
                      {drink.name}
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </CardBody>
        <CardFooter className="justify-between">
          <Button
            size="lg"
            color="default"
            variant="flat"
            onClick={handlePreviousStep}
            className="font-melodramaSemibold"
          >
            Back
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            onClick={handleNextStep}
            isDisabled={!formData.selectedDrink}
            className="font-melodramaSemibold"
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </motion.div>,

    // Drink Pairings Step
    <motion.div
      key="drinkpairings"
      className="min-h-screen flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0, x: formDirection * 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -formDirection * 500 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl">
        <CardHeader className="flex flex-col items-center">
          <h2 className="font-tuesdayNightRegular text-5xl md:text-7xl text-center text-pink-600">
            Perfect Pairing
          </h2>
        </CardHeader>
        <CardBody>
          {formData.selectedDrink && (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <Chip
                color="secondary"
                size="lg"
                variant="shadow"
                className="mb-4"
              >
                <span className="text-xl font-melodramaSemibold px-2">
                  {
                    DRINK_OPTIONS.find((d) => d.id === formData.selectedDrink)
                      ?.name
                  }
                </span>
              </Chip>

              <p className="text-2xl mb-4 font-melodramaSemibold text-center">
                Please bring along:
              </p>

              <p className="text-3xl font-tuesdayNightRegular text-center text-pink-600 p-4 bg-pink-50 rounded-xl border-2 border-pink-200">
                {
                  DRINK_OPTIONS.find((d) => d.id === formData.selectedDrink)
                    ?.pairings
                }
              </p>
            </motion.div>
          )}
        </CardBody>
        <CardFooter className="justify-between">
          <Button
            size="lg"
            color="default"
            variant="flat"
            onClick={handlePreviousStep}
            className="font-melodramaSemibold"
          >
            Back
          </Button>
          <Button
            size="lg"
            color="secondary"
            variant="shadow"
            onClick={handleNextStep}
            className="font-melodramaSemibold"
          >
            Next
          </Button>
        </CardFooter>
      </Card>
    </motion.div>,

    // Thank You Step
    <motion.div
      key="thankyou"
      className="min-h-screen flex flex-col justify-center items-center p-6"
      initial={{ opacity: 0, x: formDirection * 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -formDirection * 500 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="w-full max-w-2xl bg-gradient-to-br from-pink-100 to-purple-100">
        <CardHeader className="flex flex-col items-center pb-0">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-tuesdayNightRegular text-6xl md:text-8xl text-center text-pink-600">
              Thank You!
            </h2>
          </motion.div>
        </CardHeader>
        <CardBody className="items-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="font-melodramaSemibold text-3xl mb-6">
              We can't wait to celebrate with you!
            </p>

            {formData.name && (
              <p className="text-2xl mb-8">
                See you soon,{" "}
                <span className="font-tuesdayNightRegular text-3xl text-pink-600">
                  {formData.name}
                </span>
                !
              </p>
            )}

            <div className="text-xl">
              <p>Don't forget to bring your:</p>
              <p className="font-melodramaSemibold text-2xl text-pink-600 mb-2">
                {
                  DRINK_OPTIONS.find((d) => d.id === formData.selectedDrink)
                    ?.name
                }
              </p>
              <p className="font-melodramaSemibold">
                with{" "}
                {
                  DRINK_OPTIONS.find((d) => d.id === formData.selectedDrink)
                    ?.pairings
                }
              </p>
            </div>
          </motion.div>
        </CardBody>
      </Card>
    </motion.div>,
  ];

  return (
    <div
      className="bg-gradient-to-br from-pink-100 to-purple-100 min-h-screen"
      ref={formRef}
    >
      <div className="container mx-auto">
        <AnimatePresence mode="wait">{steps[currentStep]}</AnimatePresence>
      </div>

      <footer className="fixed bottom-0 left-0 w-full bg-white bg-opacity-80 py-3 px-6 text-center">
        <p className="font-melodramaSemibold text-gray-600">
          Powered by codini.tn
        </p>
      </footer>
    </div>
  );
};

export default EngagementPartyForm;
