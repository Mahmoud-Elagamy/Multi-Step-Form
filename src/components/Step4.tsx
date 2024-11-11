import { DollarSign } from "lucide-react";
import useFormContext from "../hooks/useFormContext";

const Step4 = () => {
  const { formData, setCurrentStep, calculatePlanAndTotalCost } =
    useFormContext();
  const { planPrice, totalCost, selectedAddOns } =
    calculatePlanAndTotalCost(formData);

  const selectedAddOnsJSX = selectedAddOns?.length ? (
    selectedAddOns.map((addOn) => (
      <div key={addOn.name}>
        <h2 className="text-center">{addOn.name.replace("-", " ")} </h2>
        <span className="flex items-center justify-center normal-case text-purplish-blue">
          +<DollarSign size={16} />
          {addOn.price}
          {formData.isYearlyPlan ? "/yr" : "/mo"}
        </span>
      </div>
    ))
  ) : (
    <p className="text-center text-sm normal-case text-gray-600">
      No add-ons picked. <br /> Explore our options to enhance your plan!
    </p>
  );

  return (
    <ul className="flex flex-col gap-8">
      <li className="flex items-center justify-between bg-slate-50">
        <div>
          <h2 className="text-sm font-semibold text-gray-700">
            Selected Plan:
          </h2>
          <button
            type="button"
            className="btn btn-link btn-sm p-0 text-blue-600 hover:text-blue-700"
            onClick={() => setCurrentStep(2)}
            aria-label="Change selected plan"
          >
            Change
          </button>
        </div>
        <div>
          <h2 className="text-center capitalize">{formData.plan}</h2>
          <span className="text-purplish-blue">
            <DollarSign size={16} className="inline-block" />
            {planPrice}/{formData.isYearlyPlan ? "yr" : "mo"}
          </span>
        </div>
      </li>
      <li className="flex items-center justify-between bg-slate-50 capitalize">
        <div>
          <h2 className="text-sm font-semibold text-gray-700">
            Picked Add-ons:
          </h2>
          <button
            type="button"
            className="btn btn-link btn-sm p-0 text-blue-600 hover:text-blue-700"
            onClick={() => setCurrentStep(3)}
            aria-label={`${selectedAddOns?.length ? "Change" : "Pick"} picked add-ons`}
          >
            {selectedAddOns?.length ? "Change" : "Pick"}
          </button>
        </div>
        <div className="space-y-4">{selectedAddOnsJSX}</div>
      </li>
      <li className="flex items-center justify-between border-t border-slate-200 pt-4 capitalize">
        <h2 className="text-sm font-semibold normal-case text-gray-700">
          Total (per {formData.isYearlyPlan ? "year" : "month"}):
        </h2>
        <h3 className="flex items-center normal-case text-purplish-blue">
          +<DollarSign size={16} />
          {totalCost}/{formData.isYearlyPlan ? "yr" : "mo"}
        </h3>
      </li>
    </ul>
  );
};

export default Step4;
