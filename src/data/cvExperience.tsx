

export interface experienceProps {
    companyName: string;
    role: string;
    duration: string;
    description: string[] | string;
    activities?: string[];
  }

export const cvExperiences = [
    {
      companyName: "Las Palmas Ajijic",
      role: "Auxiliar administrativo",
      duration: "Agosto 2022 - Diciembre 2022",
      description: 
        "Como parte de mi proyecto de residencia profesional, participé en la creación de una serie de propuestas para esta organización:",
       activities:[
        "Su organigrama organizacional",
        "Un manual de procesos",
        "Descripciones de puesto para cada uno de los cargos de la organización",
        "Métricas de desempeño",
        "Identidad organizacional de dicha organización",
       ]
      
    },
    {
      companyName: "The Lake Chapala Society A.C",
      role: "Auxiliar administrativo",
      duration: "Enero 2022 - Junio 2022",
      description: [
        "Como parte de mi servicio social, brindé apoyo a nivel administrativo en la planeación y ejecución de los diferentes programas del equipo de comunicación de dicha institución, la cual es una ONG sin fines de lucro que promueve la integración de la comunidad extranjera y local en Chapala, Jalisco.",
      ],
    },
  ];