import {
  ButtonModal,
  BodyModalStyled,
  HeaderModalStyled,
  InputModalStyled,
} from "./styles";

import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "react-modal";

import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";

import { IoClose } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

import { api } from "../../../../services/api";
import toast, { Toaster } from "react-hot-toast";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    padding: 0,
    border: 0,
    borderRadius: 30,
    width: "100%",
    maxWidth: "700px",
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
export function ModalCreateUser() {
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const [formData, setFormData] = useState({
    nome: "",
    dataNascimento: "",
    logradouro: "",
    uf: "",
    cpf: "",
    cep: "",
    bairro: "",
    localidade: "",
  });

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    api.get(`${formData.cep}/json`).then((response) => {
      setFormData({ ...formData, ...response.data });
    });
  });

  const saveStorage = (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();

    if (
      formData.nome.trim() === "" ||
      formData.dataNascimento.trim() === "" ||
      formData.logradouro.trim() === "" ||
      formData.uf.trim() === "" ||
      formData.cpf.trim() === "" ||
      formData.cep.trim() === "" ||
      formData.bairro.trim() === "" ||
      formData.localidade.trim() === ""
    ) {
      toast.error("Preencha todos os campos");
      return;
    }
    localStorage.setItem(
      "TesteFrontEnd",
      JSON.stringify({
        formData,
      })
    );
    document.cookie = `TesteFrontEnd=${JSON.stringify({
      formData,
    })}`;
    toast.success(
      `Seja bem-vindo: ${formData.nome}, seu cadastro foi efetuado com sucesso!`,
      {
        style: {
          border: "1px solid #aad362",
          height: "100%",
          padding: "16px",
          color: "#161d52",
        },
      }
    );
  };

  return (
    <div>
      <ButtonModal onClick={openModal}>REGISTRAR</ButtonModal>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <HeaderModalStyled>
          <div>
            <FaUserAlt size={"22px"} />
            <h2>Criar Usuário</h2>
          </div>
          <button onClick={closeModal}>
            <IoClose size={"25px"} />
          </button>
        </HeaderModalStyled>

        <BodyModalStyled>
          <h2>Dados do seu usuário</h2>
          <form onSubmit={saveStorage}>
            <InputModalStyled>
              <div>
                <Input
                  onChange={handleInputChange}
                  type="text"
                  name="nome"
                  mask=""
                  placeholder="Informe o seu Nome..."
                />

                <Input
                  onChange={handleInputChange}
                  name="cpf"
                  mask="999.999.999-99"
                  placeholder="Informe seu CPF..."
                />

                <Input
                  onChange={handleInputChange}
                  type="date"
                  name="dataNascimento"
                  mask=""
                  placeholder="Informe a sua data de nascimento..."
                />

                <Input
                  onChange={handleInputChange}
                  name="cep"
                  mask="99999-999"
                  placeholder="Informe o CEP..."
                />
              </div>

              <div>
                <Input
                  onChange={handleInputChange}
                  type="text"
                  name="logradouro"
                  mask=""
                  placeholder="Informe o  seu Logradouro..."
                  defaultValue={formData.logradouro}
                />

                <Input
                  onChange={handleInputChange}
                  type="text"
                  name="uf"
                  mask=""
                  placeholder="Estado(UF)"
                  defaultValue={formData.uf}
                />

                <Input
                  onChange={handleInputChange}
                  name="bairro"
                  mask=""
                  placeholder="Informe o  seu Bairro..."
                  defaultValue={formData.bairro}
                />

                <Input
                  onChange={handleInputChange}
                  type="text"
                  name="localidade"
                  mask=""
                  placeholder="Informe a sua Cidade..."
                  defaultValue={formData.localidade}
                />
              </div>
            </InputModalStyled>
            <Button>Criar Usuário</Button>
            <Toaster position="top-center" reverseOrder={false} />
          </form>
        </BodyModalStyled>
      </Modal>
    </div>
  );
}
