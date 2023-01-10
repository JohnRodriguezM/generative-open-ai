export interface PropsInputText {
  label: string;
  name: string;
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'time'
    | 'datetime'
    | 'url';
  placeholder?: string;
  icon?: boolean;
  [x: string]: any;
  sizeWidth?: string;
}
