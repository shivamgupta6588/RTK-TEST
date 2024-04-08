import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const notesApi = createApi({
  // reducerPath: 'notes',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://66140a702fc47b4cf27b7296.mockapi.io' }),
  tagTypes:["addNotes"],
  endpoints: (builder) => ({
    getNotes: builder.query({
      query: () => '/notes',
      providesTags:["addNotes"],
    }),

    addNotes:builder.mutation({
      query:(body)=>({
        url:'/notes',
        method:'POST',
        body: body,
      }),
      invalidatesTags:["addNotes"]
    }),
    deleteNotes:builder.mutation({
      query:(id)=>({
        url:`/notes/${id}`,
        method:'DELETE',
      }),
      invalidatesTags:["addNotes"]
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export const { useGetNotesQuery, useAddNotesMutation, useDeleteNotesMutation } = notesApi;
