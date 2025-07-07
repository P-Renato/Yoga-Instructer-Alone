import { useContext } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { blogContext } from "./BlogContext";
import "../App.css";
import "./styles/BlogContent.css"


function BlogContent() {
  const { id } = useParams();

  // open the context
  const {blogs} = useContext(blogContext)
  const foundBlog = blogs.find((b) => String(b.id) === id);
  const remainingBlogs = blogs.filter(b => String(b.id) !== id).slice(0,3);
  const remainingCategories = blogs.filter(b => String(b.id) !== id);

  return (
    <div className="bg-color">
      <main className="blog-content" key={foundBlog.id}>
        <h2>{foundBlog.title}</h2>
        <p>{foundBlog.createdDay}</p>
        <p>{foundBlog.category}</p>
        <img src={foundBlog.img} alt="Image" />
      </main>
      <section className="info-section">
        <h3>Header {foundBlog.id}</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.</p>
        <ul>
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Donec ullamcorper mattis lorem non.</li>
          <li>Ultrices praesent amet ipsum justo massa. </li>
          <li>Eu dolor aliquet risus gravida nunc at feugiat consequat purus.</li>   
        </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus. Non massa enim vitae duis mattis. Vel in ultricies vel fringilla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Ultrices praesent amet ipsum justo massa. Eu dolor aliquet risus gravida nunc at feugiat consequat purus.</p>
      </section>
      <section className="icons">
        <svg width="142" height="35" viewBox="0 0 142 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M63.775 30.0417C65.9 31.3542 68.45 32.0834 71 32.0834C78.7917 32.0834 85.1667 25.5209 85.1667 17.5001C85.1667 9.47925 78.7917 2.91675 71 2.91675C63.2084 2.91675 56.8334 9.47925 56.8334 17.5001C56.8334 20.1251 57.5417 22.6042 58.675 24.7917L57.2624 30.3848C57.0728 31.1354 57.7714 31.8075 58.5141 31.5891L63.775 30.0417Z" stroke="#383736" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M77.375 21.6541C77.375 21.8903 77.3239 22.1331 77.2154 22.3694C77.1068 22.6056 76.9664 22.8288 76.7812 23.0388C76.4684 23.3931 76.1236 23.6491 75.7342 23.8131C75.3511 23.9772 74.9361 24.0625 74.4892 24.0625C73.8379 24.0625 73.142 23.905 72.4078 23.5834C71.6736 23.2619 70.9393 22.8288 70.2115 22.2841C69.4773 21.7328 68.7814 21.1225 68.1174 20.4466C67.4598 19.7641 66.866 19.0488 66.3361 18.3006C65.8125 17.5525 65.3911 16.8044 65.0847 16.0628C64.7782 15.3147 64.625 14.5994 64.625 13.9169C64.625 13.4706 64.7016 13.0441 64.8548 12.6503C65.0081 12.25 65.2507 11.8825 65.5891 11.5544C65.9977 11.1409 66.4446 10.9375 66.9171 10.9375C67.0958 10.9375 67.2746 10.9769 67.4342 11.0556C67.6002 11.1344 67.7471 11.2525 67.862 11.4231L69.3432 13.5691C69.4581 13.7331 69.5411 13.8841 69.5986 14.0284C69.656 14.1663 69.688 14.3041 69.688 14.4288C69.688 14.5863 69.6433 14.7437 69.5539 14.8947C69.4709 15.0456 69.3496 15.2031 69.1964 15.3606L68.7111 15.8791C68.6409 15.9512 68.609 16.0366 68.609 16.1416C68.609 16.1941 68.6154 16.24 68.6281 16.2925C68.6473 16.345 68.6664 16.3844 68.6792 16.4237C68.7941 16.6403 68.9921 16.9225 69.273 17.2638C69.5603 17.605 69.8667 17.9528 70.1987 18.3006C70.5435 18.6484 70.8755 18.97 71.2139 19.2653C71.5459 19.5541 71.8204 19.7509 72.0375 19.8691C72.0694 19.8822 72.1077 19.9019 72.1524 19.9216C72.2035 19.9412 72.2546 19.9478 72.312 19.9478C72.4206 19.9478 72.5036 19.9084 72.5738 19.8363L73.059 19.3441C73.2186 19.18 73.3719 19.0553 73.5187 18.9766C73.6656 18.8847 73.8124 18.8387 73.972 18.8387C74.0933 18.8387 74.221 18.865 74.3615 18.9241C74.5019 18.9831 74.6488 19.0684 74.8084 19.18L76.9217 20.7222C77.0877 20.8403 77.2026 20.9781 77.2728 21.1422C77.3367 21.3062 77.375 21.4703 77.375 21.6541Z" stroke="#383736" stroke-width="1.5" stroke-miterlimit="10"/>
          <path d="M12.75 32.0834H21.25C28.3334 32.0834 31.1667 29.1667 31.1667 21.8751V13.1251C31.1667 5.83341 28.3334 2.91675 21.25 2.91675H12.75C5.66671 2.91675 2.83337 5.83341 2.83337 13.1251V21.8751C2.83337 29.1667 5.66671 32.0834 12.75 32.0834Z" stroke="#383736" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M17 22.6041C19.7384 22.6041 21.9583 20.3189 21.9583 17.4999C21.9583 14.681 19.7384 12.3958 17 12.3958C14.2615 12.3958 12.0416 14.681 12.0416 17.4999C12.0416 20.3189 14.2615 22.6041 17 22.6041Z" stroke="#383736" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M24.9845 10.2084H25.0009" stroke="#383736" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M125 2.91675C117.18 2.91675 110.833 9.45008 110.833 17.5001C110.833 25.5501 117.18 32.0834 125 32.0834C132.82 32.0834 139.167 25.5501 139.167 17.5001C139.167 9.45008 132.82 2.91675 125 2.91675ZM128.768 20.023L126.955 21.1022L125.142 22.1813C122.804 23.5667 120.892 22.4292 120.892 19.6584V17.5001V15.3417C120.892 12.5563 122.804 11.4334 125.142 12.8188L126.955 13.898L128.768 14.9772C131.106 16.3626 131.106 18.6376 128.768 20.023Z" fill="#383736"/>
        </svg>
      </section>
      <p className="readMore">Read more Blogs</p>
      <section className="more-blogs">
        
        {remainingBlogs.map(blg =>(
          <nav className="other-blogs" key={blg.id}>
          <img src={blg.img} alt="blog-image" />
          <h3>{blg.title}</h3>
          <p>Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem.</p>
          <NavLink className="read-more" to={`/blog-content/${blg.id}`} key={blg.id}>Read more...</NavLink>
          <hr />
        </nav>
        ))}
      </section>

      {remainingCategories.map(blog => (
        <section className="category-section-header">
          <p className="readMore">{blog.category}</p>
            <section className="category-section">
              <svg className="my-icon left-icon" viewBox="0 0 38 40" preserveAspectRatio="xMidYMid meet">


                <g filter="url(#filter0_d_451_302)">
                <path d="M4.5 16.5L33.75 32.0885V0.911543L4.5 16.5Z" fill="#E6DFDA"/>
                </g>
                <defs>
                <filter id="filter0_d_451_302" x="0.5" y="0.911621" width="37.25" height="39.1768" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_451_302"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_451_302" result="shape"/>
                </filter>
                </defs>
              </svg>

              <nav className="category-blogs">
              <img src={blog.img} alt="" />
              <p>{blog.createdDay}</p>
              <h4>{blog.title}</h4>
              <NavLink className="read-more">Read more...</NavLink>
            </nav>
           <nav className="category-blogs">
              <img src={blog.img} alt="" />
              <p>{blog.createdDay}</p>
              <h4>{blog.title}</h4>
              <NavLink className="read-more">Read more...</NavLink>
            </nav>
            <nav className="category-blogs">
              <img src={blog.img} alt="" />
              <p>{blog.createdDay}</p>
              <h4>{blog.title}</h4>
              <NavLink className="read-more">Read more...</NavLink>
            </nav>
            <svg className="my-icon right-icon" viewBox="0 0 38 40" preserveAspectRatio="xMidYMid meet">

              <g filter="url(#filter0_d_451_312)">
              <path d="M34 16L4.75 0.411545L4.75 31.5885L34 16Z" fill="#E6DFDA"/>
              </g>
              <defs>
              <filter id="filter0_d_451_312" x="0.75" y="0.411621" width="37.25" height="39.1768" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
              <feOffset dy="4"/>
              <feGaussianBlur stdDeviation="2"/>
              <feComposite in2="hardAlpha" operator="out"/>
              <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_451_312"/>
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_451_312" result="shape"/>
              </filter>
              </defs>                   
            </svg>

            </section>
          
        </section>
      ))}

    </div>
  )
}

export default BlogContent


