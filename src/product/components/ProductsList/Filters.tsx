import React from "react";
import {Text, Stack, Box} from "@chakra-ui/react";

import {Filter} from "./types";

interface Props {
  active: Filter;
  onChange: (filter: Filter) => void;
}

const FILTERS: Filter[] = [Filter.MostRecent, Filter.LowestPrice, Filter.HighestPrice];

const Filters: React.FC<Props> = ({onChange, active}) => {
  return (
    <Stack alignItems="center" direction="row" spacing={6}>
      <Text color="gray.500">Sort by:</Text>
      <Stack direction="row" spacing={4}>
        {FILTERS.map((filter) => (
          <Box
            key={filter}
            backgroundColor={filter === active ? "primary.400" : "gray.100"}
            borderRadius={999}
            color={filter === active ? "white" : "gray.600"}
            cursor="pointer"
            fontWeight="500"
            paddingX={6}
            paddingY={2}
            onClick={() => onChange(filter)}
          >
            {filter}
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default Filters;
