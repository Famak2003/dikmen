import { apiSlice } from "./apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  overrideExisting: true,
  endpoints: (builder) => ({
    // login admin
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: "/admin/login",
        method: "POST",
        body: { email, password },
      }),
    }),

    // create user
    createUser: builder.mutation({
      query: ({ email, role }) => ({
        url: "/admin/create",
        method: "POST",
        body: { email, role },
      }),
    }),

    // logout
    logout: builder.mutation({
      query: () => ({
        url: "/admin/logout",
        method: "POST",
      }),
    }),

    // otp
    sendOtp: builder.mutation({
      query: ({ email }) => ({
        url: "/admin/send-reset-password-email",
        method: "POST",
        body: { email },
      }),
    }),

    // Reset password
    changePassword: builder.mutation({
      query: ({ token, email, password, password_confirmation }) => ({
        url: `/admin/reset-password`,
        method: "POST",
        body: { token, email, password, password_confirmation },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateUserMutation,
  useLogoutMutation,
  useSendOtpMutation,
  useChangePasswordMutation, 
} = authApiSlice;