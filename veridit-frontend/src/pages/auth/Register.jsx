import { useState } from "react";
import toast from "react-hot-toast";

import { registerRequest }
from "../../api/authApi";

import {
  Mail,
  Lock,
  User,
  Phone,
  IdCard,
  Eye,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [userType, setUserType] =
    useState("common");
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");

  return (

    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-6">

      <div className="w-full max-w-7xl bg-[#121821] rounded-[32px] overflow-hidden shadow-2xl flex">

        {/* LEFT SIDE */}

        <div className="hidden lg:flex w-[32%] bg-[#001a66] relative flex-col justify-between p-12 text-white">

          <div>

            <div className="w-24 h-24 rounded-3xl border border-white/20 flex items-center justify-center mb-8">

              <ShieldCheck size={52} />

            </div>

            <h1 className="text-6xl font-bold mb-6">
              Veridit
            </h1>

            <p className="text-2xl text-white/80 leading-relaxed">
              Registre-se e comece a proteger o que importa.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-2xl border border-white/20 flex items-center justify-center">
              🔒
            </div>

            <p className="text-lg text-white/70">
              Seus dados estão seguros com a gente.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="flex-1 p-10 lg:p-16 overflow-y-auto max-h-screen">

          {/* HEADER */}

          <div className="flex justify-between items-center mb-12">

            <div>

              <h1 className="text-5xl font-bold text-slate-900 mb-4">
                Criar conta
              </h1>

              <p className="text-xl text-slate-500">
                Preencha os dados abaixo para se cadastrar
              </p>

            </div>

            <button
              type="button"
              className="flex items-center gap-2 text-slate-600"
            >
              🌐 PT
            </button>

          </div>

          {/* FORM */}

          <div className="space-y-7">

            {/* NAME */}

            <div>

              <label className="block mb-3 font-semibold text-slate-800">
                Nome completo
              </label>

              <div className="border rounded-2xl flex items-center px-5 h-16">

                <User className="text-slate-400" />

                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  value={nome}
                  onChange={(e) =>
                    setNome(e.target.value)
                  }
                  className="w-full h-full outline-none px-4"
                />

              </div>

            </div>

            {/* EMAIL */}

            <div>

              <label className="block mb-3 font-semibold text-slate-800">
                E-mail
              </label>

              <div className="border rounded-2xl flex items-center px-5 h-16">

                <Mail className="text-slate-400" />

                <input
                  type="email"
                  placeholder="Digite seu e-mail"
                  value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)
                  }
                  className="w-full h-full outline-none px-4"
                />

              </div>

            </div>

            {/* CPF + PHONE */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* CPF */}

              <div>

                <label className="block mb-3 font-semibold text-slate-800">
                  CPF
                </label>

                <div className="border rounded-2xl flex items-center px-5 h-16">

                  <IdCard className="text-slate-400" />

                  <input
                    type="text"
                    placeholder="000.000.000-00"
                    className="w-full h-full outline-none px-4"
                  />

                </div>

              </div>

              {/* PHONE */}

              <div>

                <label className="block mb-3 font-semibold text-slate-800">
                  Telefone
                </label>

                <div className="border rounded-2xl flex items-center px-5 h-16">

                  <Phone className="text-slate-400" />

                  <input
                    type="text"
                    placeholder="(00) 00000-0000"
                    className="w-full h-full outline-none px-4"
                  />

                </div>

              </div>

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block mb-3 font-semibold text-slate-800">
                Senha
              </label>

              <div className="border rounded-2xl flex items-center px-5 h-16">

                <Lock className="text-slate-400" />

                <input
                  type="password"
                  placeholder="Crie uma senha"
                  value={senha}
                  onChange={(e) =>
                    setSenha(e.target.value)
                  }
                  className="w-full h-full outline-none px-4"
                />
                <Eye className="text-slate-400 cursor-pointer" />

              </div>

            </div>

            {/* CONFIRM PASSWORD */}

            <div>

              <label className="block mb-3 font-semibold text-slate-800">
                Confirmar senha
              </label>

              <div className="border rounded-2xl flex items-center px-5 h-16">

                <Lock className="text-slate-400" />

                <input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmarSenha}
                  onChange={(e) =>
                    setConfirmarSenha(e.target.value)
                  }
                  className="w-full h-full outline-none px-4"
                />

                <Eye className="text-slate-400 cursor-pointer" />

              </div>

            </div>

            {/* USER TYPE */}

            <div>

              <label className="block mb-4 font-semibold text-slate-800">
                Tipo de usuário
              </label>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                {/* COMMON USER */}

                <button
                  type="button"
                  onClick={() => setUserType("common")}
                  className={`
                    rounded-3xl
                    p-6
                    flex
                    items-center
                    gap-5
                    border-2
                    transition

                    ${
                      userType === "common"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200"
                    }
                  `}
                >

                  <User
                    size={36}
                    className="text-blue-600"
                  />

                  <div className="text-left">

                    <h3 className="font-bold text-xl">
                      Usuário comum
                    </h3>

                    <p className="text-slate-500">
                      Para uso pessoal
                    </p>

                  </div>

                </button>

                {/* LAWYER */}

                <button
                  type="button"
                  onClick={() => setUserType("lawyer")}
                  className={`
                    rounded-3xl
                    p-6
                    flex
                    items-center
                    gap-5
                    border-2
                    transition

                    ${
                      userType === "lawyer"
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200"
                    }
                  `}
                >

                  <Briefcase
                    size={36}
                    className="text-slate-500"
                  />

                  <div className="text-left">

                    <h3 className="font-bold text-xl">
                      Advogado
                    </h3>

                    <p className="text-slate-500">
                      Para profissionais
                    </p>

                  </div>

                </button>

              </div>

            </div>

            {/* OAB */}

            {
              userType === "lawyer" && (

                <div>

                  <label className="block mb-3 font-semibold text-slate-800">
                    Número da OAB
                  </label>

                  <div className="border rounded-2xl flex items-center px-5 h-16">

                    <IdCard className="text-slate-400" />

                    <input
                      type="text"
                      placeholder="Digite seu número da OAB"
                      className="w-full h-full outline-none px-4"
                    />

                  </div>

                </div>

              )
            }

            {/* TERMS */}

            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                className="w-5 h-5"
              />

              <p className="text-slate-500">

                Li e concordo com os

                <span className="text-blue-600">
                  {" "}Termos de Uso{" "}
                </span>

                e

                <span className="text-blue-600">
                  {" "}Política de Privacidade
                </span>

              </p>

            </div>

            {/* BUTTON */}

            <button
              onClick={async () => {

                try {

                  if (
                    !nome ||
                    !email ||
                    !senha
                  ) {

                    toast.error(
                      "Preencha todos os campos"
                    );

                    return;
                  }

                  if (
                    senha !== confirmarSenha
                  ) {

                    toast.error(
                      "As senhas não coincidem"
                    );

                    return;
                  }

                  await registerRequest(
                    nome,
                    email,
                    senha
                  );

                  toast.success(
                    "Conta criada com sucesso"
                  );

                  navigate("/");

                } catch (error) {

                  toast.error(
                    error.message
                  );

                }

              }}
              className="w-full h-16 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white text-2xl font-semibold transition"
            >
              Cadastrar
            </button>

            {/* LOGIN */}

            <p className="text-center text-slate-500 text-lg">

              Já tem uma conta?

              <Link
                to="/"
                className="text-blue-600 font-semibold ml-2"
              >
                Entrar
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}