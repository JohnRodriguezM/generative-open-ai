import { FC } from "react";
import { ErrorMessage, useField } from "formik";

/*import {Label} from '../Label/Label';*/

import { PropsSelect } from "./type";
import { Select, Container, ErrorMessageStyle } from "./Styled";

export const selectDesign: string =
  "form-input block w-full py-2 px-3 py-2 leading-tight rounded-md bg-gray-200 border border-gray-200 placeholder-gray-500 text-gray-700 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5";

export const SelectAtom: FC<PropsSelect> = ({ label, options, ...props }) => {
  const [field] = useField(props);

  return (
    <Container sizeWidth={props.sizeWidth}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
        htmlFor={label}
      >
        {label}
      </label>
      {/*pendiente de decidir si se implementa un componente aparte para el Label*/}
      {/*<Label label={label} required icon={props.icon} />*/}
      <select className={selectDesign} {...field} {...props}>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <ErrorMessage name={props.name} component="span">
        {(msg) => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
      </ErrorMessage>
    </Container>
  );
};
