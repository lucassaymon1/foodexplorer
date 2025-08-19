import { useCart } from "../../hooks/cart";
import { CartProductItem } from "../../Components/CartProductItem";
import { Header } from "../../Components/Header";
import { CaretLeft } from "../../icons/CaretLeft";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../Components/ButtonText";
import {TextArea} from "../../Components/TextArea"
import {Button as DefaultButton} from "../../Components/Button"
import {Footer} from "../../Components/Footer"
import {
  Box,
  Button,
  Card,
  Container,
  Field,
  Flex,
  Group,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  InputGroup,
  Show,
  Stack,
  Tabs,
  Text,
  Textarea,
  VStack
} from "@chakra-ui/react";

import { FaPix } from "react-icons/fa6";
import { FaRegCreditCard } from "react-icons/fa";
import { Receipt } from "../../icons/Receipt";
import { LuTickets } from "react-icons/lu";
import { FaHeart } from "react-icons/fa";
import { MdDinnerDining } from "react-icons/md";
import { MdRestaurantMenu } from "react-icons/md";

import qrCode from "../../assets/qrcode.jpg"

// imports for credit card processing
import { LuCreditCard } from "react-icons/lu"
import { usePaymentInputs } from "react-payment-inputs"
import cardImages from "react-payment-inputs/images"
import { useEffect, useState } from "react";

// get tools for credit card processing on input
const images = cardImages

const CardImage = ({...props}) => {
  const { meta, getCardImageProps } = props
  return (
    <Show
      when={meta.cardType}
      fallback={<LuCreditCard size={18} aria-hidden="true" />}
    >
      <Icon size="2xl">
        <svg {...getCardImageProps({ images })} />
      </Icon>
    </Show>
  )
}

