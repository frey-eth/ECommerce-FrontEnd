import React, { useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishList } from "../features/user/userSlice";
import { addToWishList } from "../features/products/productSlice";
import Loading from "../components/Loading";

const Wishlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserWishList());
  }, []);
  const userWishListState = useSelector(
    (state) => state.auth.wishlist?.wishlist
  );

  return (
    <>
      <BreadCrumb title="Favorite List" />
      <Container class1="wishlist-wrapper home-wrapper-2 py-5">
        <div className="row">
          {userWishListState ? (
            userWishListState.map((item, index) => {
              return (
                <div className="col-3">
                  <div className="wishlist-card position-relative" key={index}>
                    <img
                      src="/images/cross.svg"
                      alt="cross"
                      className="cross img-fluid position-absolute"
                      onClick={() => {
                        dispatch(addToWishList(item._id)).then(() =>
                          setTimeout(() => {
                            dispatch(getUserWishList());
                          }, 300)
                        );
                      }}
                    />
                    <div className="wishlist-card-image">
                      <img
                        src={item.images[0].url}
                        alt="watch"
                        className="img-fluid w-100"
                      />
                    </div>
                    <div className="px-2 py-3">
                      <h5 className="title">{item.title}</h5>
                      <h6 className="price">${item.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
