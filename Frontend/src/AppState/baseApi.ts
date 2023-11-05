import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const SERVER_API = process.env.SERVER_API || 'http://localhost:3001';

export const baseAPI = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: SERVER_API }),
    endpoints: () => ({}),
}) 