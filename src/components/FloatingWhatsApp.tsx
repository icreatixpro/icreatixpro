"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X, Send, Phone, Clock } from "lucide-react"

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [message, setMessage] = useState("")
  const [lastScrollY, setLastScrollY] = useState(0)

  const phoneNumber = "+447348153162"
  const whatsappUrl = `https://wa.me/${447348153162}?text=${encodeURIComponent(message || "Hi! I'm interested in your SEO services. Can you help me grow my business?")}`

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 300) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      setLastScrollY(window.scrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  const quickMessages = [
    "I need SEO services",
    "Google Ads inquiry",
    "Website development",
    "Free consultation",
    "Pricing plans"
  ]

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
      }`}
    >
      <div className="absolute inset-0 rounded-full animate-ping bg-[#25D366] opacity-30" />
      <div className="absolute inset-0 rounded-full animate-pulse bg-[#25D366] opacity-20" />
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6 text-white" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          </>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-slideUp">
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Chat with us</h3>
                <p className="text-xs text-white/80">Typically replies in 5min</p>
              </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-b border-gray-100">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-gray-600">
                <Clock className="w-3 h-3" />
                <span>Mon-Fri: 9AM-6PM</span>
              </div>
              <div className="flex items-center gap-1 text-gray-600">
                <Phone className="w-3 h-3" />
                <span>+447348153162</span>
              </div>
            </div>
          </div>

          <div className="p-4 border-b border-gray-100">
            <p className="text-xs text-gray-500 mb-2">Quick replies:</p>
            <div className="flex flex-wrap gap-2">
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => setMessage(msg)}
                  className="text-xs px-3 py-1.5 bg-gray-100 hover:bg-[#25D366]/10 hover:text-[#25D366] rounded-full transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full p-3 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-[#25D366] resize-none"
              rows={3}
            />
            
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 w-full py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
            >
              <Send className="w-4 h-4" />
              Send Message
            </a>
          </div>

          <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
            <p className="text-[10px] text-gray-400">
              We respond within 24 hours on business days
            </p>
          </div>
        </div>
      )}
    </div>
  )
}