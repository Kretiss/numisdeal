import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <>
      <p>Not found</p>
      <Link to="/" className="hover:text-blue-600">
        Go back
      </Link>
    </>
  )
}

export default NotFound
