import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaFacebookF, FaGoogle, FaSpotify, FaShopify } from 'react-icons/fa'

function Social() {
    return (
        <HStack spacing="24">
            <Icon as={FaFacebookF} boxSize="35" />
            <Icon as={FaGoogle} boxSize="35" />
            <Icon as={FaSpotify} boxSize="35" />
            <Icon as={FaShopify} boxSize="35" />
        </HStack>
    )
}

export  {Social}