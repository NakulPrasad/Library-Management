import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//MAKES GET REQUESTS TO BACKEND

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi", //name in redux store
    tagTypes: [
        "Books",
        "Member",
        "Members",

    ],
    endpoints: (build) => ({
        getBooks: build.query({
            query: () => `general/dashboard`, //saves json object PRODUCT + STATS
            providesTags: ["Books"],
        }),
        getMember: build.query({
            query: (id) => `/management/edit/member/${id}`, //saves json object PRODUCT + STATS
            providesTags: ["Member"],
        }),
        getMembers: build.query({
            query: () => `management/members`, //saves json object PRODUCT + STATS
            providesTags: ["Members"],
        }),
        deleteMember: build.mutation({
            query: (id) => ({
                url: `/management/edit/member/${id}`,
                method: 'DELETE',
            }),
        }),
        addMember: build.mutation({
            query: (newMember) => ({
                url: '/management/edit/addMember',
                method: 'POST',
                body: newMember
            }),
            providesTags: ["Add Member"]
        }),
        editMember: build.mutation({
            query: ({ Member, id }) => ({
                url: `/management/edit/member/${id}`,
                method: 'PUT',
                body: Member
            }),
            providesTags: ["Edit Member"]
        })
    }),

})

export const {

    //all product+stats json objext
    useGetBooksQuery,
    useGetMemberQuery,
    useGetMembersQuery,
    useDeleteMemberMutation,
    useAddMemberMutation,
    useEditMemberMutation,


} = api