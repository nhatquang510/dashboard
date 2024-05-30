// chakra imports
import { Box, Flex, IconButton, Stack } from "@chakra-ui/react";
//   Custom components
import Brand from "components/sidebar/components/Brand";
import Links from "components/sidebar/components/Links";
import SidebarCard from "components/sidebar/components/SidebarCard";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";

// FUNCTIONS

function SidebarContent(props) {
  const { routes } = props;
  const [navSize, changeNavSize] = useState("large")
  // SIDEBAR
  return (
    <Flex direction='column' height='100%' pt='25px' px="16px"
        borderRadius={navSize == "small"?'15px' : '30px'}
        w={navSize == "small"?'75px' : '200px'}
    >

      <Flex
        p="5%"
        flexDir="column"
        alignItems="flex-start"
        as="nav"
      >
        <IconButton
            background="none"
            mt={5} _hover={{background: 'none'}}
            icon={<FiMenu />}
            onClick={() => {
                if (navSize == "small")
                  changeNavSize("large")
                else
                  changeNavSize("small")
            }}
        />
      </Flex>

      <Brand />
      <Stack direction='column' mb='auto' mt='8px' display={navSize == "small"?'none' : 'flex'}>
        <Box ps='20px' pe={{ md: "16px", "2xl": "1px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>

      {/* <Box
        mt='60px'
        mb='40px'
        borderRadius='30px'>
        <SidebarCard />
      </Box> */}
    </Flex>
  );
}

export default SidebarContent;
