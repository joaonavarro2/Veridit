import { useEffect, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { useNavigate } from "react-router-dom";
import { getPacotes } from "../../api/paymentApi";

export default function BuyCredits() {

  const navigate = useNavigate();

  const [packages, setPackages] =
    useState([]);

  useEffect(() => {

    async function loadPacotes() {

      try {

        const data =
          await getPacotes();

        setPackages(data);

      } catch (error) {

        console.error(
          "Erro:",
          error
        );

      }

    }

    loadPacotes();

  }, []);

  return (

    <DashboardLayout>

      {/* HEADER */}

      <div className="mb-10">

        <h1 className="text-5xl font-bold text-white">
          Buy Credits
        </h1>

        <p className="text-slate-400 mt-3 text-xl">
          Choose the best package for your recordings.
        </p>

      </div>

      {/* PACOTES */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {packages.map((item) => (

          <div
            key={item.id}
            className="
              bg-[#151821]
              border
              border-[#232834]
              rounded-3xl
              shadow-xl
              p-8
              flex
              flex-col
              justify-between
              hover:border-blue-500
              hover:bg-[#1a1f2b]
              transition-all
              duration-200
              min-h-[340px]
            "
          >

            {/* TOPO */}

            <div>

              <h2 className="text-4xl font-bold text-white">
                {item.nome}
              </h2>

              <p className="text-slate-400 mt-4 text-lg">
                {item.quantidade_creditos} Créditos
              </p>

              <p className="text-slate-500 mt-2">
                {item.descricao}
              </p>

            </div>

            {/* PREÇO */}

            <div className="my-8">

              <p className="text-6xl font-bold text-white">
                R$ {item.preco}
              </p>

            </div>

            {/* BOTÃO */}

            <button
              onClick={() =>
                navigate(
                  "/billing",
                  {
                    state: {
                      pacote: item
                    }
                  }
                )
              }
              className="
                w-full
                bg-blue-600
                hover:bg-blue-700
                text-white
                text-lg
                font-semibold
                p-4
                rounded-2xl
                transition-all
                duration-200
              "
            >
              Selecionar Pacote
            </button>

          </div>

        ))}

      </div>

    </DashboardLayout>

  );

}