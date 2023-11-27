
const StoreItem = ({ branchName, storeAdress, storeSrc, setStoreMap }) => {
    return (
        <li>
            <strong onClick={() => setStoreMap(storeSrc)}>TBT concept {branchName}점</strong>
            <p>
                {storeAdress}
            </p>
        </li>
    );
}

export default StoreItem;