
const StoreItem = ({ branchName, storeAdress }) => {
    return (
        <li>
            <strong>TBT concept {branchName}점</strong>
            <p>
                {storeAdress}
            </p>
        </li>
    );
}

export default StoreItem;