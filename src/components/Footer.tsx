import { MailIcon, PhoneIcon } from "lucide-react";

export function Footer() {
  return (
    <footer className="flex md:justify-between max-md:flex-col max-md:gap-8">
      <div className="w-64">
        <p className="font-medium mb-1 md:mb-4">Instituto Zanolli</p>
        <p className="font-light">
          abobrinha parecis veio de balsa abobrinha parecis veio de balsa a net
          só chegou lá agora
        </p>
      </div>
      <div className="w-64">
        <p className="font-medium mb-1 md:mb-4">Endereço</p>
        <p className="font-light">Rua dos Bobos, nº 0, Centro.</p>
        <p className="font-light">Parecis, Rondônia</p>
      </div>
      <div className="w-64">
        <p className="font-medium mb-1 md:mb-4">Contato</p>
        <p className="font-light flex gap-2 items-center">
          <PhoneIcon size={16} /> Telefone: (69) 99999-9999
        </p>
        <p className="font-light flex gap-2 items-center">
          <MailIcon size={16} />
          Email: institutozanolli@org.com.br
        </p>
      </div>
    </footer>
  );
}
