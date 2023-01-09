const data = {
    status: "success",
    items: [
      {
        id: 1,
        title: "Celular iPhone 11 64 GB Negro ",
        price: 401,
        image: require('./images/img01.jpg'),
        category: "phone",
        description: "El iPhone 11 Negro tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, capturar excelentes fotos nocturnas con el modo Noche y grabar videos con una calidad sorprendente. Además, es resistente al agua y al polvo,* tiene una batería de larga duración y viene en seis colores diferentes. Disfruta la espectacular experiencia de tener un iPhone 11.¡Encuentra el iPhone ideal para ti acá!",
        characteristic: "Sistema de dos cámaras,fotos en situaciones de poca luz con el modo noche, resistencia al agua de hasta 30 min (Prof max 2 metros). No incluye adaptador de corriente ni EarPods",
        cantidad: 1,
      },
      {
        id: 2,
        title: "Celular KALLEY Black Z 128GB Azul",
        price: 304,
        image: require('./images/kalley.jpg'),
        category: "phone",
        description: "El BLACK Z Azul de Kalley revoluciona la tecnología GAMER en Colombia, gracias a sus excepcionales ventajas como su Procesador GAMER G37 a 2,3GHZ, para no perder ninguna partida, la Pantalla de 6,5” HD+ con 90HZ de refrescado permite ejecutar los mejores movimientos en juego y su batería de 5.000mAh para jugar por horas sin parar, además sus 6GB de RAM para correr con facilidad las mejores gráficas y 128GB de ROM almacenar lo que quieras y con toda la seguridad, accesibilidad y modo juego de Android 12 ¡que esperas para ganar tus partidas con tus celulares Kalley!¡Lleva el tuyo!",
        characteristic: "Pantalla de 90HZ Gran experiencia visual. RAM de 6GB, Puede con TODO! Chipset Ultra-Rápido G37 Corre a 2,3GHZ. Bateria de 5.000Mah poder que dura todo el día. Ahórrate los Accesorios, Kalley los incluye.",
        cantidad: 1
      },
      {
        id: 3,
        title: "MacBook Air de 13 Pulgadas",
        price: 475,
        image: require('./images/macbook.jpg'),
        category: "portatil",
        description: "Un nuevo poder toma vuelo.El MacBook Air es el notebook más delgado y liviano de Apple, y vuelve completamente renovado por dentro. Gracias al chip M1 de Apple, la CPU es hasta 3,5 veces más rápida y la GPU hasta 5 veces más vleoz. El avanzado Neural Engine permite un aprendizaje automático hasta 9 veces superior. La batería es la de mayor duración en un MacBook Air. Y su diseño sin ventilador es supersilencioso. Nunca ha sido tan fácil llevar tanto poder a todos lados. ¡Encuentra el MacBook ideal para ti acá!",
        characteristic: "Teclado en Español Latinoamericano, No tiene ventilador, Trabaja en silencio. Pantalla Retina de 13,3 pulgadas resolución de 2560 x 1600, Usa tu huella digital para Desbloquear.,Conectividad: Wi-Fi 6 / Thunderbolt / USB4",
        cantidad: 1
      },
      {
        id: 4,
        title: "Celular MOTOROLA G41 128GB Negro",
        price: 399,
        image: require('./images/motorola.jpg'),
        category: "phone",
        description: "Sorpréndete con el MOTO G41 color negro azul y su sistema de 3 cámaras.| Captura todos tus momentos sin parar y almacénalos sin preocuparte gracias a sus 128 GB de memoria. Disfruta de series, películas y juegos en su pantalla OLED ultraancha. No te preocupes por la carga, su bateria de 5000 mAH te da horas de diversión . No lo pienses más, ¡lleva el tuyo ahora!",
        characteristic: "Sistema multicámara con 48 MP y OIS fotos maravillosas, Pantalla OLED Max Visión de 6.4 pulgadas, Batería de 5000 mAh con TurboPower™ máximo rendimiento, Procesador ultrarrápido y eficiente",
        cantidad: 1
      },
      {
        id: 5,
        title: "Celular OPPO A57 128GB Verde",
        price: 405,
        image: require('./images/oppo.jpg'),
        category: "phone",
        description: "El Oppo A57 negro cuenta con un diseño innovador y cuerpo curvo 2D permitiendo un mejor agarre, carga rápida de 33W SUPERVOOC, disfruta del uso de aplicaciones sin contratiempos, además cuenta con altavoces duales para un sonido de mayor potencia. Su sistema ColorOS, cuenta con funciones exclusivas para el usuario y mayor seguridad garantizando la protección de datos almacenados en el smartphone. ¡Lleva el tuyo ahora!",
        characteristic: "Disfruta del doble de tranquilidad con 2 años de garantía, Ampliación de RAM de 3 niveles para mejorar el rendimiento, Sistema operativo de alta seguridad y funciones exclusivas, Sonido estereo, Certificación IP54",
        cantidad: 1
      },
      {
        id: 6,
        title: "Computador Portátil ASUS 15,6",
        price: 285,
        image: require('./images/portatilasus.jpg'),
        category: "portatil",
        description: "Ya sea para trabajar o jugar, El ASUS X515 plateado es el portátil que ofrece un gran rendimiento y efectos visuales envolventes. Su pantalla NanoEdge cuenta con amplios ángulos de visión de 178 ° y un revestimiento antirreflejos para una experiencia verdaderamente atractiva. Con un peso total de solo 1,8 kg, el ASUS X515 es extremadamente portátil, tan ligero que se adapta a su estilo de vida. Incluye salida HDMI , para que pueda conectar fácilmente todos sus periféricos, pantallas y proyectores actuales sin problemas. Adquiérelo ya!",
        characteristic: "Incluye Morral y Mouse alámbrico óptico, Mejor desempeño, procesador Intel de 11va generación, Ultrarrápido almacenamiento de estado sólido, Audio SonicMaster te garantiza una decodificación precisa, Carga Eficiente puede cargar al 60% en solo 49 minutos.",
        cantidad: 1
      },
      {
        id: 7,
        title: "Computador Portátil HP Pavilion 15.6",
        price: 360,
        image: require('./images/portatilhp.jpg'),
        category: "portatil",
        description: "Portátil HP Pavilion 15-eg0501la. ¡Perfecto para tus momentos más productivos! El mejor desempeño gracias a su potente procesador y gran capacidad de almacenamiento contenido en un espectacular diseño que respeta el medio ambiente. Gracias al audio de B&O, una relación de pantalla-cuerpo más grande y biseles con microbordes que maximizan tu visión, el entretenimiento está al alcance de tus manos. Con su diseño portable y ligero de larga vida de batería, potentes gráficos, almacenamiento SSD y rápida memoria RAM, cualquier sitio será tu espacio de trabajo. No esperes más, ¡lleva el tuyo ya!",
        characteristic: "Memoria doble canal que aumenta el rendimiento del sistema, Conexíón fluida. Combinación Wi-Fi 6 y Bluetooth 5.2, Imágenes nítidas en una pantalla con micro bordes, Sonido Calidad. Audio by B&O, Dual speakers, HP Audio Boost, HP Fast Charge. Carga de 0 a 50% en aproximadamente 45 min",
        cantidad: 1
      },
      {
        id: 8,
        title: "Computador Portátil LENOVO 14",
        price: 335,
        image: require('./images/portatillenovo.jpg'),
        category: "portatil",
        description: "En el portátil LENOVO IdeaPad 3 color azul, encuentra todo el rendimiento que necesitas, un portátil accesible que cubre tus necesidades, su combinación generosa de memoria Ram y almacenamiento en estado solido es perfecto para tus tareas diarias, con un diseño extraordinario, este equipo superará tus expectativas. Así mismo, te brindará un entretenimiento superior gracias a su sonido Dolby Audio, y te sentirás seguro gracias a su obturador de privacidad en su cámara, cuando termines tus reuniones o videollamadas solo tienes que cerrarlo. Aprovecha ¡lleva el tuyo ahora!",
        characteristic: "Lector de huella, mayor seguridad de acceso, Obturador de privacidad de la cámara, mayor privacidad, Dolby Audio, mayor calidad en sonido., Película antirreflejo trabaja en cualquier condición de luz., Bisagra con mayor extensión. Mejora ángulo de visión",
        cantidad: 1
      },
      {
        id: 9,
        title: "Computador Portátil VICTUS Gamer",
        price: 799,
        image: require('./images/portatilvictus.jpg'),
        category: "portatil",
        description: "Juguemos! El poderoso portátil gaming Victus by HP de 16.1 pulgadas integra lo que necesitas para jugar. Equipado con un potente procesador Intel® de 11.ª generación, excelentes gráficos NVIDIA® GeForce® y un sistema de refrigeración efectivo que evita el sobrecalentamiento. Además de una pantalla de alta resolución y rápida frecuencia de actualización para que disfrutes de una experiencia visual ultra nítida. Está fabricado con conciencia medioambiental, incluye materiales sustentables tales como plástico procedente de los océanos en la carcasa de la cubierta, bisel y altavoces",
        characteristic: "Tecnología de atenuación DC Dimming que controla el brillo, Teclado retroiluminado con teclado numérico integrado, Gran nitidez. Pantalla que cubre el 100 % del espectro sRGB, HP Fast Charge. Carga de 0 a 50% en aproximadamente 45 min, Personalización con OMEN Gaming Hub",
        cantidad: 1
      },
      {
        id: 10,
        title: "Celular XIAOMI Redmi Note 11",
        price: 501,
        image: require('./images/xiominote.jpg'),
        category: "phone",
        description: "Con el REDMI Note 11 tendrás un rendimiento único y un gran ahorro de batería gracias a sus 6 nm, esto significa que tendrás la posibilidad de utilizarlo sin demora mientras que el equilibrio energético te hará sentir que su energía no tiene fin. Además, su batería de 5000 mAh posee un sistema de carga rápida que permite que lo cargues de 0 a 100% en aprox 58 minutos, sumérgete en una experiencia audiovisual magnifica gracias a su pantalla AMOLED que te ofrece colores vivos y naturales junto con su altavoz doble que te permitirá disfrutar de contenidos con una calidad optima ¡Ven por el tuyo!",
        characteristic: "Procesador Snapdragon de 6 nm, Pantalla AMOLED con 90 Hercios, Carga rápida Pro de 33W, Cámara cuádruple, principal de 50 MP, Doble altavoz para un sonido estéreo",
        cantidad: 1
      },
      {
        id: 11,
        title: "Celular SAMSUNG Galaxy A13 128GB",
        price: 377,
        image: require('./images/samsung.jpg'),
        category: "phone",
        description: "El Galaxy A13 llamara tu atención con la pantalla infinita de 6,6 pulgadas FHD+ y con la cámara cuádruple que te ofrece un lente principal de alta resolución 50 MP, Ultra gran angular de 5MP, Teleobjetivo de 2MP y un lente macro para te acerques y logres las mejores fotografías de detalle. Disfruta la potente batería de 5.000 mAh y su compatibilidad con carga rápida de 15W. ¡Compra el tuyo ahora!",
        characteristic: "Cámara cuadruple principal de 50MP, Ahorro de energia adaptable, Pantalla 6.6 pulgadas (FHD+)",
        cantidad: 1
      },
      {
        id: 12,
        title: "Celular iPhone 11 64 GB Blanco ",
        price: 401,
        image: require('./images/iphoneb.jpg'),
        category: "phone",
        description: "El iPhone 11 Blanco tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, capturar excelentes fotos nocturnas con el modo Noche y grabar videos con una calidad sorprendente. Además, es resistente al agua y al polvo,* tiene una batería de larga duración y viene en seis colores diferentes. Disfruta la espectacular experiencia de tener un iPhone 11.¡Encuentra el iPhone ideal para ti acá!",
        characteristic: "Sistema de dos cámaras,fotos en situaciones de poca luz con el modo noche, resistencia al agua de hasta 30 min (Prof max 2 metros). No incluye adaptador de corriente ni EarPods",
        cantidad: 1,
      },
      {
        id: 13,
        title: "Celular iPhone 11 64 GB Azul ",
        price: 401,
        image: require('./images/iphonea.jpg'),
        category: "phone",
        description: "El iPhone 11 Azul tiene un sistema de dos cámaras que te permite tomar fotos con ultra gran angular, capturar excelentes fotos nocturnas con el modo Noche y grabar videos con una calidad sorprendente. Además, es resistente al agua y al polvo,* tiene una batería de larga duración y viene en seis colores diferentes. Disfruta la espectacular experiencia de tener un iPhone 11.¡Encuentra el iPhone ideal para ti acá!",
        characteristic: "Sistema de dos cámaras,fotos en situaciones de poca luz con el modo noche, resistencia al agua de hasta 30 min (Prof max 2 metros). No incluye adaptador de corriente ni EarPods",
        cantidad: 1,
      },
    ],
  };

  export default data;