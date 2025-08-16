import { useCart } from "@/hooks/cart";
import { CartProductItem } from "../../Components/CartProductItem";
import { Header } from "@/components/Header";
import { CaretLeft } from "@/icons/CaretLeft";
import { useNavigate } from "react-router-dom";
import { ButtonText } from "../../Components/ButtonText";
import { PiCaretLeftBold } from "react-icons/pi";
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

import qrCode from "../../assets/qrcode.jpg"

// imports for credit card processing
import { LuCreditCard } from "react-icons/lu"
import { usePaymentInputs } from "react-payment-inputs"
import cardImages from "react-payment-inputs/images"

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
  const navigate = useNavigate();

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
      <Box pl={24} py={12} w="max-content">
        <ButtonText onClick={() => navigate(-1)} icon={CaretLeft} title="voltar" />
      </Box>

      {/* Conteúdo principal */}
      <Flex justifyContent={{md:"center", lg: "space-evenly"}} py={22} pb={36}>
        {/* Lista de produtos */}
        <VStack align="stretch" gap={2}>
          <Heading as="h2" fontSize="5xl" pb={12}>
            Meu pedido
          </Heading>

          <VStack gap={10} mb="3rem" >
            {cart.products?.map((product) => (
              <CartProductItem
                key={String(product.id)}
                product={product}
                addToCart={addToCart}
              />
            ))}

          </VStack>

          <Box w="3xl">
            <Heading size="2xl" pb={3}>Observações</Heading>
            <TextArea
              placeholder="Ex: tirar cebola na salada."
              minH="120px"
            />
          </Box>
        </VStack>

        {/* Campo de observações */}
        
        <VStack w="3xl" align="left" gap={6}>
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
                
                <Input paddingInlineStart="0" paddingLeft={14} py={8} fontSize="1.4rem" rounded="lg" placeholder="Insira aqui seu cupom" _focus={{
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
      </Flex>
      <Footer/>
    </Box>
  );
}
