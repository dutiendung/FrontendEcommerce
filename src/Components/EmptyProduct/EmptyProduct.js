function EmptyProduct({ title, subTitle }) {
  return (
    <div className="text-center my-5">
      <h2>{title}</h2>
      <img alt="" src={require("../../assets/images/EmptyProduct.png")} />
      <h4>{subTitle}</h4>
    </div>
  );
}

export default EmptyProduct;
