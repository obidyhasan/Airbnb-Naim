import { baseApi } from "@/redux/baseApi";
export const serviceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllServices: builder.query({
      query: () => ({
        url: "/service",
        method: "GET",
      }),
    }),
    // allUsers: builder.query({
    //   query: (params) => ({
    //     url: "/user",
    //     method: "GET",
    //     params,
    //   }),

    // }),
  }),
});

export const { useGetAllServicesQuery } = serviceApi;
