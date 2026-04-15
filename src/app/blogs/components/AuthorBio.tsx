import { BlogAuthor } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Globe, Mail } from "lucide-react";

interface AuthorBioProps {
  author: string;
  authorDetails?: BlogAuthor;
}

export default function AuthorBio({ author, authorDetails }: AuthorBioProps) {
  if (!authorDetails) {
    return (
      <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">About {author}</h3>
        <p className="text-gray-600 text-sm">
          Expert in SEO and digital marketing strategies.
        </p>
      </div>
    );
  }
  
  return (
    <div className="mt-12 p-6 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-100">
      <div className="flex items-start gap-4">
        {authorDetails.avatar && (
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={authorDetails.avatar}
              alt={authorDetails.name}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">
            Written by {authorDetails.name}
          </h3>
          <p className="text-gray-600 text-sm mt-1">{authorDetails.bio}</p>
          
          <div className="flex gap-3 mt-3">
            {authorDetails.twitter && (
              <Link href={authorDetails.twitter} target="_blank" className="text-gray-400 hover:text-[#1DA1F2] transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
            )}
            {authorDetails.linkedin && (
              <Link href={authorDetails.linkedin} target="_blank" className="text-gray-400 hover:text-[#0077B5] transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            )}
            {authorDetails.website && (
              <Link href={authorDetails.website} target="_blank" className="text-gray-400 hover:text-[#2C727B] transition-colors">
                <Globe className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}