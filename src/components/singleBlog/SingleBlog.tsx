import { BrowserRouter as Router, Link } from "react-router-dom"
import {FiChevronRight} from "react-icons/fi"

const SingleBlog = ({img } : {img:string} ) => {

  return (
    <div className="py-5">
        <img className="blog-img w-100 " src={img} alt="not found" />
        <div className="ps-3 pt-3">
        <p className="mb-0 pb-2">May 27, 2021 • 12 Comments</p>
        <h5 className="fw-bold">Important of getting a notifications</h5>
        <p>Sapiente, assumenda suscipit autem ab expedita dignissimos, corrupti iusto nobis ex aperiam cumque reprehenderit consequuntur.</p>
        <Router>
            <Link to="/" className="text-decoration-none text-danger">
                Read More <span><FiChevronRight/></span>
            </Link>
        </Router>
        </div>
    </div>
  )
}

export default SingleBlog