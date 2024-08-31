import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-100 py-8">
    <div className="container mx-auto px-4">
      <div className="flex flex-col lg:flex-row lg:justify-between">
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">CineStream</h2>
          <p className="text-gray-400 mb-4">
            Rua 1234, Cidade, Estado, 12345
          </p>
          <p className="text-gray-400 mb-4">
            E-mail:{" "}
            <a
              href="mailto:info@suaempresa.com"
              className="text-gray-300 hover:underline"
            >
              info@suaempresa.com
            </a>
          </p>
          <p className="text-gray-400">
            Telefone:{" "}
            <a
              href="tel:+1234567890"
              className="text-gray-300 hover:underline"
            >
              +1 (234) 567-890
            </a>
          </p>
        </div>

        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h2 className="text-xl font-bold mb-4">Links Rápidos</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-300 hover:underline">
                Início
              </a>
            </li>
            <li>
              <a href="/about" className="text-gray-300 hover:underline">
                Sobre Nós
              </a>
            </li>
            <li>
              <a href="/services" className="text-gray-300 hover:underline">
                Serviços
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-300 hover:underline">
                Contato
              </a>
            </li>
            <li>
              <a href="/privacy" className="text-gray-300 hover:underline">
                Política de Privacidade
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Siga-nos</h2>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="text-gray-400 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-400 hover:text-white"
              aria-label="Twitter"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-400 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
        <p>© 2024 CineStream. Todos os direitos reservados.</p>
        <p className="mt-2">
          <a href="/privacy" className="text-gray-300 hover:underline">
            Política de Privacidade
          </a>{" "}
          |{" "}
          <a href="/terms" className="text-gray-300 hover:underline">
            Termos de Serviço
          </a>
        </p>
      </div>
    </div>
  </footer>

  );
}
