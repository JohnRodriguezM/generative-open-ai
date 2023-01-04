import React, { useState } from 'react'
import { post } from '../../utils/Adapter/AxiosAdapter'
import { inputDesign, labelDesign, selectDesign } from './styles';
import { handleChange, handleSubmit, initialValues, options } from './utils'







export const Form = (props: any) => {
  const { setImageUrl } = props;

  const [data, setData] = useState(initialValues);
  const [loading, setLoading] = useState(false);

  const handleChangeExe = (e: any) => handleChange(e, data, setData)



  return (
    <form action="" className="w-full max-w-lg mx-auto"
      onSubmit={(e) => {
        setLoading(true);
        handleSubmit(
          e,
          data,
          post, setImageUrl, setLoading
        );
      }}>
      <section className="flex flex-wrap -mx-3 mb-6  mt-10 text-center">
        <section className="w-full px-3 mb-6 md:mb-0">
          <label className={labelDesign}>
            Prompt
          </label>
          <textarea required name="prompt" id="" onChange={handleChangeExe} className={inputDesign} />
          <label className={labelDesign}>
            Image number to generate
          </label>
          <input type="number" name="n" id="" onChange={handleChangeExe} className={inputDesign} min="1" max="4" />
          <label className={labelDesign}>
            Image size
          </label>
          <select required name="size" id="" onChange={handleChangeExe} className={selectDesign} >
            {
              options.map((option, index) => (
                <option key={index} value={option.value}>{option.label}</option>
              ))
            }
          </select>
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg mt-6">
            {loading ? "Loading..." : "Generate"}
          </button>
        </section>
      </section>
    </form>
  )
}
