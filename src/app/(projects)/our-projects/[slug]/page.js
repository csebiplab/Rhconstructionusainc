export default function Page({ params }) {
    return <div className="container">My Post: {params.slug}</div>
}