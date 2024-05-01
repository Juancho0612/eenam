import React from "react";

const Eenam = () => {
  return (
    <div className="py-20 bg-gradient-to-r from-purple-200 to-pink-200">
      <h1 className="text-5xl font-bold mb-6 text-center text-purple-900">
        ¡Bienvenidos a EENAM!
      </h1>
      <section className="py-10 mx-auto max-w-5xl">
        <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg p-8">
          <img
            src="/img/eenam.jpg"
            alt="Eenam Logo"
            className="w-1/2 md:w-1/2 h-auto rounded-lg shadow-md"
          />
          <div className="md:ml-8 md:w-1/2">
            <p className="mb-4 text-lg text-purple-900 text-justify">
              Somos un mundo donde la creatividad y la pasión por los detalles
              se unen para dar ese toque especial a tus momentos más preciados.
              Fundada por la talentosa Nayrelis Rojas, EENAM se ha convertido en
              más que una marca; es una aliada perfecta para quienes buscan
              celebrar la vida con estilo y originalidad. Desde nuestros
              comienzos, nos hemos dedicado a infundir vida en cada rincón a
              través de decoraciones llamativas, diseños de eventos memorables y
              regalos que enamoran a primera vista. En EENAM, valoramos la
              originalidad, la calidad y el buen gusto, y nos esforzamos día a
              día para hacerlo realidad. Entre globos y moda, hemos logrado
              cultivar sonrisas y alegrías en cada una de nuestras creaciones.
              Nos enorgullecemos de trabajar con las mejores marcas,
              garantizando así los más hermosos y bien elaborados detalles para
              todo tipo de festejos. ¡Ven a EENAM, donde regalamos sonrisas,
              alegría, diversión y ese toque mágico que solo nosotros podemos
              ofrecer!
            </p>
          </div>
        </div>
      </section>
      <section className="py-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-pink-300 p-8 rounded-lg">
              <div>
                <h2 className="text-xl font-semibold mb-4">Misión</h2>
                <p className="text-lg mb-4 text-purple-900">
                  En EENAM, nos dedicamos a transformar momentos ordinarios en
                  experiencias extraordinarias a través de la creatividad y la
                  personalización. Nuestra misión es proporcionar decoración de
                  eventos y moda femenina que no solo cumplan las expectativas
                  de nuestros clientes, sino que las superen, ofreciendo
                  productos de altísima calidad, diseños innovadores y un
                  servicio excepcional. Nos comprometemos a trabajar con pasión
                  y precisión para que cada celebración sea reflejo de la
                  alegría y el estilo único de quienes confían en nosotros.
                </p>
              </div>
            </div>
            <div className="bg-purple-300 p-8 rounded-lg">
              <div>
                <h2 className="text-xl font-semibold mb-4">Visión</h2>
                <p className="text-lg mb-4 text-purple-900">
                  Nuestra visión es convertirnos en el referente indiscutible de
                  originalidad y excelencia en el mundo de la decoración de
                  eventos y la moda femenina. Aspiramos a ser la primera
                  elección para aquellos que buscan celebrar sus momentos más
                  emblemáticos y vestir con confianza, contribuyendo así al
                  desarrollo de una sociedad donde la belleza de los pequeños
                  detalles sea apreciada. En EENAM, nos proyectamos hacia un
                  futuro donde la innovación, la sustentabilidad y la capacidad
                  de personalización marquen la diferencia en cada producto y
                  servicio que ofrecemos, estableciendo nuevos estándares en la
                  industria y creando tendencias que resuenen con nuestra
                  clientela alrededor del mundo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eenam;
