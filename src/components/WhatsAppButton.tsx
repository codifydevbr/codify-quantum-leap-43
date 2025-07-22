import { BsWhatsapp } from "react-icons/bs";

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = "5564999341815"; // Brasil country code + number
    const message = "Olá! Gostaria de conhecer mais sobre os serviços da Codify.";
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-[pulse_10s_ease-in-out_infinite] hover:animate-none hover:scale-110"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <BsWhatsapp className="w-7 h-7 group-hover:scale-110 transition-transform duration-200" />
      
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-500 opacity-30 animate-[ping_10s_cubic-bezier(0,0,0.2,1)_infinite]" />
    </button>
  );
};

export default WhatsAppButton;