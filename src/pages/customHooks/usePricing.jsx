import { useState } from "react";

function usePricing(initialQuantity, initialPrice) {
    const [quantityGoods, setQuantityGoods] = useState(initialQuantity);
    const [finalPrice, setFinalPrice] = useState(0);

    const changeQuantity = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantityGoods(newQuantity);
    };

    // const totalPricing = () => {
    //     return quantityGoods * initialPrice;
    // };

    const totalPrice = quantityGoods * initialPrice;

    const totalPricing = () => {
        return totalPrice;
    };

    const finalPricing = () => {
        const prefixPrice = totalPrice + finalPrice;
        return prefixPrice;
    };

    return {
        quantityGoods,
        changeQuantity,
        totalPricing,
        finalPrice,
    };
}

export default usePricing;

