import { FaLinkedin, FaXTwitter, FaFacebook, FaWhatsapp, FaPinterest } from "react-icons/fa6";

export default function SocialBar() {
  return (
    <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">

      {[FaLinkedin, FaXTwitter, FaFacebook, FaWhatsapp, FaPinterest].map((Icon, i) => (
        <div
          key={i}
          className="p-3 rounded-full bg-white shadow-md hover:shadow-lg hover:scale-110 transition cursor-pointer"
        >
          <Icon className="text-gray-700 text-lg" />
        </div>
      ))}

    </div>
  );
}