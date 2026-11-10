export type Feature = {
  title: string;
  description: string;
};

export const appConfig = {
  name: "Workfit",
  description:
    "Uma página onde o seu personal e o seu nutricionista podem te mandar os seus treinos e dieta. Você consegue fazer um acompanhamento da evolução do seu treino, e é super intuitivo.",
  emoji: "💪",
  accent: "#16a34a",
  upcomingFeatures: [
    {
      title: "Treinos do personal",
      description: "Seu personal envia o plano de treino e você vê os exercícios de cada dia.",
    },
    {
      title: "Dieta do nutricionista",
      description: "Seu nutricionista envia o plano alimentar, organizado por refeição.",
    },
    {
      title: "Registro de treino",
      description: "Anote séries, repetições e carga de cada exercício feito.",
    },
    {
      title: "Gráficos de evolução",
      description: "Veja em um gráfico como sua carga e volume evoluem por exercício.",
    },
    {
      title: "Convide seus profissionais",
      description: "Convide seu personal ou nutricionista por um link enviado por e-mail.",
    },
    {
      title: "Medidas corporais",
      description: "Registre peso e medidas e acompanhe a evolução ao longo do tempo.",
    },
  ] satisfies Feature[],
};
