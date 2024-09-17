import { Button } from "@/components/ui/button"

const FeatureCard3 = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex gap-4 items-center justify-center">
        <h1 className="text-star-white text-base">
          Click on the button to proceed to the diet plan creation page
        </h1>
        <Button
          
          variant="app-primary"
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default FeatureCard3;
