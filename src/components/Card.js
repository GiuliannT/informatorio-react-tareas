export const Card = ({ imageName, title, text }) => {
  return (
    <div className="bg-gray-100 rounded shadow-lg sm:w-96 sm:h-96 m-3">
      <img
        className="rounded-t"
        src={`/img/${imageName}.png`}
        alt="course img"
      />
      <div className="content px-4 py-2 sm:h-44">
        <h1 className="text-xl">{title}</h1>
        <p className="text-sm">{text}</p>
        <a className="text-base font-bold text-blue-600" href="/">
          GO TO COURSE
        </a>
      </div>
    </div>
  );
};
