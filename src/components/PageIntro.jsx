export default function PageIntro({ eyebrow, title, description }) {
  return <div className="page-intro"><span className="page-eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p></div>
}
