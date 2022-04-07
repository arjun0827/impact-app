import SingleBlog from "../singleBlog/SingleBlog";
import './BlogPost.css'

const BlogPost = () => {
  return (
    <div className="py-5">
      <div className="container py-5">
        <div className="text-center">
          <h3 className="fw-bold">Blog Posts</h3>
          <div className="d-flex justify-content-center">
            <p className="blog-post-subhead">
              Sapiente, assumenda suscipit autem ab expedita dignissimos,
              corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-4 px-4">
            <SingleBlog img="/img/post_2.jpg" />
          </div>
          <div className="col-md-4 px-4">
            <SingleBlog img="/img/post_3.jpg" />
          </div>
          <div className="col-md-4 px-4">
            <SingleBlog img="/img/post_4.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
