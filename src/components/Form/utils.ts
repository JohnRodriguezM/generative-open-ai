import { FormProps, OptionsType } from './type';
import { ChangeEvent, FormEvent } from 'react';

export const initialValues: FormProps = {
  prompt: "a woman with 2 dogs",
  n: 8,
  size: "256x256",
}

export const url: string = `http://localhost:7000/openai`

export const options: OptionsType[] = [
  { value: "256x256", label: "256x256" },
  { value: "512x512", label: "512x512" },
  { value: "1024x1024", label: "1024x1024" },
]

export const handleChange = async (e: ChangeEvent<HTMLInputElement>, dataForm: FormProps, updater: any) => {
  const { name, value } = e.target;
  updater({ ...dataForm, [name]: value });
}

export const handleSubmit = async (e: FormEvent | any, dataForm: FormProps, ...updaters: any[]) => {
  e.preventDefault();
  updaters[2](true)
  console.log(updaters);
  updaters[0]({
    url,
    data: dataForm
  }).then((res: any) => {
    const newImages = res.data.map((img:any) => {
      return {...img, expanded: false};
  });
    updaters[1](newImages)
    console.log(newImages);
    updaters[2](false)
  }).catch((err: any) => {
    console.log(err)
  }
  )
  e.target.reset();
}