import { Box, Heading, Text, VStack, Container, Icon } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSearchParams } from "react-router-dom"
import { CheckCircleIcon } from '@chakra-ui/icons'

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const referenceNum = searchParams.get("reference");

    // Debug logging to check if the search params are being retrieved correctly
    useEffect(() => {
        console.log("Search Params:", searchParams.toString());
        console.log("Reference Number:", referenceNum);
    }, [searchParams, referenceNum]);
    
    console.log(referenceNum)
    return (
        <Box bgGradient="linear(to-r, green.200, blue.200)" minHeight="100vh">
            <Container maxW="container.md" py={10}>
                <VStack spacing={8} justify="center" minHeight="90vh">
                    <Icon as={CheckCircleIcon} w={20} h={20} color="green.500" />
                    <Heading textTransform="uppercase" color="green.700">
                        Donation Successful
                    </Heading>
                    <Text fontSize="xl" fontWeight="bold">
                        Thank you for your generosity!
                    </Text>
                    <Box 
                        bg="white" 
                        p={6} 
                        borderRadius="lg" 
                        boxShadow="md"
                        textAlign="center"
                    >
                        <Text fontSize="lg" color="green.700">
                            Reference No: {referenceNum ? referenceNum : "N/A"}
                        </Text>
                    </Box>
                </VStack>
            </Container>
        </Box>
    )
}

export default PaymentSuccess