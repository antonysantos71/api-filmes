import { Footer } from "../../components/footer";
import { NavBar } from "../../components/navbar";

export function AboutPage() {
  return (
    <>
    <NavBar/>
      <div className="max-w-4xl mx-auto p-6 bg-zinc-800 shadow-md rounded-lg m-5">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Sobre Nós</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Bem-vindo à nossa aplicação de filmes! CineStream, Somos apaixonados por cinema e criamos esta aplicação para ajudar você a explorar e descobrir filmes incríveis. Aqui você pode encontrar uma vasta coleção de filmes, obter detalhes sobre cada um deles e muito mais.
      </p>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Nossa missão é fornecer uma experiência de usuário intuitiva e agradável, onde você possa encontrar facilmente o que procura. Estamos sempre trabalhando para melhorar nossa aplicação e adicionar novos recursos para oferecer a melhor experiência possível.
      </p>
      <p className="text-gray-700 dark:text-gray-300">
        Se você tiver sugestões ou feedback, não hesite em entrar em contato conosco. Agradecemos por usar nossa aplicação e esperamos que você a encontre útil e divertida!
      </p>
    </div>
    <Footer/>
    </>
  );
}
