import { Button, Container, Flex, IconButton, Image, Text, VStack } from "@chakra-ui/react";
import { Quantify } from "./Quantify";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

import { useState } from "react";
import { useCart } from "../hooks/cart";

export function CartProductItem({product, addToCart}) {

  const {removeFromCart, updateQuantity} = useCart()
  const [quantify, setQuantify] = useState(product.quantity)
  const price = product.price * quantify

  function handleReduceProductAmount(){
    if(quantify === 1){
      removeFromCart(product.id)
      return
    }
    const newQuantity = quantify - 1
    setQuantify(newQuantity)

    updateQuantity(product.id, newQuantity)
  }

  function handleAddProductAmount(){
    const newQuantity = quantify + 1
    setQuantify(newQuantity)

    updateQuantity(product.id, newQuantity)
  }

  return(
      product &&
      <Flex width="100%" gap={8} align="center" >
        <Image height="88px" src={product.picture} alt={product.name} />
        <VStack width="100%" gap={0} align="start" justifyContent="between">
          <Flex justify="space-between" w="full">
            <Text fontSize="3xl" color="light.300" marginBottom="8px">
                {product.name}
            </Text>
            <Text pt="2" fontSize="2xl" color="light.500">
              R$ {price.toFixed(2)}
            </Text>
          </Flex>
          <Flex >
            <Flex gap={5} pr={4} align="center">
              <IconButton
                size="xl"
                aria-label="Add to cart"
                variant={"ghost"}
                onClick={handleReduceProductAmount}
                _hover={{
                  bg: "dark.1100",
                }}
              >
                {
                  quantify === 1 ?
                  <FaRegTrashCan/>
                  :
                  <FaMinus />

                }
              </IconButton>
              <Text fontSize="2xl" color="light.300" minW="20px" textAlign="center">
                {quantify}
              </Text>
              <IconButton
                size="lg"
                aria-label="Add to cart"
                variant={"ghost"}
                onClick={handleAddProductAmount}
                _hover={{
                  bg: "dark.1100",
                }}
              >
                <FaPlus />
              </IconButton>
            </Flex >
            {/* <Quantify value={quantify} onChange={setQuantify}></Quantify> */}
            <Button
              paddingInline="4" pt="3" pb="1" fontSize="xl" borderLeft="1px solid" borderLeftColor="gray.600" variant="plain" color="tomato.400" 
              _hover={{
                textDecoration: "underline",
              }} 
              onClick={() => removeFromCart(product.id)}>Excluir</Button>
            <Button 
              paddingInline="4" pt="3" pb="1" fontSize="xl" borderLeft="1px solid" borderLeftColor="gray.600" variant="plain" color="cake.200"
              _hover={{
                textDecoration: "underline",
              }} 
            >Favoritar</Button>
          </Flex>
        </VStack>
      </Flex>
  )
}