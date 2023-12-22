import React, { useEffect, useState } from "react";
import { BreadCrumb } from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlog } from "../features/blog/blogSlice";
import { getBlogCategory } from "../features/blogCategory/blogCategorySlice";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllBlog());
    dispatch(getBlogCategory());
  }, []);

  const blogState = useSelector((state) => state.blog.blogs);
  const blogCategoryState = useSelector(
    (state) => state.blogCategory.blogCategories
  );

  // State to track the selected blog category
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to filter blogs based on the selected category title
  const filterBlogsByCategory = (category) => {
    setSelectedCategory(category === "All" ? null : category);
  };

  // Filtered blogs based on the selected category title
  const filteredBlogs = selectedCategory
    ? blogState.filter((blog) => blog.category === selectedCategory)
    : blogState;

  return (
    <>
      <BreadCrumb title="Blogs" />
      <Container class1="blog-wrapper home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="filter-card mb-3">
              <h3 className="filter-title">Blog Categories</h3>
              <ul className="ps-0">
                <li
                  onClick={() => filterBlogsByCategory("All")}
                  className={!selectedCategory ? "active" : ""}
                >
                  All
                </li>
                {blogCategoryState.map((category, index) => (
                  <li
                    key={index}
                    onClick={() => filterBlogsByCategory(category.title)}
                    className={
                      category.title === selectedCategory ? "active" : ""
                    }
                  >
                    {category.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-9 mb-3">
            <div className="d-flex flex-wrap">
              {filteredBlogs.map((blog, index) => (
                <div key={index}>
                  <BlogCard data={blog} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
