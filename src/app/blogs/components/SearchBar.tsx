"use client"

import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaWhatsapp,
  FaPinterestP,
  FaEnvelope
} from "react-icons/fa6"

type Props = {
  url: string
  title: string
}

export default function ShareBar({ url, title }: Props) {

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodedUrl}&description=${encodedTitle}`,
    email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
  }

  return (

    <div className="flex lg:flex-col gap-3">

      <a
        href={shareLinks.facebook}
        target="_blank"
        className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
      >
        <FaFacebookF size={16} />
      </a>

      <a
        href={shareLinks.twitter}
        target="_blank"
        className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
      >
        <FaXTwitter size={16} />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
      >
        <FaLinkedinIn size={16} />
      </a>

      <a
        href={shareLinks.whatsapp}
        target="_blank"
        className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
      >
        <FaWhatsapp size={16} />
      </a>

      <a
        href={shareLinks.pinterest}
        target="_blank"
        className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
      >
        <FaPinterestP size={16} />
      </a>

      <a
        href={shareLinks.email}
        className="w-10 h-10 flex items-center justify-center border rounded hover:bg-gray-100"
      >
        <FaEnvelope size={16} />
      </a>

    </div>
  )
}

