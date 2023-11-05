import { baseAPI } from "../../AppState/baseApi";

export interface IProduct {
    id: number,
    name: string,
    brand: string,
    price: string,
    currency: string
}

export const productApi = baseAPI.injectEndpoints({
    endpoints: (build) => ({
      getProducts: build.query<Array<IProduct>, number>({
        query: (pageNumber) => ({
          url: `/products`,
          method: 'GET'
        })
      })    
    })
})

export const { useGetProductsQuery } = productApi