import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl: "https://mytech-api.onrender.com",
    credentials: "include",
    "Access-Control-Allow-Credentials": "true",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token
        if (token) {
            headers.set("authorization", `Bearer ${token}`)
        }
        return headers
    }
})

const baseQueryWithReauth = async (args, api, extraOptions) => {


    let result = await baseQuery(args, api, extraOptions);
        console.log(result);
    if (result?.error?.status === 403||result?.error?.status === 401) {
        console.log("Sending refresh token");

        const refreshResult = await baseQuery("/auth/refresh", api, extraOptions)
        console.log(refreshResult);
        if (refreshResult?.data) {
            api.dispatch(setCredentials({ ...refreshResult.data }))

            result = await baseQuery(args, api, extraOptions)
        } else {
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login expired. "
            }
            return refreshResult
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery:baseQueryWithReauth,
    tagTypes: ["Note", "User"],
    endpoints: builder => ({})
})