// import { createAsyncThunk, createSlice} from "@reduxjs/toolkit";

// interface Movie {
//     id: number;
//     title: string;
//     overview: string;
//     vote_average: number;
//     poster_path: string;
// }

// interface MoviesState {
//     loading: boolean;
//     data: Movie[] | null;
//     error: boolean;
// }

// const options: RequestInit = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ODU3MmIwZWU3OWE3ZWE1ZDdjNTYzZTVhNjhkMzljZiIsInN1YiI6IjY1NGI5YzY3NjdiNjEzMDEwMmUxYjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MI-1wzheKLHaaSIDKGu2LGyu7e8dtG31x9LdIwCuAfk'
//     }
// };

// export const getMovies = createAsyncThunk<Movie[], string>(
//     'movies',
//     async (url) => {
//         try {
//             const response = await fetch(url, options);
//             return response.json();
//         } catch (error) {
//             console.log(error);
//             throw error;
//         }
//     }
// );

// const initialState: MoviesState = {
//     loading: false,
//     data: null,
//     error: false
// };

// const moviesSlice = createSlice({
//     name: 'movies',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder
//             .addCase(getMovies.pending, (state) => {
//                 state.loading = true;
//             })
//             .addCase(getMovies.fulfilled, (state, action) => {
//                 state.loading = false;
//                 state.data = action.payload;
//                 state.error = false;
//             })
//             .addCase(getMovies.rejected, (state) => {
//                 state.loading = false;
//                 state.error = true;
//             });
//     }
// });

// export default moviesSlice.reducer;
