import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath:'api',
  baseQuery:fetchBaseQuery({
    baseUrl:'http://localhost:3000'
  }),
  tagTypes:[],
  keepUnusedDataFor:600,
  endpoints:(builder) => ({
    getProduct:builder.query({
      query:() => '/api/products',
    })
  })
})

export const {useGetProductQuery} = apiSlice;