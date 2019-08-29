interface IProduct {
  price: IPrice,
  image: IProductImage,
  displayName: string,
  id: number,
  quantity: number,
}

interface IPrice {
  base: number,
}

interface IProductImage {
  previewX1: string,
  previewX2: string,
  previewX3: string,
  fullX1: string,
  fullX2: string,
  fullX3: string,
  blob: string,
  xSize: number,
  ySize: number,
}
