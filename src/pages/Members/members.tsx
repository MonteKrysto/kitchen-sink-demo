import { Box, Container, ChakraProvider } from "@chakra-ui/react";
import { useMembers } from "../../hooks/useMembers";
import { DataTable } from "../../component-lib/DataTable/dataTable";
import { DropDown } from "../../component-lib/DropDown/dropDown";

const Members = () => {
  const { status, data, error, isFetching } = useMembers();

  if (isFetching) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:</div>;
  }
  console.log("data: ", isFetching);
  return (
    <>
      <Box bg='tomato' w='100%' p={4} color='white'>
        This is the Box
      </Box>
      <Container maxW='container.xl' w={[300,400,500]}>
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
