<ul className="new_glass_img">
    {newGoodsSunglassList.slice(16, 20).map((item) => (
        <Link to={`/detail/${item.id}`} key={item.id}>
            <li>
                <img src={`${item.imageFront}`} alt="상품 사진" />
            </li>
        </Link>
    ))}
</ul>;
