import { useQuery } from "react-query";
import { request, gql } from "graphql-request";
import { endPoint } from "../constants";

const GET_MEMBERS = gql`
  query {
    members {
      id
      firstname
      lastname
      email
      zoomUrl
      schedulingUrl
      role
      moreInfo
      conditions {
        type
      }
      treatmentModalities {
        id
        type
      }
      specialties {
        type
      }
    }
  }
`;

const GET_MEMBER = gql`
  query ($id: ID!) {
    member(id: $id) {
      id
      firstname
      lastname
      email
      zoomUrl
      schedulingUrl
      role
      moreInfo
      conditions {
        type
      }
      treatmentModalities {
        id
        type
      }
      specialties {
        type
      }
    }
  }
`;
// const fetchMember = async (variables = {}, config = {}) => await request(endPoint, GET_MEMBER, variables, config);

const useMembers = (variables = {}, config = {}) => {
  const fetchMembers = async () => await request(endPoint, GET_MEMBERS, variables, config);

  return useQuery("members", fetchMembers, { staleTime: 55000 });
};

const useMember = (id: number, variables = {}, config = {}) => {
  const fetchMember = async (variables = {}, config = {}) => await request(endPoint, GET_MEMBER, { id }, config);
  console.log("idddddd: ", id);
  return useQuery(["member", id], fetchMember, { staleTime: 5000 });
};

export { useMembers, useMember };
