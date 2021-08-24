import { gql } from "@apollo/client";

export const getProjects = gql`
  query {
    projectCollection(order: date_DESC) {
      items {
        name
        description
        stack
        links
        thumbnail
        date
      }
    }
  }
`;
