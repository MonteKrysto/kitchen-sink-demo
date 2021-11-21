import { useQuery } from "react-query";
import { useMatch } from "react-location";
import { request, gql } from "graphql-request";
import { endPoint } from "../../../constants";

const GET_MEMBERS = gql`
  query ($page: Int, $limit: Int) {
    members(page: $page, limit: $limit) {
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
const fetchMembers = async (variables: {}, config: {}) => await request(endPoint, GET_MEMBERS, variables, config);

const useMembers = (variables = { page: 0, limit: 10 }, config = {}) => {
  const fetchMembers = async () => await request(endPoint, GET_MEMBERS, variables, config);
  console.log("vars: ", variables);
  return useQuery(["members", variables.page], () => fetchMembers(), {
    keepPreviousData: true,
    staleTime: 55000,
  });
};

const useMember = () => {
  const {
    params: { memberId },
  } = useMatch();
  const fetchMember = async (variables = {}, config = {}) =>
    await request(endPoint, GET_MEMBER, { id: memberId }, config);

  return useQuery(["member", memberId], fetchMember, { staleTime: 5000 });
};

export { useMembers, useMember, fetchMembers };
