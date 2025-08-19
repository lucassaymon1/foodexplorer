import { Button, Container, Flex, IconButton, Image, Spinner, Text, VStack } from "@chakra-ui/react";
import { Quantify } from "./Quantify";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";

import { useState } from "react";
import { useCart } from "../hooks/cart";
import { useNavigate } from "react-router-dom";

export function CartProductItem({product, addToCart}) {
  const {removeFromCart, updateQuantity} = useCart()
  const [quantify, setQuantify] = useState(product.quantity)
  const [quantifyChange, setQuantifyChange] = useState(false)
  const navigate = useNavigate()
  const price = product.price * quantify
  const [removing, setRemoving] = useState(false);

  async function handleRemove() {
    setRemoving(true);
    setTimeout(() => {
      removeFromCart(product.id);
      setRemoving(false);
    }, 600)
  }

  async function handleQuantifyLoading(newQuantity){
    setQuantifyChange(true)
    setTimeout(() => {
      setQuantifyChange(false)
      updateQuantity(product.id, newQuantity)
      setQuantify(newQuantity)
    }, 600)
  }

  async function handleReduceProductAmount(){
    if(quantify === 1){
      await handleRemove()
      return
    }
    const newQuantity = quantify - 1
    
    await handleQuantifyLoading(newQuantity)
    
  }

  async function handleAddProductAmount(){
    const newQuantity = quantify + 1

    await handleQuantifyLoading(newQuantity)
  }

  return(
      product &&
      <Flex bg="dark.200" rounded="3xl" p="8" border="1px solid" borderColor="dark.1100" disabled={true} width="100%" gap={8} align="center" opacity={removing ? 0.5 : 1} pointerEvents={removing ? "none": "auto"} transition="opacity 0.3s">
        <Image disabled={true} onClick={() => navigate(`/details/${product.id}`)} height="88px" src={product.picture} alt={product.name} _hover={{
          cursor: "pointer"
        }

        }/>
        <VStack width="100%" gap={0} align="start">
          <Flex align="stretch" justify="space-between" w="full">
            <Text onClick={() => navigate(`/details/${product.id}`)} fontSize="3xl" color="light.300" marginBottom="8px" _hover={{
              cursor: "pointer"
            }}>
                {product.name}
            </Text>
            <Text pt="2" fontSize="2xl" color="light.500">
              R$ {price.toFixed(2)}
            </Text>
          </Flex>
          <Flex flexWrap="wrap" align="center" gap={4}>

            {/* quantifier */}

            <Flex mr={{base: 0, md: 4}} gap={5} align="center" border="2px solid" borderColor="dark.1100" rounded="lg" pointerEvents={quantifyChange ? "none" : "auto"}>
              <IconButton
                size="xl"
                aria-label="Add to cart"
                variant={"ghost"}
                onClick={handleReduceProductAmount}
                _hover={{
                  bg: "dark.1100",
                  color: quantify === 1 && "tomato.400"
                }}
              >
                {
                  quantify === 1 ?
                  <FaRegTrashCan/>
                  :
                  <FaMinus />

                }
              </IconButton>
              {
                quantifyChange
                ?
                <Spinner size="lg" color="cake.200" />
                :
                <Text fontSize="2xl" color="light.300" minW="20px" textAlign="center">
                  {quantify}
                </Text>
              }
              <IconButton
                size="xl"
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
            {/* other cart buttons */}
            <Button
              disabled={quantifyChange} loading={removing} px={4} py={6} fontSize="xl" variant="outline" color="tomato.400" rounded="lg" borderColor="dark.1100"
              _hover={{
                bg: "dark.1100",
              }} 
              onClick={handleRemove}>
                Excluir</Button>
            <Button 
              disabled={quantifyChange} px={4} py={6} fontSize="xl" variant="plain" color="cake.200"
              rounded="lg" borderColor="dark.1100"
              _hover={{
                bg: "dark.1100",
              }} 
            >Favoritar</Button>
          </Flex>
        </VStack>
      </Flex>
  )
}