import React from "react";
import { useMatch } from "react-location";
import { useMember } from "../../hooks/useMembers";

const Member: React.FC = () => {
  const {
    params: { memberId },
  } = useMatch();
  console.log("memberId: ", memberId);
  const { data, isFetching, isError } = useMember(parseInt(memberId));

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error:</div>;
  }
  console.log("data: ", data.member);
  return <div>{data.member.firstname}</div>;
};

export default Member;
