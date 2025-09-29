import { baseApi } from "@/redux/baseApi";
export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    getSingleServices: builder.query({
      query: ({ id }) => ({
        url: `/service/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllServicesQuery, useGetSingleServicesQuery } = serviceApi;
