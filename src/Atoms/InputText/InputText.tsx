import { FC } from "react";
import { ErrorMessage, useField } from "formik";

/*import {Label} from '../Label/Label';*/

import { PropsInputText } from "./type";
import { Input, Container, ErrorMessageStyle } from "./Styled";

export const InputText: FC<PropsInputText> = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <Container sizeWidth={props.sizeWidth}>
      {/*<Label label={label} required icon={props.icon} />*/}
      <input
       
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
