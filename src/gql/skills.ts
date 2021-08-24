import { gql } from "@apollo/client";

export const getSkills = gql`
  query {
    skillsCollection(order: sys_publishedAt_ASC) {
      items {
        title
        stack
      }
    }
  }
`;
