"use client";

//npm install @emailjs/browser --save

import Image from "next/image";
import Title from "./Title";
import Button from "./Button";

import emailjs from "@emailjs/browser";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    if (name === "" || email === "" || message === "") {
      toast.error("Preencha todos os campos");
      console.log("Preencha todos os campos");
      setIsSending(false);
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_hyr4ka1",
        "template_blx6d28",
        templateParams,
        "zVVxPLIMPYoC7xSA0"
      )
      .then(
        (response) => {
          console.log("Email enviado", response.status, response.text);
          toast.success("Email Enviado!");
          setName("");
          setEmail("");
          setMessage("");
          setIsSending(false);
        },
        (error) => {
          console.log("ERRO: ", error);
          toast.error("Erro ao enviar o Email");
          setIsSending(false);
        }
      );
  };

  return (
    <div className="h-fit 2xl:px-80 xl:px-40 md:px-20 px-10 bg-gray-50 pb-20">
      <Toaster position="top-center" reverseOrder={false} />
      <Title title="Contato" subTitle="Vamos Trabalhar Juntos!" />

      <div className="lg:flex mt-8 lg:mt-20 justify-around text-center">
        <div>
          <h2 className="lg:text-4xl text-2xl font-medium tracking-tighter">
            Fale Comigo
          </h2>
          <div className="rounded-2xl w-full lg:w-[420px] h-[200px] border border-gray-700 flex flex-col justify-center items-center gap-3 mt-8">
            <Image src="/mail.svg" width={25} height={25} alt="mail" />
            <h4 className="text-lg">Email</h4>
            <p className="text-gray-800">Contatotey@outlook.com</p>
            <Link href="mailto:contatotey@outlook.com" className="flex gap-1 font-medium">
              Envie um e-mail
              <Image
                src="/right-arrow.svg"
                width={25}
                height={25}
                alt="arrow"
              />
            </Link>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <h2 className="lg:text-4xl text-2xl font-medium tracking-tighter">
            Me mande seu projeto
          </h2>
          <form
            onSubmit={sendEmail}
            className="flex flex-col items-start gap-4 text-justify pt-6 pb-24"
          >
            <div className="w-full">
              <label htmlFor="name">Nome</label>
              <input
                type="text"
                placeholder="Insira seu nome"
                className="border border-gray-800 w-full rounded-2xl p-4"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={isSending}
              />
            </div>

            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Insira seu Email"
                className="border border-gray-800 w-full rounded-2xl p-4"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={isSending}
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
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                disabled={isSending}
              />
            </div>

            <Button
              title={isSending ? "Enviando" : "Enviar Mensagem"}
              type="submit"
              disabled={isSending}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contato;
