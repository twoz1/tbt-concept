import { useState } from "react";

function usePricing(initialQuantity, initialPrice) {
    const [quantityGoods, setQuantityGoods] = useState(initialQuantity);
    const [finalPrice, setFinalPrice] = useState(0);

    const changeQuantity = (e) => {
        const newQuantity = parseInt(e.target.value);
        setQuantityGoods(newQuantity);
    };

    const totalPricing = () => {
        return quantityGoods * initialPrice;
    };


    const finalPricing = () => {
        const currentTotal = totalPricing();
        setFinalPrice(finalPrice => finalPrice + currentTotal);
        return finalPrice + currentTotal;
    };

    return {
        quantityGoods,
        changeQuantity,
        totalPricing,
        finalPricing,
    };
}

export default usePricing;