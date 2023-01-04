export const initialValues = {
  prompt: "a woman with 2 dogs",
  n: 10,
  size: "1024x1024",
}

export const url = "http://localhost:7000/openai"

export const options = [
  { value: "256x256", label: "256x256" },
  { value: "512x512", label: "512x512" },
  { value: "1024x1024", label: "1024x1024" },
]

export const handleChange = async (e: any, data: any, updater: any) => {
  const { name, value } = e.target;
  updater({ ...data, [name]: value });
}

export const handleSubmit = async (e: any, data: any, ...updaters: any) => {
  e.preventDefault();
  console.log(updaters);
  updaters[0]({
    url,
    data: data
  }).then((res:any) => {
    updaters[1](res.data)
    updaters[2](false)
  }).catch((err: any ) => {
    console.log(err)
  }
  )
  e.target.reset();
}