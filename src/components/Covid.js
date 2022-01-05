import React, { useEffect, useState } from "react";
import { Input, Text, Box, Flex, Button } from "@chakra-ui/react";

const Covid = () => {
  const [inputvals, setInputsVals] = useState("");
  const [apiData, setApiData] = useState("");
  //   useEffect(() => {
  //     fetch("https://disease.sh/v3/covid-19/countries")
  //       .then((response) => response.json())
  //       .then((result) => console.log(result[93]))
  //       .catch((error) => console.log(error));
  //   }, []);
  const handleClick = (e) => {
    e.preventDefault();
    setInputsVals("");
    fetch(`https://disease.sh/v3/covid-19/countries/${inputvals}`)
      .then((res) => res.json())
      .then((result) => setApiData(result))
      .catch((err) => console.log(err));
    // console.log("Country result", apiData);
  };
  const handleChange = (event) => {
    setInputsVals(event.target.value);
  };
  return (
    <>
      {/* <Flex direction="column" justifyContent="center" alignItems="center"> */}
      <Box className="flex flex-col justify-center items-center m-8">
        {/* <Text className="text-black pb-6 text-2xl font-bold">
          SARS-COVID-19 APPLICATION
        </Text> */}
        <text>SARS-COVID-19 APPLICATION</text>
        <Input
          placeholder="Enter contry name"
          w="60%"
          mb="4"
          onChange={handleChange}
        />
        <Button
          disabled={inputvals.length >= 4 ? false : true}
          colorScheme="blue"
          onClick={(e) => handleClick(e)}
          w="20%"
          //   isLoading={apiData !== "" ? true : false}
        >
          Search
        </Button>
      </Box>
      {!apiData && apiData === "" && apiData.country !== "" ? (
        <Text className="font-bold flex flex-col justify-center items-center mt-32"></Text>
      ) : (
        <Box h="10rem" className="m-2">
          <Flex>
            <Box w="15rem" className="bg-gray-300 m-2 rounded-md">
              <Box className="flex flex-col justify-center items-center mt-32">
                <Text className="font-extrabold">Total Cases</Text>
                <Text>{apiData && apiData.cases}</Text>
              </Box>
            </Box>
            <Box h="20rem" w="15rem" className="bg-gray-300 m-2 rounded-md">
              <Box className="flex flex-col justify-center items-center mt-32">
                <Text className="font-extrabold">Deaths</Text>
                <Text>{apiData && apiData.deaths}</Text>
              </Box>
            </Box>
            <Box h="20rem" w="15rem" className="bg-gray-300 m-2 rounded-md">
              <Box className="flex flex-col justify-center items-center mt-32">
                <Text className="font-extrabold">Recovered</Text>
                <Text>{apiData && apiData.recovered}</Text>
              </Box>
            </Box>
            <Box h="20rem" w="15rem" className="bg-gray-300 m-2 rounded-md">
              <Box className="flex flex-col justify-center items-center mt-32">
                <Text className="font-extrabold">Cases Today </Text>
                <Text>{apiData && apiData.todayCases}</Text>
              </Box>
            </Box>
            <Box h="20rem" w="15rem" className="bg-gray-300 m-2 rounded-md">
              <Box className="flex flex-col justify-center items-center mt-32">
                <Text className="font-extrabold">Deaths Today</Text>
                <Text>{apiData && apiData.todayDeaths}</Text>
              </Box>
            </Box>
            <Box h="20rem" w="15rem" className="bg-gray-300 m-2 rounded-md">
              <Box className="flex flex-col justify-center items-center mt-32">
                <Text className="font-extrabold">Recovered Today</Text>
                <Text>{apiData && apiData.todayRecovered}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      )}
      {/* </Flex> */}
    </>
  );
};

export default Covid;
