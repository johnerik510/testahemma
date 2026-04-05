import Image from 'next/image'
import Link from 'next/link'

interface AuthorBylineProps {
  author?: string
  authorTitle?: string
  authorImage?: string
  datePublished?: string
  dateModified?: string
}

export default function AuthorByline({
  author = 'John Erik Johansson',
  authorTitle = 'Grundare & hälsotestexpert',
  authorImage = '/images/john-erik-johansson.jpg',
  datePublished,
  dateModified,
}: AuthorBylineProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr)
    return d.toLocaleDateString('sv-SE', { day: 'numeric', month: 'long', year: 'numeric' })
  }

  return (
    <div className="flex items-center gap-4 py-4 mb-6 border-b border-gray-200">
      <Image
        src={authorImage}
        alt={author}
        width={48}
        height={48}
        className="rounded-full object-cover"
      />
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link href="/om-oss" className="font-semibold text-gray-900 hover:text-teal-700 transition-colors">
            {author}
          </Link>
          <span className="text-gray-400">&middot;</span>
          <span className="text-sm text-gray-500">{authorTitle}</span>
        </div>
        <div className="flex items-center gap-3 text-sm text-gray-500 mt-0.5">
          {datePublished && (
            <span>Publicerad: <time dateTime={datePublished}>{formatDate(datePublished)}</time></span>
          )}
          {dateModified && (
            <span>Uppdaterad: <time dateTime={dateModified}>{formatDate(dateModified)}</time></span>
          )}
        </div>
      </div>
    </div>
  )
}
