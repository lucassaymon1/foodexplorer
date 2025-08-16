import { createContext, useContext, useState, useEffect } from "react";

// Contexto para o carrinho de pedidos

const CartContext = createContext({})

export function CartProvider({children}){
  
  // Persiste os dados do estado global armazenados do LocalStorage
  
  const storedCart = localStorage.getItem('@foodexplorer:cart')
    ? JSON.parse(localStorage.getItem('@foodexplorer:cart'))
    : {products: [], totalPrice: 0, totalProducts: 0}
    const [cart, setCart] = useState(storedCart)

  // Atualiza o LocalStorage sempre que o estado global é alterado

  useEffect(() => {
    let cartTotalPrice = 0
    let cartTotalProducts = 0
    cart.products.map((item) => {
      cartTotalPrice += (item.price * item.quantity)
      cartTotalProducts += item.quantity
    })
    setCart({...cart, totalPrice: cartTotalPrice.toFixed(2), totalProducts: cartTotalProducts})
    localStorage.setItem('@foodexplorer:cart', JSON.stringify(cart))
    const updatedStoredCart = localStorage.getItem('@foodexplorer:cart')
     console.log("Carrinho atualizado", updatedStoredCart)
  }, [cart.products])

  // Adiciona produto ao carrinho

  function addToCart(product, quantity){
    const existingProduct = cart.products.find(item => item.id === product.id)

    if(existingProduct){
      const cartProducts = cart.products.map(item =>
        item.id === product.id
        ? {...item, quantity: item.quantity + quantity}
        : item
      )

      setCart({...cart, products: cartProducts})
    }
    else{
      setCart({...cart, products: [...cart.products, {...product, quantity}]})
    }
  }

  // remove um dos produtos do carrinho

  function removeFromCart(productId){
    const updatedCartProducts = cart.products.filter((item) => item.id !== productId)
    setCart({...cart, products: updatedCartProducts})
  }

  // Modifica a quantidade de um produto do carrinho

  function updateQuantity(productId, quantity){
    const updatedCart = cart.products.map(item =>
      item.id === productId
      ? {...item, quantity}
      : item
    )

    setCart({...cart, products: updatedCart})
  }

  // limpar o carrinho

  function clearCart(){
    setCart({products: [], totalPrice: 0, totalQuantity: 0})
  }

  return(
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
      }}>
        {children}
    </CartContext.Provider>
  )
}

export function useCart(){
  return useContext(CartContext)
}