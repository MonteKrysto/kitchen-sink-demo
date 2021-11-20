import React from "react";
import { Route, ReactLocation } from "react-location";
// import Member from "./pages/Members/member";
import { queryClient } from "./App";
// import { fetchMember } from "./hooks/useMembers";
// import { Members } from "./pages/members";

export const routes: Route[] = [
  {
    path: "/",
    element: <div>Home</div>,
  },
  {
    path: "/members",
    element: () => import("./pages/Members/members").then(m => <m.default />),
    // children: [
    //   {
    //     path: ":memberId",
    //     element: () => import("./pages/Members/member").then(m => <m.default />),
    //     //loader: ({ params: { memberId } }) => queryClient.fetchQuery(fetchMuseMembember(memberId)),
    //   },
    // ],
  },
  {
    path: "/member/:memberId",
    element: () => import("./pages/Members/member").then(m => <m.default />),
    //loader: ({ params: { memberId } }) => queryClient.fetchQuery(fetchMuseMembember(memberId)),
  },
  // {
  //   path: "member",
  //   // element: <Members />,
  //   children: [
  //     {
  //       path: ":id",
  //       element: <Member />,
  //     },
  //   ],
  // },
];

export const location = new ReactLocation();
