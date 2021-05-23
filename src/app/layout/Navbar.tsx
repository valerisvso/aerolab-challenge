import React from "react";
import {Text, Box, Container, Stack, Image} from "@chakra-ui/react";

import logo from "~/assets/logo.svg";
import coin from "~/assets/icons/coin.svg";
import {usePoints, useUser} from "~/user/hooks";

const Navbar: React.FC = () => {
  const [points, addPoints] = usePoints();
  const user = useUser();

  return (
    <Box backgroundColor="white" boxShadow="md">
      <Container maxWidth="6xl">
        <Stack
          alignItems="center"
          as="nav"
          direction="row"
          justifyContent="space-between"
          paddingY={3}
        >
          <Image height={8} width={8} src={logo} />
          <Stack alignItems="center" color="gray.500" direction="row" spacing={3}>
            <Text>{user.name}</Text>
            <Stack
              alignItems="center"
              backgroundColor="gray.100"
              borderRadius="999"
              cursor="pointer"
              direction="row"
              paddingX={3}
              paddingY={2}
              onClick={() => addPoints(1000)}
            >
              <Text fontWeight="500">{points}</Text>
              <Image height={6} width={6} src={coin} />
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
