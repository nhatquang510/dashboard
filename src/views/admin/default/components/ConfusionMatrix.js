// src/ConfusionMatrix.js
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, useColorModeValue } from '@chakra-ui/react';

const ConfusionMatrix = ({ matrix = [] }) => {
  const colorMode = useColorModeValue('white', 'gray.800');

  if (!matrix.length) {
    return <Box>No data available</Box>;
  }

  const maxValue = Math.max(...matrix.flat());

  return (
    <Box overflowX="auto">
      <Table variant="simple" colorScheme="teal" size="sm">
        <Thead>
          <Tr>
            <Th width="120px">Predicted \ Actual</Th>
            {matrix[0].map((_, index) => (
              <Th key={index}>Class {index}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {matrix.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              <Td width="120px">Class {rowIndex}</Td>
              {row.map((value, colIndex) => (
                <Td key={colIndex} bgColor={`rgba(0, 128, 0, ${value / maxValue})`}>
                  {value}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ConfusionMatrix;