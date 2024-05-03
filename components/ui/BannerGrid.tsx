import type { ImageWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";
import TableIsland from "../../islands/TableIsland.tsx";

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Props {
  /**
   * @format rich-text
   * @default Click here to tweak this text however you want.
   */
  title?: string;
  /**
   * @default This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.
   */
  description?: string;
  image?: ImageWidget;
  placement?: "left" | "right";
  cta?: CTA[];
}

const PLACEMENT = {
  left: "flex-col text-left lg:flex-row-reverse",
  right: "flex-col text-left lg:flex-row",
};

export default function BannerGrid({
  title = "Click here to tweak this text however you want.",
  description =
    "This text is fully editable and ready for your personal touch. Just click here, head over to the section window, or dive straight into the code to make changes as you see fit. Whether it's about the content, formatting, font, or anything in between, editing is just a click away.",
  image,
  placement = "left",
  cta = [
    { id: "change-me-1", href: "/", text: "Change me", outline: false },
    { id: "change-me-2", href: "/", text: "Change me", outline: true },
  ],
}: Props) {
  return (
    <div className="bg-[#04132C]">
      <img
        className="flex absolute z-0 top-0 right-0"
        src="/image/bg-circles1.png"
        alt="background"
      />
      <img
        className="flex absolute z-0 bottom-0 left-0"
        src="/image/bg-circles2.png"
        alt="background"
      />
      <div className=" relative  text-white h-full min-h-screen w-full flex flex-col items-center gap-4 justify-center p-4 text-center">
        <img src="/image/logo-csb.png" alt="Csb Logo" />

    
        <span>
          Prezados(as){" "}
          <strong className="text-[#97DAC1] font-semibold">Rodrigo</strong>,
        </span>
        <span>
          Seja bem-vindo(a) à inscrição da turma{" "}
          <strong className="text-[#97DAC1] font-semibold text-lg">
            2024B
          </strong>{" "}
          da escola{" "}
          <strong className="text-[#97DAC1] font-semibold text-lg">
            Alda Bernardo
          </strong>{" "}
          no projeto Circuito STEAM São Bernardo do Campo!
        </span>
        <span>
          Estamos animados em tê-los conosco nessa jornada de descobertas. Para
          garantir que sua turma receba um dos temas mais alinhados com seus
          interesses, pedimos que informe a ordem de preferência dos temas
          disponíveis.
        </span>
        <span>
          Classifique os temas de 1 a 6, sendo 1 o de maior interesse e 6 o de
          menor:
        </span>

        <TableIsland />

        <span>
          A disponibilidade dos temas é limitada, com cerca de 1000 kits cada.
          Caso o tema de maior preferência tenha uma procura maior que a
          quantidade disponível, faremos o possível para atribuir um dos temas
          seguintes na ordem indicada.
        </span>
        <span>
          Ao preencher este formulário, você dá um passo importante para
          garantir uma experiência enriquecedora e emocionante para sua turma no
          universo STEAM. Estamos ansiosos para embarcar nessa aventura e ver o
          brilho nos olhos de cada estudante ao explorar o tema escolhido.
        </span>
        <span>
          Vamos juntos construir um futuro mais criativo, inovador e inspirador!
        </span>
        <span className="text-[#4F94D9] font-semibold text-xl">
          Equipe Circuito STEAM Brasil
        </span>
      </div>
    </div>
  );
}
