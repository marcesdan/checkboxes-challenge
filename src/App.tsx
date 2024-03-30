import { useState } from "react";
import { Checkbox } from "./components/ui/checkbox";

interface ICheckboxes {
  [key: string]: boolean;
  selectAll: boolean;
  india: boolean;
  usa: boolean;
  france: boolean;
}

const labels = new Map([
  ["selectAll", "Select all"],
  ["india", "India"],
  ["usa", "USA"],
  ["france", "France"],
]);

const initialState: ICheckboxes = {
  selectAll: false,
  india: false,
  usa: false,
  france: false,
};

function App() {
  const [checkboxes, setCheckboxes] = useState(initialState);

  const handleSelectAll = (
    checked: boolean,
    prevCheckboxes: ICheckboxes
  ): ICheckboxes =>
    Object.keys(prevCheckboxes).reduce((acc, checkboxId) => {
      acc[checkboxId] = checked;
      return acc;
    }, {} as ICheckboxes);

  const handleIndividualCheckbox = (
    updatedCheckboxes: ICheckboxes
  ): ICheckboxes => {
    updatedCheckboxes.selectAll = Object.keys(updatedCheckboxes).every(
      (checkboxId) =>
        checkboxId === "selectAll" || updatedCheckboxes[checkboxId]
    );
    return updatedCheckboxes;
  };

  // Función principal para manejar el cambio de un checkbox
  const handleCheckboxChange = (id: string) => (checked: boolean) => {
    setCheckboxes((prevCheckboxes: ICheckboxes) => {
      if (id === "selectAll") {
        return handleSelectAll(checked, prevCheckboxes);
      }
      const updatedCheckboxes = { ...prevCheckboxes, [id]: checked };
      return handleIndividualCheckbox(updatedCheckboxes);
    });
  };
  return Object.entries(checkboxes).map(([id, checked]) => (
    <div className="flex items-center content-start space-x-2 py-1" key={id}>
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleCheckboxChange(id)}
      />
      <label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {labels.get(id)}
      </label>
    </div>
  ));
}

export default App;
