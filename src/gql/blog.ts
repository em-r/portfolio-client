import { gql } from '@apollo/client';

export const getBlogs = gql`
    query {
        blogPostCollection {
            total
            items {
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