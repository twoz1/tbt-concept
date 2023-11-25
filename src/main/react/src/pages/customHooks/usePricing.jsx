import { useState } from "react";

// local storage 구현 후에 수정 예정

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

