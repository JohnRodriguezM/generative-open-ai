
export const handleDownload = async (url: any) => {
  const response = await fetch(url);
  console.log(response);
  const blob = await response.blob();
  console.log(blob);
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `image${Math.floor(Math.random() * 1000)}.png`;
  link.click();
};