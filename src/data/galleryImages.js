const galleryImages = [
    {
        src: "/img/gallery/bamboobridge.jpeg",
        title: "Bamboo, arroz y niebla",
        location: "Pai, Tailandia",
        watermark: "Wild Mirror",
        description: `Flexible, resistente y abundante, el bambú es una materia prima sostenible que se renueva
        constantemente gracias a su rápido crecimiento. Este puente fue construido por monjes y pobladores
        locales para permitir el paso hacia el templo sin dañar los arrozales, respetando los ritmos de la
        tierra.
        Elevado sobre el verde, este camino suspendido honra un equilibrio entre humildad, belleza y
        comunidad. La niebla matinal envuelve la escena, como si protegiera el silencio y la historia que
        aún susurra entre las fibras del bambú.`,
    },
    {
        src: "/img/gallery/mudelephant.jpeg",
        title: "Mirada de barro",
        location: "Parque Nacional Yala, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Su mirada dice más que mil palabras.
        Habla por los miles de elefantes que han sido maltratados y explotados por el ser humano.
        Es una mirada poderosa,fuerte. Pero tambien sensible y temerosa.
        Una mirada que interpela.
        Que nos llama a ser mas conscientes de lo que hacemos y también de lo que elegimos no hacer para que esta mirada no desaparezca. 
        Para que siga existiendo.` ,
    },
    {
        src: "/img/gallery/owl.jpeg",
        title: "Curiosa Sabiduria",
        location: "Parque Nacional Ranthambore, India",
        watermark: "Wild Mirror",
        description: `En la tradición india, las lechuzas están profundamente ligadas a la sabiduría y la intuición. Son mensajeras entre planos, capaces de ver lo que a otros les pasa desapercibido. Esta, curiosa y atenta, no busca respuestas, sino presencia. Porque la verdadera curiosidad no es solo querer saber, sino afinar los sentidos, abrir el corazón y dejar que algo nos conmueva. Así, mirar se vuelve un acto de conciencia.`,
    },
    {
        src: "/img/gallery/sietetazas.jpeg",
        title: "Renacer en Piedra",
        location: "Radal Siete Tazas, Parque Nacional Radal Siete Tazas, Chile",
        watermark: "Wild Mirror",
        description: `Tras el terremoto de 2010, las Siete Tazas se secaron. El agua desapareció entre fisuras en la roca.
        Pero con el tiempo, sin intervención humana, la naturaleza selló las grietas y el agua volvió a fluir. 
        Esta imagen es testigo de ese renacer. Un recordatorio de que incluso lo que parece perdido puede encontrar su cauce otra vez.
        A veces, solo hace falta confiar en los procesos silenciosos que, sin prisa, nos devuelven al centro.`,
    },
    {
        src: "/img/gallery/bandurria_austral.jpeg",
        title: "Vigia de los Humedales",
        location: "Valdivia, Chile",
        watermark: "Wild Mirror",
        description: `De postura erguida y mirada firme, la bandurria austral encarna el espíritu del guardián silencioso presente sin perturbar, atenta sin exigir.
        Habita los humedales como quien entiende los ritmos antiguos, los flujos sutiles que sostienen la vida en equilibrio.
        Su figura, quieta pero alerta, nos recuerda que cuidar también es observar, que proteger empieza por habitar con respeto.`,
    },
    {
        src: "/img/gallery/martin_pescador.jpeg",
        title: "Instantes",
        location: "Valdivia,Chile",
        watermark: "Wild Mirror",
        description: `A veces, la naturaleza responde a un deseo profundo.
        Este encuentro con el Martín pescador fue eso: la manifestación de un anhelo, en el lugar exacto, en el instante justo. 
        Su presencia habla de un ecosistema vivo, en medio de transformaciones constantes que lo desafían. 
        Y nos recuerda que conservar también es aprender a mirar con el corazón abierto, 
        listos para recibir la belleza cuando decide aparecer.`,
    },
    {
        src: "/img/gallery/koala_magnetic.jpeg",
        title: "El arte de parar",
        location: "Keppel Island, Australia",
        watermark: "Wild Mirror",
        description: `Mientras nosotros corremos detrás de la productividad, él duerme.
        El koala no apura su paso, no se exige rendir más. Escucha su cuerpo y le da lo que necesita:
        descanso.
        Su pausa no es pereza. Es una forma de sostener la vida.`,
    },
    {
        src: "/img/gallery/rock_wallaby.jpeg",
        title: "Rock Wallaby",
        location: "Magnetic Island, Australia",
        watermark: "Wild Mirror",
        description: `Ágil, silencioso y de hábitos discretos, encarna la resiliencia y la armonía con el entorno.
        Su vida entre grietas y sombras es un recordatorio de que la fortaleza también puede ser suave.`,
    },
    {
        src: "/img/gallery/agua_luz.jpeg",
        title: "Agua y Luz",
        location: "Keppel Island, Australia",
        watermark: "Wild Mirror",
        description: `Caminar hacia el horizonte.
         Dejar que la luz atraviese y revele.
         En ese borde entre tierra y agua, algo se alinea: afuera, el sol cae; adentro, algo se aquieta.`,
    },
    {
        src: "/img/gallery/momento_justo.jpeg",
        title: "Momento Justo",
        location: "Puerto Rio Tranquilo, Chile",
        watermark: "Wild Mirror",
        description: `Observar. Saber cuándo moverse.
        Aveces, todo lo que necesitamos es eso: paciencia, silencio y confian en que el momento justo llegará...Cuando estemos preparados.`,
    },
    {
        src: "/img/gallery/arde_sutil.jpeg",
        title: "Donde arde lo sutil",
        location: "Cerro Castillo, Chile",
        watermark: "Wild Mirror",
        description: `En medio de la vastedad patagónica, los álamos se alzan como llamas suaves que no queman, pero iluminan.
        El día se retira y algo en este paisaje dice que no todo final es oscuridad: a veces es transformación.`,
    },
    {
        src: "/img/gallery/aguila_mora.jpeg",
        title: "Ser Visto",
        location: "Puerto Rio Tranquilo, Chile",
        watermark: "Wild Mirror",
        description: `Que nos invita a vernos a nosotros mismos desde lo más honesto, sin ataduras ni juicios.
        En esa intensidad profunda se revela una verdad sencilla: ser vistos empieza por reconocernos tal como somos, con todas nuestras luces y sombras.`,
    },
    {
        src: "/img/gallery/ardilla_india.jpeg",
        title: "El Eco de Rama",
        location: "Jaipur, India",
        watermark: "Wild Mirror",
        description: `La ardilla, omnipresente en la India, simboliza la diligencia y la devoción a Lord Rama.
        Cuenta la leyenda que, durante la construccion del puente a Lanka, esta pequeña criatura contribuyó llevando granos de arena, una accion que Rama mismo bendijo.
        Su presencia nos invita a reconocer lo divino en lo cotidiano, recordando el valor de cada contribución, por humilde que parezca, en la vida.`,
    },
    {
        src: "/img/gallery/espejo_ancestral.jpeg",
        title: "Espejo Ancestral: La Conexión Olvidada",
        location: "Pukhet, Tailandia",
        watermark: "Wild Mirror",
        description: `Un espejo biológico innegable de dónde venimos, una conexión ancestral que, al reconocerla, nos
        impulsa a una mayor conciencia de nuestro lugar en la naturaleza. Su mirada, sin embargo, tambien refleja el impacto humano: la invasión de su habitad y la alimentación irresponsable.
        Una imagen que nos urge a reconectar con la naturaleza que, en esencia, también nos define.`,
    },
    {
        src: "/img/gallery/pavoreal.jpeg",
        title: "Sinfonía de Plumas",
        location: "Kalpitiya, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Sus movimientos, al igual que el despliegue vibrante de sus plumas, evocaron la danza espontánea de la alegría y la profunda celebración de la vida que palpita en la naturaleza. 
        Observarlo fue una invitación a sintonizar con esa sinfonía vital, recordándome la conexión intrínseca entre mi propio espíritu y el ritmo danzante del mundo natural.
        `,
    },
    {
        src: "/img/gallery/abundancia_natural.jpeg",
        title: "Abundancia Natural",
        location: "Ella, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Mirando hoy esta imagen, el Martín Pescador de Sri Lanka me revela la profunda libertad que sentí entonces, 
        viajando por una tierra de vasta naturaleza. Su presencia viva, entre la riqueza natural del país, es un eco de aquellos días. 
        Ahora percibo que esa conexión con la abundancia y la libertad, que en ese momento viví, se manifiesta plenamente en este reflejo consciente,
        mostrando cómo la naturaleza nos espeja verdades, incluso tiempo después.`,
    },
    {
        src: "/img/gallery/dambulla.jpeg",
        title: "El Color de lo Inesperado",
        location: "Dambulla, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Aquel lugar, inicialmente un simple tránsito hacia otro destino, se reveló como un tesoro de vida natural. Esta imagen es un espejo de cómo, al mirar el mundo con amor y sin ideas fijas, la belleza inesperada siempre encuentra la manera de manifestarse, sorprendiéndonos y enriqueciendo nuestra conexión con el entorno.`,
    },
    {
        src: "/img/gallery/campos_de_te.jpeg",
        title: "Memoria Verde",
        location: "NuwaraEliya, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Las colinas de Nuwara Eliya, cubiertas por infinitos tapices de té, susurran historias ancestrales bajo un velo de neblina. 
        En esta vista, la belleza se entrelaza con la memoria histórica y la labor incansable de una comunidad, invitándonos a contemplar como la naturaleza 
        y la resiliencia humana persisten y florecen, ciclo tras ciclo.`,
    },
    {
        src: "/img/gallery/tren_nuwara.jpeg",
        title: "Viaje y Esencia",
        location: "Nuwara Eliya, Sri Lanka",
        watermark: "Wild Mirror",
        description: `La travesía de la vida: una danza entre el propósito humano y la constante fluidez de la naturaleza. 
        Nos invita a reconocer la belleza en cada etapa del camino y la interconexión profunda que reside en nuestro viaje personal.`,
    },
    {
        src: "/img/gallery/nectar.jpeg",
        title: "Nectar de la Esencia",
        location: "Ella, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Un colibrí bebe la esencia de una flor. Esta imagen, vibrante y llena de vida, nos invita a despertar del "piloto automático" y a dirigir nuestra energía hacia la esencia de nuestro propio propósito vital.
        Es un recordatorio de que la verdadera plenitud se halla en la conexión profunda con aquello que nutre nuestro espíritu, más allá de lo meramente material.`,
    },
    {
        src: "/img/gallery/vinculo_sagrado.jpeg",
        title: "Vinculo Sagrado",
        location: "Parque Nacional Yala, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Espejo de la fuerza y la quietud del amor incondicional. Nos recuerda como, mas alla de las especies,
        compartimos la misma necesidad de conexion y seguridad. Una invitación a nutrir nuestras propias relaciones y a 
        reconocer la belleza frágil de la vida que nos rodea, impulsándonos a proteger aquello que mas valoramos.
        `,
    },
    {
        src: "/img/gallery/ciguena_picogrueso.jpeg",
        title: "Cadena de elecciones",
        location: "Parque Nacional Yala, Sri Lanka",
        watermark: "Wild Mirror",
        description: `La naturaleza nos muestra su realidad: la supervivencia es una ley de vida. Sin embargo, nuestra
        manera de observar el mundo nos permite ir mas allá de esta ley. Esta foto nos invita a reflexionar sobre como elegimos ver a cada ser vivo. 
        Tenemos la posibilidad de reconocer el valor único de cada criatura y de cuestionar si nuestras acciones se basan solo en la necesidad 
        o en una decisión mas profunda y consciente sobre como coexistimos en este planeta.`,
    },
    {
        src: "/img/gallery/bufalo_agua.jpeg",
        title: "Fuerza Elemental",
        location: "Parque Nacional Yala, Sri Lanka",
        watermark: "Wild Mirror",
        description: `La mirada de este búfalo refleja una fuerza primordial, la misma que necesitamos para actuar con convicción ante los desafíos 
        ambientales. Una invitación a conectar con nuestra energía mas básica para ocuparnos, colaborar y generar conciencia por la naturaleza. 
        La preocupación convertida en acción, con la fuerza de lo elemental.`,
    },
    {
        src: "/img/gallery/sanacion.jpeg",
        title: "Sanacion",
        location: "Tangalle, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Los atardeceres son ese refugio para el alma. Cada matiz del cielo nos susurra que todo esta en su lugar. Es en estos momentos de profunda conexión con la naturaleza 
        que nos volvemos conscientes de nuestro camino y de las decisiones que tomamos. Es una invitación a sentir la paz que fluye al 
        ritmo de la naturaleza.`,
    },
    {
        src: "/img/gallery/curso_inalterable.jpeg",
        title: "Curso Inalterable",
        location: "Valparaiso, Chile",
        watermark: "Wild Mirror",
        description: `Cada ola, una caricia persistente que esculpe el paisaje con la paciencia infinita del tiempo. La 
        fuerza de la naturaleza sigue su curso inalterable, recordándonos que en este fluir constante, todo se transforma,  
        y en esa transformación reside la esencia misma de la vida.`,
    },
    {
        src: "/img/gallery/infimos.jpeg",
        title: "Infimos",
        location: "Parque Nacional Queulat, Chile",
        watermark: "Wild Mirror",
        description: `Donde la escala humana se disuelve y nos sentimos pequeños ante algo superior, vasto e indomable,
        nace la invitación a la humildad, a la conexión con lo trascendente y al despertar de la percepción que solo 
        la grandeza de la naturaleza puede inspirar.`,
    },
    {
        src: "/img/gallery/marte.jpeg",
        title: "Marte",
        location: "Cerro Castillo, Chile",
        watermark: "Wild Mirror",
        description: `Como si fuera salido de otro planeta, estos lugares nos hacen acordar a lo asombrosa que es nuestra
        tierra. A veces, buscamos mas allá, sin reconocer la magia que nos rodea y que anhela nuestro respeto y cuidado.`,
    },
    {
        src: "/img/gallery/procesos.jpeg",
        title: "Procesos",
        location: "Sigiriya, Sri Lanka",
        watermark: "Wild Mirror",
        description: `La ruta se extiende como un reflejo de nuestros caminos internos. A veces los procesos personales
        nos sumergen en la oscuridad, en paisajes densos y desconocidos. Abrazar esas etapas, abrazarnos a nosotros mismos, es una muestra de valentía para continuar y crecer.`,
    },
    {
        src: "/img/gallery/presente.jpeg",
        title: "Presente",
        location: "Tangalle, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Instantes de conexión profunda con la naturaleza, donde el constante estimulo se desvanece, 
        revelando la paz del presente. En la simple contemplación de esta armonía natural, la mente encuentra su quietud.`,
    },
    {
        src: "/img/gallery/presunta_calma.jpeg",
        title: "Presunta Calma",
        location: "Galle, Sri Lanka",
        watermark: "Wild Mirror",
        description: `Frontera entre la aparente quietud de lo construido y la energía indomable del océano. Creemos dominar, trazar límites, pero la sabiduría de la naturaleza nos susurra una verdad más profunda: el verdadero equilibrio reside en su pulso. Ella nos controla, nos moldea, incluso cuando la marea parece en calma.`,
    }
];

export default galleryImages;
