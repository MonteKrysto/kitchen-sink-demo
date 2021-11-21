import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import { Button, Container } from "@chakra-ui/react";
import { useMembers, fetchMembers } from "./hooks/useMembers";
import { DataTable } from "../../component-lib/DataTable/dataTable";
import { DropDown } from "../../component-lib/DropDown/dropDown";

const Members = () => {
  const [pageCount, setPageCount] = useState(1);
  const queryClient = useQueryClient();
  const { data, error, isFetching } = useMembers({ page: pageCount, limit: 20 });

  useEffect(() => {
    const count = data && data.members.length * pageCount;

    if (data && count < 200) {
      queryClient.prefetchQuery(["members", pageCount + 1], () => fetchMembers({ page: pageCount + 1, limit: 20 }, {}));
    }
  }, [data, pageCount, queryClient]);

  const handleNext = () => {
    setPageCount(pageCount + 1);
  };

  const handleBack = () => {
    setPageCount(pageCount - 1);
  };
  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
  }

  return (
    <>
      <Button onClick={handleBack}>Back</Button>
      <Button
        onClick={handleNext}
        // disabled={isPreviousData || !data?.hasMore}
      >
        Next
      </Button>
      <Container maxW='container.md'>
        <DataTable
          data={data.members}
          caption='test table'
          defaultColumns={["firstname", "lastname", "email"]}
          linkColumns={{ field: "firstname", to: "/member" }}
        ></DataTable>

        <DropDown
          onChange={val => console.log("val: ", val)}
          isMulti
          options={[
            { value: "blue", label: "Blue" },
            { value: "purple", label: "Purple" },
            { value: "red", label: "Red" },
            { value: "orange", label: "Orange" },
            { value: "yellow", label: "Yellow" },
            { value: "green", label: "Green" },
          ]}
          name='test'
          placeholder='test placeholder'
        />
      </Container>
    </>
  );
};

export default Members;
