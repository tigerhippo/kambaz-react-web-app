import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div
        id="wd-dashboard-courses"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginLeft: "60px",
          gap: "100px",
        }}
      >
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/reactjs.jpg" width={250} height={150} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/angularjs.jpg" width={250} height={150} />
            <div>
              <h5> CS1239 Angular JS </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use Angular.js{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/vuejs.jpg" width={250} height={150} />
            <div>
              <h5> CS1240 Vue JS </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use Vue.js{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/jQuery.jpg" width={250} height={150} />
            <div>
              <h5> CS1238 jQuery </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use jQuery{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/nodejs.jpg" width={250} height={150} />
            <div>
              <h5> CS1235 Node JS </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use Node.js{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/nextjs.jpg" width={250} height={150} />
            <div>
              <h5> CS1236 Next JS </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use Next.js{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/nuxtjs.jpg" width={250} height={150} />
            <div>
              <h5> CS1237 Nuxt JS </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use Nuxt.js{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/D3js.jpg" width={250} height={150} />
            <div>
              <h5> CS1241 D3 JS </h5>
              <p className="wd-dashboard-course-title">
                Learning how to use D3.js{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
