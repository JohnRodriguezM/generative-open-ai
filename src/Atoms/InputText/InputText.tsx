import {FC} from 'react';
import {ErrorMessage, useField} from 'formik';

/*import {Label} from '../Label/Label';*/

import {PropsInputText} from './type';
import {Input, Container, ErrorMessageStyle} from './Styled';

export const InputText: FC<PropsInputText> = ({label, ...props}) => {
  const [field] = useField(props);

  return (
    <Container sizeWidth={props.sizeWidth}>
      {/*<Label label={label} required icon={props.icon} />*/}
      <Input {...field} {...props} />
      <ErrorMessage name={props.name} component="span">
        {msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
      </ErrorMessage>
    </Container>
  );
};