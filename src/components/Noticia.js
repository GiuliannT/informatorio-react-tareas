export const Noticia = () => {
  const noticia = {
    titulo: "Titilo de la noticia",
    descripcion:
      "lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  };

  const { titulo } = noticia;

  return <div>{titulo}</div>;
};
