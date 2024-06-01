/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2023 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Avatar,
  Box,
  Flex,
  FormLabel,
  Icon,
  Select,
  SimpleGrid,
  useColorModeValue,
  Tabs, TabList, TabPanels, Tab, TabPanel, Image, Container, Heading
} from "@chakra-ui/react";
// Assets
// Custom components
import {useEffect, useState} from "react"
import MiniStatistics from "components/card/MiniStatistics";
import IconBox from "components/icons/IconBox";
import React from "react";
import {
  MdFileCopy,
  MdOutlineAccessAlarm,
  MdFireExtinguisher,
  MdExitToApp,
  MdOutlineSocialDistance,
  MdApartment,
} from "react-icons/md";
import CheckTable from "views/admin/default/components/CheckTable";
import DailyTraffic from "views/admin/default/components/DailyTraffic";
import PieCard from "views/admin/default/components/PieCard";
import RadarChart from "views/admin/default/components/RadarChart";
import ConfusionMatrix from "views/admin/default/components/ConfusionMatrix";
import TotalSpent from "views/admin/default/components/TotalSpent";
import WeeklyRevenue from "views/admin/default/components/WeeklyRevenue";
import {
  columnsDataCheck,
  columnsDataComplex,
} from "views/admin/default/variables/columnsData";
import tableDataCheck from "views/admin/default/variables/tableDataCheck.json";
import axios from "axios";

const default_data = {
  labels: ['Accuracy', 'Precision', 'Recall', 'F1', 'AUC'],
  datasets: [
    {
      label: 'Logistic Regression',
      data: [65, 59, 90, 81, 56],
      fill: true,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgb(75, 192, 192)',
      pointBackgroundColor: 'rgb(75, 192, 192)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(75, 192, 192)',
      matrix: [
        [50, 10, 5],
        [8, 45, 7],
        [4, 6, 60]
      ]
    },
    {
      label: 'Random Forest',
      data: [70, 65, 85, 75, 60], // Example data for Random Forest
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)',
      matrix: [
        [50, 10, 5],
        [8, 45, 7],
        [4, 6, 60]
      ]
    },
    {
      label: 'kNN',
      data: [75, 70, 80, 78, 65], // Example data for kNN
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)',
      matrix: [
        [50, 10, 5],
        [8, 45, 7],
        [4, 6, 60]
      ]
    },
    {
      label: 'XGBoost',
      data: [72, 68, 82, 76, 62], // Example data for XGBoost
      fill: true,
      backgroundColor: 'rgba(255, 205, 86, 0.2)',
      borderColor: 'rgb(255, 205, 86)',
      pointBackgroundColor: 'rgb(255, 205, 86)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 205, 86)',
      matrix: [
        [50, 10, 5],
        [8, 45, 7],
        [4, 6, 60]
      ]
    },
    {
      label: 'LightGBM',
      data: [78, 72, 88, 80, 70], // Example data for LightGBM
      fill: true,
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
      borderColor: 'rgb(153, 102, 255)',
      pointBackgroundColor: 'rgb(153, 102, 255)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(153, 102, 255)',
      matrix: [
        [50, 10, 5],
        [8, 45, 7],
        [4, 6, 60]
      ]
    },
    {
      label: 'Neural Network',
      data: [80, 75, 85, 82, 75], // Example data for Neural Network
      fill: true,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgb(255, 159, 64)',
      pointBackgroundColor: 'rgb(255, 159, 64)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 159, 64)',
      matrix: [
        [50, 10, 5],
        [8, 45, 7],
        [4, 6, 60]
      ]
    },
  ],
};

export default function UserReports() {
  // Chakra Color Mode
  const brandColor = useColorModeValue("brand.500", "white");
  const boxBg = useColorModeValue("secondaryGray.300", "whiteAlpha.100");
  const [data, setData] = useState(default_data)

  useEffect(() => {
    axios.get('https://ml-20232-server.onrender.com')
          .then((response) => {
              console.log(response);
              setData(response.data);                     
              })
          .catch((err) => console.error(err));
  }, [])

  
  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>

      <SimpleGrid columns={{ base: 1, md: 1, xl: 2 }} gap='20px' mb='20px'>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap='20px'>
          <PieCard />
        </SimpleGrid>
      </SimpleGrid>

      <Container maxW="container.xl" p={5}>
        <RadarChart data={data} />
      </Container>

      <Tabs isFitted variant='enclosed'>
        <TabList mb='1em'>
          <Tab>Logistic Regression</Tab>
          <Tab>Random Forest</Tab>
          <Tab>kNN</Tab>
          <Tab>XGBoost</Tab>
          <Tab>LightGBM</Tab>
          <Tab>Neural Network</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Box p={5}>
              <Heading mb={6}>Confusion Matrix of {data.datasets[0].label}</Heading>
              <ConfusionMatrix matrix={data.datasets[0].matrix} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5}>
              <Heading mb={6}>Confusion Matrix of {data.datasets[1].label}</Heading>
              <ConfusionMatrix matrix={data.datasets[1].matrix} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5}>
              <Heading mb={6}>Confusion Matrix of {data.datasets[2].label}</Heading>
              <ConfusionMatrix matrix={data.datasets[2].matrix} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5}>
              <Heading mb={6}>Confusion Matrix of {data.datasets[3].label}</Heading>
              <ConfusionMatrix matrix={data.datasets[3].matrix} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5}>
              <Heading mb={6}>Confusion Matrix of {data.datasets[4].label}</Heading>
              <ConfusionMatrix matrix={data.datasets[4].matrix} />
            </Box>
          </TabPanel>
          <TabPanel>
            <Box p={5}>
              <Heading mb={6}>Confusion Matrix of {data.datasets[5].label}</Heading>
              <ConfusionMatrix matrix={data.datasets[5].matrix} />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
}
