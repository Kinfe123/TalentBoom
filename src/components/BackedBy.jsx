import './Backed.css'

const BackedBy = () => {
  return (
    <div>
        
        <header>
          <h1>
            Reliable Utlilization of
            <span> Resources from Other</span>
          </h1>
          <p>
           We empower the use of the resources for building and helping africa their path to digital technologies.
          </p>
        </header>
        <div className="container">
          <div className="box box-cyan box-push">
            <h2>Google</h2>
            <p>We are backed and supported by Google to develop such power esteem on African Student</p>
            <img src="https://res.cloudinary.com/eskalate/image/upload/c_fill,r_60,w_90/v1/partners/google/logo-sm" width={50} height={50} alt="supervisor" />
          </div>
          <div className="box box-red">
            <h2>Plantnir</h2>
            <p>
              Scans our talent network to create the optimal team for your project
            </p>
            <img src="https://res.cloudinary.com/eskalate/image/upload/c_fill,r_60,w_90/v1/partners/palantir/logo-sm" alt="supervisor" width={50} height={50} />
          </div>
          <div className="box box-bluesh box-push">
            <h2>A2SV</h2>
            <p>Uses data from past projects to provide better delivery estimates</p>
            <img src="https://a2sv.org/logos/logo-blue.png" width={150} height={60} alt="supervisor" />
          </div>
          <div className="box box-blue">
            <h2>Meta</h2>
            <p>Regularly evaluates our talent to ensure quality</p>
            <img src="https://res.cloudinary.com/eskalate/image/upload/c_fill,r_60,w_90/v1/partners/meta/logo-sm" alt="supervisor" />
          </div>
        </div>
      </div>
  )
}
export default BackedBy