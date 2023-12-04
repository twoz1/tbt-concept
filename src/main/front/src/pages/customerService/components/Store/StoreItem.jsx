
const StoreItem = ({ store_id, store_x, store_y, store_address, store_address_detail, store_tel, setInfoName, setStoreMap }) => {

    const settingMap = () => {
        setStoreMap({ x: store_x, y: store_y });
        setInfoName(store_id);
    }
    return (
        <li>
            <strong onClick={settingMap}>TBT concept {store_id}점</strong>
            <p>TEL : {store_tel}</p>
            <p>
                {store_address} {store_address_detail}
            </p>
        </li >
    );
}

export default StoreItem;