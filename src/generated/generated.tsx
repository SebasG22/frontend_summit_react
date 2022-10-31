import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Album = {
  __typename?: 'Album';
  id: Scalars['ID'];
  name: Scalars['String'];
  year: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addAlbum: Album;
  addSong: Song;
};


export type MutationAddAlbumArgs = {
  name: Scalars['String'];
  year: Scalars['String'];
};


export type MutationAddSongArgs = {
  albumId: Scalars['Float'];
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  allAlbums: Array<Album>;
  allSongs: Array<Song>;
};

export type Song = {
  __typename?: 'Song';
  album: Album;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type AlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type AlbumsQuery = { __typename?: 'Query', allAlbums: Array<{ __typename?: 'Album', id: string, name: string, year: string }> };

export type ReduceAlbumsQueryVariables = Exact<{ [key: string]: never; }>;


export type ReduceAlbumsQuery = { __typename?: 'Query', allAlbums: Array<{ __typename?: 'Album', id: string, name: string }> };

export type SongsQueryVariables = Exact<{ [key: string]: never; }>;


export type SongsQuery = { __typename?: 'Query', allSongs: Array<{ __typename?: 'Song', id: string, name: string, album: { __typename?: 'Album', name: string } }> };

export type CreateSongMutationVariables = Exact<{
  name: Scalars['String'];
  albumId: Scalars['Float'];
}>;


export type CreateSongMutation = { __typename?: 'Mutation', addSong: { __typename?: 'Song', id: string, name: string } };


export const AlbumsDocument = gql`
    query albums {
  allAlbums {
    id
    name
    year
  }
}
    `;

/**
 * __useAlbumsQuery__
 *
 * To run a query within a React component, call `useAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, options);
      }
export function useAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlbumsQuery, AlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlbumsQuery, AlbumsQueryVariables>(AlbumsDocument, options);
        }
export type AlbumsQueryHookResult = ReturnType<typeof useAlbumsQuery>;
export type AlbumsLazyQueryHookResult = ReturnType<typeof useAlbumsLazyQuery>;
export type AlbumsQueryResult = Apollo.QueryResult<AlbumsQuery, AlbumsQueryVariables>;
export const ReduceAlbumsDocument = gql`
    query reduceAlbums {
  allAlbums {
    id
    name
  }
}
    `;

/**
 * __useReduceAlbumsQuery__
 *
 * To run a query within a React component, call `useReduceAlbumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useReduceAlbumsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useReduceAlbumsQuery({
 *   variables: {
 *   },
 * });
 */
export function useReduceAlbumsQuery(baseOptions?: Apollo.QueryHookOptions<ReduceAlbumsQuery, ReduceAlbumsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ReduceAlbumsQuery, ReduceAlbumsQueryVariables>(ReduceAlbumsDocument, options);
      }
export function useReduceAlbumsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ReduceAlbumsQuery, ReduceAlbumsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ReduceAlbumsQuery, ReduceAlbumsQueryVariables>(ReduceAlbumsDocument, options);
        }
export type ReduceAlbumsQueryHookResult = ReturnType<typeof useReduceAlbumsQuery>;
export type ReduceAlbumsLazyQueryHookResult = ReturnType<typeof useReduceAlbumsLazyQuery>;
export type ReduceAlbumsQueryResult = Apollo.QueryResult<ReduceAlbumsQuery, ReduceAlbumsQueryVariables>;
export const SongsDocument = gql`
    query songs {
  allSongs {
    id
    name
    album {
      name
    }
  }
}
    `;

/**
 * __useSongsQuery__
 *
 * To run a query within a React component, call `useSongsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSongsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSongsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSongsQuery(baseOptions?: Apollo.QueryHookOptions<SongsQuery, SongsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
      }
export function useSongsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SongsQuery, SongsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SongsQuery, SongsQueryVariables>(SongsDocument, options);
        }
export type SongsQueryHookResult = ReturnType<typeof useSongsQuery>;
export type SongsLazyQueryHookResult = ReturnType<typeof useSongsLazyQuery>;
export type SongsQueryResult = Apollo.QueryResult<SongsQuery, SongsQueryVariables>;
export const CreateSongDocument = gql`
    mutation createSong($name: String!, $albumId: Float!) {
  addSong(name: $name, albumId: $albumId) {
    id
    name
  }
}
    `;
export type CreateSongMutationFn = Apollo.MutationFunction<CreateSongMutation, CreateSongMutationVariables>;

/**
 * __useCreateSongMutation__
 *
 * To run a mutation, you first call `useCreateSongMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSongMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSongMutation, { data, loading, error }] = useCreateSongMutation({
 *   variables: {
 *      name: // value for 'name'
 *      albumId: // value for 'albumId'
 *   },
 * });
 */
export function useCreateSongMutation(baseOptions?: Apollo.MutationHookOptions<CreateSongMutation, CreateSongMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSongMutation, CreateSongMutationVariables>(CreateSongDocument, options);
      }
export type CreateSongMutationHookResult = ReturnType<typeof useCreateSongMutation>;
export type CreateSongMutationResult = Apollo.MutationResult<CreateSongMutation>;
export type CreateSongMutationOptions = Apollo.BaseMutationOptions<CreateSongMutation, CreateSongMutationVariables>;