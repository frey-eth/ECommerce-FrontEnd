import React, { useEffect } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getUserWishList } from "../features/user/userSlice";
import { addToWishList } from "../features/products/productSlice";
import { Link } from "react-router-dom";

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
          {userWishListState && userWishListState?.length > 0 ? (
            userWishListState.map((item, index) => {
              return (
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
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
                      <Link
                        to={`/product/${item._id}`}
                        className="title text-uppercase text-dark"
                      >
                        {item.title}
                      </Link>
                      <h6 className="price">${item.price}</h6>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-12 text-center text-uppercase">
              <h1>Your wishlist is empty.</h1>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default Wishlist;
