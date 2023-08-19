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

    return {
        quantityGoods,
        changeQuantity,
        totalPricing,
    };
}

export default usePricing;