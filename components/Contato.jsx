import Image from "next/image";
import Title from "./Title";
import Button from "./Button";

const Contato = () => {
  return (
    <div className="h-fit 2xl:px-80 xl:px-40 md:px-20 px-10 bg-gray-50 pb-20">
      <Title title="Contato" subTitle="Vamos Trabalhar Juntos!" />

      <div className="sm:flex mt-8 sm:mt-20 justify-around text-center">
        <div>
          <h2 className="text-4xl">Fale Comigo</h2>
          <div className="rounded-2xl w-full sm:w-[420px] h-[200px] border border-gray-700 flex flex-col justify-center items-center gap-3 mt-8">
            <Image src="/mail.svg" width={25} height={25} alt="mail" />
            <h4 className="text-lg">Email</h4>
            <p className="text-gray-800">Contatotey@outlook.com</p>
            <button className="flex gap-1 font-medium">
              Envie um e-mail
              <Image
                src="/right-arrow.svg"
                width={25}
                height={25}
                alt="arrow"
              />
            </button>
          </div>
        </div>

        <div className="mt-8 sm:mt-0">
          <h2 className="text-4xl">Me mande seu projeto</h2>
          <form action="" className="flex flex-col items-start gap-4 text-justify pt-6">

            <div className="w-full">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Insira seu nome"
                className="border border-gray-800 w-full rounded-2xl p-4"
              />
            </div>

            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Insira seu Email"
                className="border border-gray-800 w-full rounded-2xl p-4"
              />
            </div>

            <div className="w-full">
              <label htmlFor="desc">Descrição</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Insira sua mensagem"
                className="border border-gray-800 w-full rounded-2xl p-4"
              />
            </div>

            <Button title="Enviar Mensagem" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
