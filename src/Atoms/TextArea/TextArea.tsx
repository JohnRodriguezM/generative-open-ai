import { FC } from "react";
import { ErrorMessage, useField } from "formik";

/*import {Label} from '../Label/Label';*/

import { PropsTextArea } from "./type";
import { Input, Container, ErrorMessageStyle } from "./Styled";

export const TextArea: FC<PropsTextArea> = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Container sizeWidth={props.sizeWidth}>
      <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 mt-4"
      htmlFor={label}>{label}</label>
      {/*pendiente de decidir si se implementa un componente aparte para el Label*/}
      {/*<Label label={label} required icon={props.icon} />*/}
      <textarea
        placeholder="Write your prompt here"
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        {...field}
        {...props}
      />
      <ErrorMessage name={props.name} component="span">
        {(msg) => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
      </ErrorMessage>
    </Container>
  );
};
