import { gql } from '@apollo/client';

export const getBlogs = gql`
    query {
        blogPostCollection {
            total
            items {
                routeId
                title
                summary
                readTime
                sys {
                    id
                    firstPublishedAt
                }
            }
        }
    }
`;


export const getBlogByRoute = gql`
    query blogPostByRoute($route: String!){
        blogPostCollection(where: { routeId: $route }){
            items {
                title
                readTime
                tags
                github
                references
                codeSnippetsTags
                content {
                    json
                }
                sys {
                    id
                    firstPublishedAt
                }
            }
        }
    }
`;

export const getBlogAssets = gql`
   query blogAssets($id: String!){
       blogPost(id: $id){
           content {
               links {
                   assets {
                       block {
                           url
                           sys {
                               id
                           }
                       }
                   }
               }
           }
       }
   } 
`;

export const getCodeSnippets = gql`
    query snippets($tags: [String!]){
        codeBlockCollection(where: { snippetTag_in: $tags }){
            total
            items {
                snippets {
                    json
                }
                sys {
                    id
                }
            }
        }
    }
`;