export function Cart() {
  const { cart, addToCart } = useCart();
  const [isEmptyCart, setIsEmptyCart] = useState(true)
  const navigate = useNavigate();

  useEffect(() => {
    if(cart.totalProducts === 0){
      setIsEmptyCart(true)
    }
    else{
      setIsEmptyCart(false)
    }
  }, [cart.totalProducts])

  const paymentMethods = [
    {
      title: "Pix",
      icon: <FaPix/>
    },
    {
      title: "Crédito",
      icon: <FaRegCreditCard/>
    }
  ]

  const CardBodyPix = () => {
    return (
      <>
        <Card.Body gap="2" py="4.6rem" alignItems="center" bg="dark.600" >
          <Image
            src={qrCode}
            alt="Green double couch with wooden legs"
            w="25rem"
          />
        </Card.Body>
      </>
    )
  }
  const CardBodyCredit = () => {
    const payment = usePaymentInputs()
    return (
      <>
        <Card.Body gap={12} py="5rem" alignItems="center" bg="dark.400" w="full" px={24}>
          <Field.Root >
            <Field.Label fontSize="2xl" mb={2}>Número do Cartão</Field.Label>
            <InputGroup
              zIndex={{ _focusWithin: "1" }}
              endElement={<CardImage {...payment} />}
              endElementProps={{pr:6}}
              >
              <Input px={6} py={9} fontSize="2xl" rounded="lg" {...payment.getCardNumberProps()} placeholder="0000 0000 0000 0000"/>

            </InputGroup>
            
          </Field.Root>

          <Field.Root >
            <HStack gap={8}>
              <Stack>
                <Field.Label fontSize="2xl" mb={2}>Validade</Field.Label>
                <Input px={6} py={9} fontSize="2xl" rounded="lg" {...payment.getExpiryDateProps()} />
              </Stack>
              <Stack>
                <Field.Label fontSize="2xl" mb={2}>CVC</Field.Label>
                <Input px={6} py={9} fontSize="2xl" rounded="lg" {...payment.getCVCProps()} placeholder="000" />
              </Stack>
            </HStack>
          </Field.Root>
          <DefaultButton title="Finalizar pagamento" icon={Receipt}/>

        </Card.Body>
      </>
    )
  }

  return (
    <Box>
      <Header />

      {/* Botão de voltar */}
      <Box pl={{base: 12, md: 12, lg: 24}} py={12} w="max-content">
        <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />
      </Box>

      {/* Conteúdo principal */}
      <Flex minH={{base: "80vh", lg: "default"}} maxW={{base: "4xl", lg: "full"}} w="full" gap={{base: 16, lg: 0}} align={{lg: "start"}} flexDir={{base: "column", lg: "row"}} justifyContent={{lg: "space-evenly"}} py={22} px={{base: 12, lg: isEmptyCart ? 24 : 0}} pb={36} m="auto">
        {/* Lista de produtos */}
        <VStack w={isEmptyCart?{base: "full", lg: "60%"}: "default"} align={{base: "stretch"}} gap={2} >
          <Heading as="h2" fontSize="5xl" pb={12}>
            Meu pedido
          </Heading>
          {
            isEmptyCart ? 
            (
              <HStack flexDir={{base: "column", lg: "row"}} justify="center" gap={12} h="100%" pt={{base: 16, lg: 32}} align="center">
                <Icon fontSize={{base: 124, md: 160}} color="light.700">
                  <MdDinnerDining />
                </Icon>
                <VStack gap={8}>
                  <Heading size={{base: "5xl", lg: "6xl"}} color="light.700">Oops... Parece que você ainda não tem nenhum pedido!</Heading>
                  <HStack flexDir={{base: "column", md: "row"}} w="full" gap={5}>
                    <Button w={{base: "full", md: "50%", lg: "fit-content"}} onClick={() => navigate("/")} rounded="lg" size="2xl" bg="tomato.200" color="white" fontSize="xl" _hover={{
                      bg: "white",
                      color: "tomato.200"
                    }}>
                      <Icon size="xl">
                        <MdRestaurantMenu/>
                      </Icon>
                      Voltar ao cardápio
                    </Button>
                    <Button w={{base: "full", md: "50%", lg: "fit-content"}} variant="surface" rounded="lg" size="2xl" fontSize="xl">
                      <FaHeart/>
                      Ir aos favoritos
                    </Button>
                    
                  </HStack>

                </VStack>
              </HStack>
            )
            :
            (
              <>
                <VStack gap={6} mb="3rem" >
                  {cart.products?.map((product) => (
                    <CartProductItem
                      key={String(product.id)}
                      product={product}
                      addToCart={addToCart}
                    />
                  ))}
                </VStack>
                <Box w={{base: "100%", lg:"3xl"}}>
                  <Heading size="2xl" pb={3}>Observações</Heading>
                  <TextArea
                    placeholder="Ex: tirar cebola na salada."
                    minH="120px"
                  />
                </Box>
              </>
            )
          }

        </VStack>

        {/* Campo de Resumo da compra */}

        {
          !isEmptyCart
          &&
          (
            <VStack w={{base: "none", lg: "3xl"}} align={{base: "right", lg:"left"}} gap={6}>
              <Heading as="h2" fontSize="5xl" pb={8}>
                Resumo do pedido
              </Heading>
              <VStack gap={4} mb={8}>
                <HStack justify="space-between" w="100%">
                  <Text textStyle="2xl" >{`Produtos (${cart.totalProducts})`}</Text>
                  <Text textStyle="2xl" >R$ {(cart.totalPrice)}</Text>
                </HStack>
                <HStack justify="space-between" w="100%">
                  <Text textStyle="2xl" >{`Taxa de entrega`}</Text>
                  <Text textStyle="2xl" color="green.500">Grátis</Text>
                </HStack>

                <HStack justify="space-between" w="100%">
                  <Text textStyle="2xl" color="cake.200">Cupom de desconto</Text>
                  <InputGroup
                    paddingInline={0}
                    startElement={<LuTickets size={18}/>} startElementProps={{pl:4}}
                    endElement={<Button h="full" size="lg" fontSize="xl" px={3} bg="tomato.200" roundedLeft={0} roundedRight="lg" mr={-4} color="light.500" _hover={{
                      bg: "white",
                      color: "tomato.200"
                    }}>Aplicar</Button>}
                    w="50%"
                  >
                    
                    <Input paddingInlineStart="0" paddingInlineEnd="0" paddingLeft={14} pr="6.6rem" py={8} fontSize="1.4rem" rounded="lg" placeholder="Insira aqui seu cupom" _focus={{
                      outline: "1px"
                    }}/>

                  </InputGroup>
                  
                </HStack>

                <HStack justify="space-between" w="100%" mt={4}>
                  <Text textStyle="3xl" fontWeight={500}>Total</Text>
                  <Text textStyle="3xl" fontWeight={500}>R$ {(cart.totalPrice)}</Text>
                </HStack>
              </VStack>
              <Tabs.Root defaultValue="Pix" variant="outline" >
                <Tabs.List >
                  {
                    paymentMethods.map(item => (
                      <Tabs.Trigger key={item.title} value={item.title} w="full" fontSize="3xl" justifyContent="center" py={10} roundedTop="xl" borderBottom= "none" _selected={{
                        bg: "dark.200",
                        borderColor:"light.600",
                      }} >
                        {item.icon}
                        {item.title}
                      </Tabs.Trigger >
                    ))
                  }              
                </Tabs.List>
                {
                  paymentMethods.map(item => (
                    <Tabs.Content value={item.title} width="full" pt="0">
                      <Card.Root overflow="hidden" width="full" roundedTop="none" borderColor="light.600">      
                        {
                          item.title==="Pix" ?
                          <CardBodyPix/>
                          : <CardBodyCredit/>
                        }
                      </Card.Root>
                    </Tabs.Content>
                  ))
                }    
              </Tabs.Root>       
            </VStack>
          )
        }
        
      </Flex>
      <Footer/>
    </Box>
  );
}
