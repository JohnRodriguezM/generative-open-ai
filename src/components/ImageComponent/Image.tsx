import React from 'react'

export const Image = (props: any) => {
  const { imageUrl } = props

  return (
    
    <section style={{
      display: "grid",
      gridTemplateColumns: "auto".repeat(imageUrl.length),
    }}> {imageUrl.map((url: any, index: number) => (
        <img key={index} src={url.url} alt="" className="rounded-md w-4 h-4 object-cover" />
    )
    )}
    </section>
  )
}
